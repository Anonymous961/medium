import Appbar from "./Appbar";

export const FullBlogSkeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-10">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              <div className="h-4 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/2  mb-2.5"></div>
            </div>
            <div className="text-slate-500 pt-2">
              <div className="ml-2 h-2 bg-gray-200 rounded-full  mb-2.5 w-24"></div>
            </div>
            <div className="pt-4">
              <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-xl">
              <div className="ml-2 h-2 bg-gray-200 rounded-full  mb-2.5 w-24"></div>
            </div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <div className=" h-6 w-6 bg-gray-200 rounded-full mb-4"></div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <div className="ml-2 h-2 bg-gray-200 rounded-full  mb-2.5 w-24"></div>
                </div>
                <div className="pt-2 text-slate-500">
                  <div className="h-2 bg-gray-200 rounded-full  min-w-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
