
const CardS_3 = () => {
  return (
    <div>
      {/* Card */}
<a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="/">
  <div className="relative flex items-center overflow-hidden">
    <img className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image" />

    <div className="grow p-4 ms-32 sm:ms-48">
      <div className="min-h-24 flex flex-col justify-center">
        <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
          Studio by Mailchimp
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          Produce professional, reliable streams easily leveraging Mailchimp's innovative broadcast studio.
        </p>
      </div>
    </div>
  </div>
</a>
{/* End Card */}
    </div>
  );
};

export default CardS_3;
