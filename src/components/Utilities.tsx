import ReactMarkdown from 'react-markdown';

/** ReactMarkdown with a setting to make it open hyperlinks in a new tab  */
function ReactMarkdownOpenInNewTab({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      components={{
        a: (props) => {
          const { href, children, ...rest } = props;
          return (
            <a
              className="text-green-600 hover:underline"
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
