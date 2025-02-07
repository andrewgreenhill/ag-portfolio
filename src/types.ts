type ContactFormDataType = {
  name: string;
  email: string;
  phone?: string;
  homeFaux?: string; // Honeypot field
  website?: string;
  message: string;
};

export type { ContactFormDataType };
