
const Banner_6 = () => {
  return (
    <div>
      {/* Announcement Banner */}
<div className="bg-gradient-to-r from-purple-600 to-blue-400">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    {/* Grid */}
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
        <p className="me-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 focus:outline-none focus:border-white/70 focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none" href="/">
          Sign up
        </a>
      </div>
      {/* End Col */}

      <div className="flex items-center">
        <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm" href="/">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Watch demo
        </a>
        <span className="inline-block border-e border-white/30 w-px h-5 mx-2"></span>
        <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 transition text-sm" href="/">
          Explore what's new
        </a>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
</div>
{/* End Announcement Banner */}
    </div>
  );
};

export default Banner_6;
