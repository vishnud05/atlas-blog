import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-8 p-6 md:p-8 lg:p-10 max-md:flex">
      <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800 max-md:hidden">
        <div className="text-2xl  font-semibold">Dashboard</div>
        <nav className="grid gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-700"
            prefetch={false}
          >
            <LayoutGridIcon className="h-4 w-4" />
            All Blogs
          </Link>
          <Link
            href="/dashboard/create"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-700"
            prefetch={false}
          >
            <PlusIcon className="h-4 w-4" />
            Create Blog
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}

function LayoutGridIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
