import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormDataType } from '../types';

type ContactFormProps = {
  titleMessage: string;
};

function ContactForm({ titleMessage }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormDataType>();

  const [status, setStatus] = useState<'success' | 'error' | ''>('');

  const onSubmit = async (data: ContactFormDataType) => {
    try {
      // Send form data via FormSubmit.co or EmailJS
      const SEND_EMAIL_ENDPOINT = import.meta.env.VITE_SEND_EMAIL_ENDPOINT;
      if (!SEND_EMAIL_ENDPOINT) {
        throw new Error('Email sending set-up is missing.');
      }
      const response = await fetch(SEND_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      console.error(error); // QQQ/TODO: Handle error gracefully
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
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input type="text" className="w-full p-2 border rounded" {...register('phone')} />
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium">Website</label>
          <input type="text" className="w-full p-2 border rounded" {...register('website')} />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message*</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            {...register('message', { required: 'This field is required' })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500">
          Privacy: By using this form, you agree with the handling of your data by this website.
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
