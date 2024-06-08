export const BlogsSkeleton = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <div className=" h-4 w-4 bg-gray-200 rounded-full mb-4"></div>

          <div className="ml-2 h-2 bg-gray-200 rounded-full  mb-2.5 w-24"></div>

          <div className="ml-2 h-2 bg-gray-200 rounded-full  mb-2.5 w-20"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
