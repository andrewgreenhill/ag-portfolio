import ReactMarkdown from 'react-markdown';
import { hyperlinkClasses } from '../assets/constants';

/** ReactMarkdown with a setting to make it open hyperlinks in a new tab  */
function ReactMarkdownOpenInNewTab({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      components={{
        a: (props) => {
          const { href, children, ...rest } = props;
          return (
            <a
              className={hyperlinkClasses}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...rest}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}

export { ReactMarkdownOpenInNewTab };
