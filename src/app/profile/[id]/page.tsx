import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/appQuery/queries";
import { useQuery } from "@/lib/handleAsync";
import { User } from "@/types";
import { redirect } from "next/navigation";
import { getInitials } from "@/utils/helperFunctions";

export default async function Component({
  params,
}: {
  params: { id: string };
}) {
  console.log("Params", params);

  const queryOpt = {
    id: params.id,
  };
  const response = await useQuery<User>(getUser, queryOpt);
  if (response.status === "error" || !response.data) {
    redirect("/error");
  }
  const user = response.data;

  return (
    <div className="w-full h-screen mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-[#fffaeb]">
      <div className="h-full conatiner grid grid-cols-1 gap-8 md:grid-cols-2 ">
        <div className=" rounded-lg shadow-md p-6 container">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-[#ffa500] dark:text-[#ffe4b5]">
                {`@${user.username}`}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[#ffa500] dark:text-[#ffe4b5]">{user.bio}</p>
        </div>
        <div className="space-y-6">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 text-left font-medium shadow-md transition-colors hover:bg-[#ffefd5] focus:outline-none focus-visible:ring focus-visible:ring-[#ffa500] dark:bg-[#ff8c00] dark:hover:bg-[#ffa500]">
              <span>Personal Information</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-[#fffaeb] p-6 shadow-md dark:bg-[#ff8c00]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input defaultValue={user.name} id="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input defaultValue={user.email} id="email" type="email" />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 text-left font-medium shadow-md transition-colors hover:bg-[#ffefd5] focus:outline-none focus-visible:ring focus-visible:ring-[#ffa500] dark:bg-[#ff8c00] dark:hover:bg-[#ffa500]">
              <span>Password</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-[#fffaeb] p-6 shadow-md dark:bg-[#ff8c00]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-[#fffaeb] px-6 py-4 text-left font-medium shadow-md transition-colors hover:bg-[#ffefd5] focus:outline-none focus-visible:ring focus-visible:ring-[#ffa500] dark:bg-[#ff8c00] dark:hover:bg-[#ffa500]">
              <span>Notifications</span>
              <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg bg-[#fffaeb] p-6 shadow-md dark:bg-[#ff8c00]">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Checkbox defaultChecked id="email-notifications" />
                  <div>
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-[#ffa500] dark:text-[#ffe4b5]">
                      Receive email notifications for important updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="push-notifications" />
                  <div>
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                    <p className="text-[#ffa500] dark:text-[#ffe4b5]">
                      Receive push notifications for real-time updates.
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <div className="flex justify-end">
            <Button className="bg-[#ffa500] text-[#fffaeb] hover:bg-[#ff8c00] dark:bg-[#ffe4b5] dark:text-[#ff8c00] dark:hover:bg-[#ffa500]">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
