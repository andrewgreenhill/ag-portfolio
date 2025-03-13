/**
 * NotFound component displays a friendly in-theme 404 error message.
 *
 * @param {string} props.pageType - The type of page that was not found
 * @returns {JSX.Element} - Rendered component
 */
function NotFound({ pageType = 'page' }: { pageType?: string }): JSX.Element {
  return (
    <div className="text-center p-8 pb-4">
      <h1 className="text-3xl font-bold mb-4">404, Not Found</h1>
      <span className="text-xl text-green-600">A glitch in the Matrix? Or just a typo?</span>
      <span className="text-xl"> This {pageType} does not exist.</span>
    </div>
  );
}

export default NotFound;
