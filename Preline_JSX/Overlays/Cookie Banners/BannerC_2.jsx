
const BannerC_2 = () => {
  return (
    <div>
      <div className="fixed bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
  {/* Card */}
  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
    <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 sm:gap-y-0 sm:gap-x-5">
      <div className="grow">
        <h2 className="text-gray-500 dark:text-neutral-500">
          <span className="font-semibold text-gray-800 dark:text-neutral-200">We use cookies</span> to analyze our traffic and create a smooth user experience.
        </h2>
      </div>
      <div className="inline-flex gap-x-2">
        <div>
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            Reject
          </button>
        </div>
        <div>
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Card */}
</div>
    </div>
  );
};

export default BannerC_2;
