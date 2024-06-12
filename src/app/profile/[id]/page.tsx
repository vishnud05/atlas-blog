import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { User } from "@/types";
import { redirect } from "next/navigation";
import CustomAvatar from "@/components/CustomAvatar";

import { Card, CardContent } from "@/components/ui/card";

const profilePanels = [
  {
    title: "Edit Profile",
    description: "Update your personal information.",
    icon: <FilePenIcon />,
  },
  {
    title: "Change Password",
    description: "Update your account password.",
    icon: <LockIcon />,
  },
  {
    title: "Notification Settings",
    description: "Manage your notification preferences.",
    icon: <BellIcon />,
  },
  {
    title: "Delete Account",
    description: "Permanently delete your account.",
    icon: <Trash2Icon />,
  },
];

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const queryOpt = {
    id: params.id,
  };
  const response = await useQuery<User>(getUser, queryOpt);
  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const user = response.data;
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className=" px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <CustomAvatar alt="user-image" name={user.name} />
          <div className="grid gap-0.5">
            <div className="text-lg capitalize font-medium text-gray-900 dark:text-gray-50">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <SettingsIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <span className="sr-only">Open settings</span>
        </Button>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid gap-6 max-w-3xl mx-auto">
          {profilePanels.map((panel, idx) => (
            <Card
              className="bg-background hover:opacity-80 transition-all"
              key={idx}
            >
              <CardContent className="grid  gap-4">
                <div className="flex mt-6 items-center justify-between">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium ">{panel.title}</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {panel.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    {panel.icon}
                    <span className="sr-only">{panel.title}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function LockIcon(props: any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Trash2Icon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}
