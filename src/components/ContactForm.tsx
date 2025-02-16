import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormDataType } from '../types';
import './ContactForm.css';
import { emailAddressPattern, messageSummary, sanitizeInput } from '../assets/utils';

type ContactFormProps = {
  titleMessage: string;
};

function ContactForm({ titleMessage }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    setError,
    clearErrors,
  } = useForm<ContactFormDataType>();

  const SEND_EMAIL_ENDPOINT = import.meta.env.VITE_SEND_EMAIL_ENDPOINT;
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const messageFieldIsRequired = 'This field is required';
  const messageInvalidEmailAddress = 'Invalid email address';

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [hasClickedSubmit, setHasClickedSubmit] = useState<boolean>(false); // Used for messaging
  const [soonAfterSubmit, setSoonAfterSubmit] = useState<boolean>(false); // Used for rate limiting
  const [isSubmitted, setIsSubmitted] = useState(false); // Used for the success modal
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');

  const clearStatus = () => {
    if (status) setStatus('');
  };

  const onSubmit = async (data: ContactFormDataType) => {
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
      // TODO: Verify captchaValue with Google ReCAPTCHA API

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      // console.error(error); // If needed, add more error handling
    }
  };

  /** Handle change to a form field that is required */
  function handleRequiredFieldChange(
    fieldName: keyof ContactFormDataType,
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

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1> */}
      <h2 className="text-2xl font-bold">{titleMessage}</h2>

      {status === 'success' && isSubmitted && (
        <p className="text-green-500 text-center mb-4">Message sent!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center mb-4">Something went wrong. Try again.</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Name*</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            {...register('name', { required: messageFieldIsRequired })}
            onInput={(event) => handleRequiredFieldChange('name', event.currentTarget.value, true)}
            onChange={(event) => {
              clearStatus();
              handleRequiredFieldChange('name', event.target.value);
            }}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email*</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            {...register('phone')}
            onChange={clearStatus}
          />
        </div>

        {/* Phone (home), honeypot field */}
        <div className="hidden">
          <label className="block font-medium">Phone (home)</label>
          <input type="text" className="w-full p-2 border rounded" {...register('homeFaux')} />
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium">Website</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            {...register('website')}
            onChange={clearStatus}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message*</label>
          <textarea
            rows={8}
            className="w-full p-2 border rounded"
            {...register('message', { required: messageFieldIsRequired })}
            onInput={(event) =>
              handleRequiredFieldChange('message', event.currentTarget.value, true)
            }
            onChange={(event) => {
              clearStatus();
              handleRequiredFieldChange('message', event.target.value);
            }}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <div>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(value: string | null) => setCaptchaValue(value)}
          />
          {hasClickedSubmit && !captchaValue && (
            <p className="text-red-500 text-sm">{'Please complete the reCAPTCHA verification.'}</p>
          )}
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500">
          I respect your privacy. Your details will only be used to reply to your inquiry and will
          not be shared.
        </p>

        {/* Send Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600 transition"
        >
          {isSubmitting ? 'Sending...' : 'SEND'}
        </motion.button>
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
              Message Sent. Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
