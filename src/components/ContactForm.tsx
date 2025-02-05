import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormDataType } from '../types';
import { messageSummary } from '../assets/utils';

type ContactFormProps = {
  titleMessage: string;
};

const SEND_EMAIL_ENDPOINT = import.meta.env.VITE_SEND_EMAIL_ENDPOINT;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function ContactForm({ titleMessage }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormDataType>();

  const [status, setStatus] = useState<'' | 'success' | 'error'>('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const clearStatus = () => {
    if (status) setStatus('');
  };

  const onSubmit = async (data: ContactFormDataType) => {
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      // Send form data via FormSubmit.co or EmailJS
      if (!SEND_EMAIL_ENDPOINT) {
        throw new Error('Email sending set-up is missing.');
      }
      if (!RECAPTCHA_SITE_KEY) {
        throw new Error('ReCAPTCHA set-up is missing.');
      }
      if (!captchaValue) throw new Error('Captcha failed');
      // TODO: Verify captchaValue with Google ReCAPTCHA API

      const emailData = {
        ...data,
        // Add fields as per https://formsubmit.co/documentation
        _subject: `Message from ${data.name} re ${messageSummary(data.message)}`,
        _replyto: data.email,
        _template: 'table',
        _captcha: 'false', // I am handling captcha myself
        // _autoresponse: 'Thank you for your message. I will get back to you soon.',
      };

      const response = await fetch(SEND_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setCaptchaValue(null); // Reset captcha after submission
      } else {
        throw new Error('Failed to send');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      // console.error(error); // TODO: Add more error handling, if needed
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1> */}
      <h2 className="text-2xl font-bold">{titleMessage}</h2>

      {status === 'success' && <p className="text-green-500 text-center mb-4">Message sent!</p>}
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
            {...register('name', { required: 'This field is required' })}
            onChange={clearStatus}
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
              required: 'This field is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
            })}
            onChange={clearStatus}
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
            className="w-full p-2 border rounded"
            rows={8}
            {...register('message', { required: 'This field is required' })}
            onChange={clearStatus}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(value: string | null) => setCaptchaValue(value)}
          // onChange={(value) => {
          //   console.log('ReCAPTCHA value:', value);
          //   setCaptchaValue(value);
          // }}
        />

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
    </div>
  );
}

export default ContactForm;
