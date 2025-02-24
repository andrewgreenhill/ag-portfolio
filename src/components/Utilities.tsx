import ReactMarkdown from 'react-markdown';

/** ReactMarkdown with a setting to make it open hyperlinks in a new tab  */
function ReactMarkdownOpenInNewTab({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      components={{
        a: (props) => (
          <a {...props} target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        ),
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}

export { ReactMarkdownOpenInNewTab };
