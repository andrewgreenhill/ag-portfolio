import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { IContactFormData } from '../types';
import './ContactForm.css';
import { emailAddressPattern, messageSummary, sanitizeInput } from '../assets/utils';
import {
  errorMessageClasses,
  formFieldColourClasses,
  formContainerColourClasses,
  successMessageColourClasses,
  helpTextColourClasses,
  bodyTextColourClasses,
  submitButtonColourClasses,
  formErrorColourClasses,
} from '../assets/constants';
import { useTheme } from '../theme/ThemeContext';

type ContactFormProps = {
  titleMessage?: string;
};

/**
 * ContactForm component renders a Contact Form with fields for name, email, phone, website, and message.
 * It includes validation, reCAPTCHA verification, and handles form submission.
 *
 * @param {string} [props.titleMessage] - Optional title message to display above the form
 * @returns {JSX.Element} The rendered contact form component
 */
function ContactForm({ titleMessage }: ContactFormProps): JSX.Element {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    setError,
    clearErrors,
    watch,
  } = useForm<IContactFormData>();

  const SEND_EMAIL_ENDPOINT = import.meta.env.VITE_SEND_EMAIL_ENDPOINT || '';
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
  const haveSendDetails = !!(SEND_EMAIL_ENDPOINT && RECAPTCHA_SITE_KEY);

  const messageFieldIsRequired = 'This field is required';
  const messageInvalidEmailAddress = 'Invalid email address';

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [hasClickedSubmit, setHasClickedSubmit] = useState<boolean>(false); // Used for messaging
  const [soonAfterSubmit, setSoonAfterSubmit] = useState<boolean>(false); // Used for rate limiting
  const [isSubmitted, setIsSubmitted] = useState(false); // Used for the success modal
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');
  const [requestError, setRequestError] = useState<string>('');

  const clearStatus = () => {
    if (status) setStatus('');
  };

  const onSubmit = async (data: IContactFormData) => {
    // Rate limiting, to alleviate bot spamming.
    // Spambots may submit forms in rapid succession but humans don’t.
    if (soonAfterSubmit) {
      alert('Please wait a moment before submitting again.');
      return;
    }

    // Check whether the honeypot homeFaux contains data
    // Spambots often auto-fill hidden fields but humans don’t.
    if (data.homeFaux) {
      alert('Please leave the Phone(home) field empty.');
      return;
    }

    // Check whether ReCAPTCHA is completed
    if (!captchaValue) {
      setHasClickedSubmit(true);
      return;
    }

    // Send form data via FormSubmit.co or EmailJS
    try {
      if (!SEND_EMAIL_ENDPOINT) {
        throw new Error('Email sending set-up is missing.');
      }
      if (!RECAPTCHA_SITE_KEY) {
        throw new Error('ReCAPTCHA set-up is missing.');
      }
      if (!captchaValue) throw new Error('Captcha failed');
      // * Why wasn't there an error message due to missing variable/s?!!! Set env variables for GitHub pages!: Verify captchaValue with Google ReCAPTCHA API

      const emailData = {
        name: sanitizeInput(data.name, true),
        email: sanitizeInput(data.email, true),
        phone: sanitizeInput(data.phone || '', true),
        website: sanitizeInput(data.website || '', true),
        message: sanitizeInput(data.message),
        // Add fields as per https://formsubmit.co/documentation
        _subject: `Message from ${data.name} re ${messageSummary(data.message)}`,
        _replyto: data.email,
        _template: 'table',
        _captcha: 'false', // I'll handle captcha
        // _autoresponse: 'Thank you for your message. I will get back to you soon.',
      };

      const response = await fetch(SEND_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setStatus('success');
        setSoonAfterSubmit(true); // For rate limiting
        setTimeout(() => setSoonAfterSubmit(false), 5000); // Reset after 5 seconds
        // Show the modal on successful form submission
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      const err = error as { message?: string };
      setRequestError(err?.message || 'Failed to send');
      setStatus('error');
    }
  };

  /** Handle change to a form field that is required */
  function handleRequiredFieldChange(
    fieldName: keyof IContactFormData,
    value: string,
    alwaysSet?: boolean // Use 'true' to set the ReactHookForm value regardless of its error state
  ) {
    if (!value) {
      setError(fieldName, { type: 'required', message: messageFieldIsRequired });
    } else if (alwaysSet || errors[fieldName]) {
      clearErrors(fieldName);
      setValue(fieldName, value, { shouldValidate: true }); // Tell React Hook Form that there is a value
    }
  }

  /** Handle change to the email field, which is required and has a pattern */
  function handleEmailChange(
    value: string,
    alwaysSet?: boolean // Use 'true' to set the ReactHookForm value regardless of its error state
  ) {
    if (!value) {
      setError('email', { type: 'required', message: messageFieldIsRequired });
    } else if (!emailAddressPattern.test(value)) {
      setError('email', { type: 'pattern', message: messageInvalidEmailAddress });
    } else if (alwaysSet || errors.email) {
      clearErrors('email');
      setValue('email', value, { shouldValidate: true }); // Tell React Hook Form that the value is valid
    }
  }

  const fieldClasses = `w-full p-2 ${formFieldColourClasses} border ${
    isDark ? 'border-gray-600' : 'border-black'
  } rounded`;

  const [watchedName, watchedEmail, watchedMessage] = watch(['name', 'email', 'message']);

  const mandatoryFieldsCompleted =
    !!watchedName?.trim() && !!watchedEmail?.trim() && !!watchedMessage?.trim();

  return (
    <div className={`max-w-lg mx-auto p-6 ${formContainerColourClasses} shadow-lg rounded-lg`}>
      {titleMessage && <h2 className="text-2xl font-bold">{titleMessage}</h2>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          {!haveSendDetails && (
            <>
              <p className={formErrorColourClasses}>
                This form cannot be used currently. Please try again later or use LinkedIn to
                contact me.
              </p>
              <br />
            </>
          )}
          <label className="block font-medium">Name*</label>
          <input
            type="text"
            className={fieldClasses}
            {...register('name', { required: messageFieldIsRequired })}
            onInput={(event) => handleRequiredFieldChange('name', event.currentTarget.value, true)}
            onChange={(event) => {
              clearStatus();
              handleRequiredFieldChange('name', event.target.value);
            }}
          />
          {errors.name && <p className={errorMessageClasses}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email*</label>
          <input
            type="email"
            className={fieldClasses}
            {...register('email', {
              required: messageFieldIsRequired,
              pattern: {
                value: emailAddressPattern,
                message: messageInvalidEmailAddress,
              },
            })}
            onInput={(event) => handleEmailChange(event.currentTarget.value, true)}
            onChange={(event) => {
              clearStatus();
              handleEmailChange(event.target.value);
            }}
          />
          {errors.email && <p className={errorMessageClasses}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            className={fieldClasses}
            {...register('phone')}
            onChange={clearStatus}
          />
        </div>

        {/* Phone (home), honeypot field */}
        <div className="hidden">
          <label className="block font-medium">Phone (home)</label>
          <input type="text" className={fieldClasses} {...register('homeFaux')} />
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium">Website</label>
          <input
            type="text"
            className={fieldClasses}
            {...register('website')}
            onChange={clearStatus}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message*</label>
          <textarea
            rows={8}
            className={fieldClasses}
            {...register('message', { required: messageFieldIsRequired })}
            onInput={(event) =>
              handleRequiredFieldChange('message', event.currentTarget.value, true)
            }
            onChange={(event) => {
              clearStatus();
              handleRequiredFieldChange('message', event.target.value);
            }}
          ></textarea>
          {errors.message && <p className={errorMessageClasses}>{errors.message.message}</p>}
        </div>

        {haveSendDetails && (
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(value: string | null) => setCaptchaValue(value)}
            />
            {hasClickedSubmit && !captchaValue && (
              <p className={errorMessageClasses}>{'Please complete the reCAPTCHA verification.'}</p>
            )}
          </div>
        )}

        {/* Privacy Note */}
        <p className={`text-xs ${helpTextColourClasses}`}>
          I respect your privacy, and will not share your details.
        </p>

        {/* Send Button */}
        <motion.button
          whileHover={{
            scale: haveSendDetails ? 1.05 : 1,
            color:
              errors.name ||
              errors.email ||
              errors.message ||
              !captchaValue ||
              status === 'error' ||
              !mandatoryFieldsCompleted
                ? '#333333'
                : '#22c55e',
          }}
          whileTap={{ scale: haveSendDetails ? 0.95 : 1 }}
          type="submit"
          className={`contact-send-button w-full ${bodyTextColourClasses} py-2 rounded ${submitButtonColourClasses} transition`}
        >
          {isSubmitting ? 'Sending...' : 'SEND'}
        </motion.button>

        {status === 'success' && isSubmitted && (
          <p className={`${successMessageColourClasses} text-center mb-4`}>Message sent!</p>
        )}
        {status === 'error' && (
          <p className={`${errorMessageClasses} text-center mb-4`}>
            Something went wrong when attempting to send.
            {requestError === 'NetworkError when attempting to fetch resource.' ||
            requestError === 'Failed to fetch'
              ? ' It appears that the email sending service is down.'
              : ''}{' '}
            Please try again later or use LinkedIn to contact me.
          </p>
        )}
      </form>
      {isSubmitted && (
        <div id="thankYouModal" className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setIsSubmitted(false);
                reset();
                setHasClickedSubmit(false);
              }}
            >
              &times;
            </span>
            <div className="animation">🎉</div>
            <p>
              Message sent. Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
