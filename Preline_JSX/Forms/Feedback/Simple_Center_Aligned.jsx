
const Simple_Center_Aligned = () => {
  return (
    <div>
      {/* Hire Us */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Ready to hire us?
      </h1>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Tell us your story and we’ll be in touch.
      </p>
    </div>

    <div className="mt-12">
      {/* Form */}
      <form>
        <div className="grid gap-4 lg:gap-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="hs-firstname-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
              <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            </div>

            <div>
              <label htmlFor="hs-lastname-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
              <input type="text" name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            </div>
          </div>
          {/* End Grid */}

          <div>
            <label htmlFor="hs-work-email-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Work Email</label>
            <input type="email" name="hs-work-email-hire-us-2" id="hs-work-email-hire-us-2" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="hs-company-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company</label>
              <input type="text" name="hs-company-hire-us-2" id="hs-company-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            </div>

            <div>
              <label htmlFor="hs-company-website-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company Website</label>
              <input type="text" name="hs-company-website-hire-us-2" id="hs-company-website-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            </div>
          </div>
          {/* End Grid */}

          <div>
            <label htmlFor="hs-about-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Details</label>
            <textarea id="hs-about-hire-us-2" name="hs-about-hire-us-2" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></textarea>
          </div>
        </div>
        {/* End Grid */}

        {/* Checkbox */}
        <div className="mt-3 flex">
          <div className="flex">
            <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
          </div>
          <div className="ms-3">
            <label htmlFor="remember-me" className="text-sm text-gray-600 dark:text-neutral-400">By submitting this form I have read and acknowledged the <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="/">Privact policy</a></label>
          </div>
        </div>
        {/* End Checkbox */}

        <div className="mt-6 grid">
          <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
</div>
{/* End Hire Us */}
    </div>
  );
};

export default Simple_Center_Aligned;
