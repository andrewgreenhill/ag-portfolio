interface IContactFormData {
  name: string;
  email: string;
  phone?: string;
  homeFaux?: string; // Honeypot field
  website?: string;
  message: string;
}

type TProjectGroupCode = 'Miscellaneous' | 'IdeagenDT' | 'DamstraAPE' | 'EarlyWork';

interface IProjectRecord {
  id: number;
  groupCode: TProjectGroupCode;
  subGroup: string;
  projectName: string;
  projectDescription: string;
  myRole: string;
  technologies: string;
  link2Demo: string;
  link2Code: string;
  images: string[];
  when: string;
  publicComments: string;
  internalComments: string; // Internal Comments will not be displayed to users
}

export type { IContactFormData, TProjectGroupCode, IProjectRecord };
