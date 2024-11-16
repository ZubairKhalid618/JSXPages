
const BannerC_8 = () => {
  return (
    <div>
      <div className="fixed bottom-0 end-0 z-[60] sm:max-w-sm w-full mx-auto p-6">
  {/* Card */}
  <div className="p-4 bg-gradient-to-br from-violet-700 to-sky-500 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
    <p className="mt-2 text-sm text-white">
      This website uses cookies to enhance your browsing experience.
    </p>
    <a className="mt-3 inline-flex justify-center items-center gap-x-1 font-semibold text-white/80 text-sm hover:text-white focus:outline-none focus:text-white" href="/">
      Learn more
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </a>
    <div className="mt-5 flex justify-between gap-x-2">
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border-2 border-white text-white focus:outline-none focus:border-white/70 focus:text-white/70 focus:border-white/70focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none">
        Accept all
      </button>
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent text-white hover:text-white/70 focus:outline-none focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none">
        Reject all
      </button>
    </div>
  </div>
  {/* End Card */}
</div>
    </div>
  );
};

export default BannerC_8;
