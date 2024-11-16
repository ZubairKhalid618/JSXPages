
const Footer_8 = () => {
  return (
    <div>
      {/* ========== HEADER ========== */}
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 dark:bg-neutral-800 dark:border-neutral-700">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
      <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href="/" aria-label="Brand">Brand</a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-sticky-footer-collapse" aria-expanded="false" aria-controls="hs-navbar-sticky-footer" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-sticky-footer">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="hs-navbar-sticky-footer" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-sticky-footer-collapse">
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <a className="font-medium text-blue-500 focus:outline-none" href="/" aria-current="page">Landing</a>
        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/">Account</a>
        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/">Work</a>
        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/">Blog</a>
      </div>
    </div>
  </nav>
</header>
{/* ========== END HEADER ========== */}

{/* ========== MAIN CONTENT ========== */}
<main id="content" className="shrink-0">
  <div className="max-w-[85rem] min-h-[40rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
    {/* your content goes here ... */}
  </div>
</main>
{/* ========== END MAIN CONTENT ========== */}

{/* ========== FOOTER ========== */}
<footer className="mt-auto py-3 bg-gray-800 dark:bg-neutral-800">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-white">Place sticky footer content here.</p>
  </div>
</footer>
{/* ========== END FOOTER ========== */}
    </div>
  );
};

export default Footer_8;
