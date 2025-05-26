interface IContactFormData {
  name: string;
  email: string;
  phone?: string;
  homeFaux?: string; // Honeypot field
  website?: string;
  message: string;
}

type TProjectGroupKey = 'Miscellaneous' | 'IdeagenDT' | 'DamstraAPE' | 'EarlyWork';

interface IProjectGroupMetadata {
  name: string;
  description: string;
  link: string;
}

type TProjectGroupsInfo = Record<TProjectGroupKey, IProjectGroupMetadata>;

interface IProjectRecord {
  id: number;
  groupCode: TProjectGroupKey;
  subGroup: string;
  projectName: string;
  projectDescription: string; // Markdown content is supported so you can use links, etc.
  myRole: string;
  technologies: string;
  link2Demo: string;
  link2Code: string;
  images: string[];
  when: string;
  publicComments: string;
  internalComments: string; // Internal Comments will not be displayed to users
}

export type {
  IContactFormData,
  TProjectGroupKey,
  IProjectGroupMetadata,
  TProjectGroupsInfo,
  IProjectRecord,
};
