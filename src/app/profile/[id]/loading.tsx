export default function Component() {
  return (
    <div className="w-full bg-[#fffaeb] h-screen mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-[#fffaeb] rounded-lg shadow-md p-6 dark:bg-[#ff8c00] animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2">
              <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
          <div className="mt-4 h-12 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="space-y-6 animate-pulse">
          <div className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 shadow-md dark:bg-[#ff8c00]">
            <div className="h-5 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 shadow-md dark:bg-[#ff8c00]">
            <div className="h-5 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 shadow-md dark:bg-[#ff8c00]">
            <div className="h-5 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="h-10 w-32 rounded-md bg-[#ffa500] dark:bg-[#ffe4b5]" />
        </div>
      </div>
    </div>
  );
}
