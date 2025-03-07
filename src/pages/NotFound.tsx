const NotFound = ({ pageType }: { pageType?: string }) => {
  return (
    <div className="text-center p-8 pb-4">
      <h1 className="text-3xl font-bold mb-4">404, Not Found</h1>
      <span className="text-xl text-green-600">A glitch in the Matrix? Or just a typo?</span>
      <span className="text-xl"> This {pageType ? pageType : 'page'} does not exist.</span>
    </div>
  );
};

export default NotFound;
