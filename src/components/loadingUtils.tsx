// Functions that create Loading and Error display components

function loadingErrorDisplay(loadingDataDescription: string) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <span className="text-4xl mb-2">😕</span>
      <p className="text-lg font-semibold text-red-600 mb-1">
        {`Oops! Something went wrong loading ${loadingDataDescription}.`}
      </p>
      <p className="text-gray-600">
        Please try refreshing the page or check your internet connection.
      </p>
    </div>
  );
}

function loadingSpinnerDisplay(loadingDataDescription: string) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <span className="text-4xl mb-2 animate-spin">⏳</span>
      <p className="text-lg font-semibold text-gray-700 mb-1">
        {`Loading ${loadingDataDescription}...`}
      </p>
      <p className="text-gray-500">Please wait.</p>
    </div>
  );
}

export { loadingErrorDisplay, loadingSpinnerDisplay };
