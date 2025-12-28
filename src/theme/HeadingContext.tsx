import { createContext, useContext, useState, ReactNode } from 'react';

interface HeadingFlagsContextValue {
  hasSeenProjectsHeading: boolean;
  setHasSeenProjectsHeading: (value: boolean) => void;
  hasSeenSkillsHeading: boolean;
  setHasSeenSkillsHeading: (value: boolean) => void;
  hasSeenAboutHeading: boolean;
  setHasSeenAboutHeading: (value: boolean) => void;
  hasSeenContactHeading: boolean;
  setHasSeenContactHeading: (value: boolean) => void;
}

const HeadingFlagsContext = createContext<HeadingFlagsContextValue | undefined>(undefined);

function HeadingFlagsProvider({ children }: { children: ReactNode }) {
  const [hasSeenProjectsHeading, setHasSeenProjectsHeading] = useState(false);
  const [hasSeenSkillsHeading, setHasSeenSkillsHeading] = useState(false);
  const [hasSeenAboutHeading, setHasSeenAboutHeading] = useState(false);
  const [hasSeenContactHeading, setHasSeenContactHeading] = useState(false);

  return (
    <HeadingFlagsContext.Provider
      value={{
        hasSeenProjectsHeading,
        setHasSeenProjectsHeading,
        hasSeenSkillsHeading,
        setHasSeenSkillsHeading,
        hasSeenAboutHeading,
        setHasSeenAboutHeading,
        hasSeenContactHeading,
        setHasSeenContactHeading,
      }}
    >
      {children}
    </HeadingFlagsContext.Provider>
  );
}

function useHeadingFlags(): HeadingFlagsContextValue {
  const ctx = useContext(HeadingFlagsContext);
  if (!ctx) {
    throw new Error('useHeadingFlags must be used within a HeadingFlagsProvider');
  }
  return ctx;
}

export { HeadingFlagsProvider, useHeadingFlags };
