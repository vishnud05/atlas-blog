import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh] dark:bg-gray-900 dark:text-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-display dark:text-gray-200 font-['Cursive', 'serif']">
                  Unleash Your Creativity with ATLAS
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl font-body dark:text-gray-400">
                  ATLAS is a powerful blogging platform that empowers you to
                  create, publish, and share your content with the world.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white text-[#ff6b6b] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#ffa500] dark:text-gray-900 dark:hover:bg-[#ff6b6b] dark:hover:text-white"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-[#ff6b6b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-[#ffa500] dark:hover:bg-[#ffa500] dark:hover:text-gray-900"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-400">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-display dark:text-gray-200 font-['Cursive', 'serif']">
                  Powerful Blogging Tools
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body dark:text-gray-400">
                  ATLAS provides a comprehensive set of tools to help you
                  create, manage, and grow your blog.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <DeleteIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Intuitive Editor
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  ATLAS&apos;s intuitive editor makes it easy to create and
                  format your blog posts.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <SettingsIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Customizable Themes
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  Choose from a variety of beautiful, responsive themes to make
                  your blog stand out.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <PieChartIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Advanced Analytics
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  Track your blog&apos;s performance with detailed analytics and
                  insights.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ShareIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Easy Publishing
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  Publish your content with a single click and share it across
                  social media.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CurrencyIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Monetization Options
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  Earn revenue from your blog through various monetization
                  strategies.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CombineIcon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                    Collaborative Tools
                  </h3>
                </div>
                <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                  Invite your team to collaborate on your blog and manage
                  content together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-display dark:text-gray-200 font-['Cursive', 'serif']">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body dark:text-gray-400">
                Hear from our satisfied customers about their experience with
                ATLAS.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-white/20 backdrop-blur-sm dark:bg-gray-800 dark:text-white">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                        John Doe
                      </h4>
                      <p className="text-xs text-gray-200 font-body dark:text-gray-400">
                        Blogger, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                    &quot;ATLAS has been a game-changer for my blog. The
                    intuitive editor and customizable themes make it easy to
                    create professional-looking content.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/20 backdrop-blur-sm dark:bg-gray-800 dark:text-white">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                        Jane Smith
                      </h4>
                      <p className="text-xs text-gray-200 font-body dark:text-gray-400">
                        Lifestyle Blogger
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                    &quot;I love the advanced analytics and monetization options
                    ATLAS provides. It&apos;s helped me grow my blog and earn
                    revenue from my content.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/20 backdrop-blur-sm dark:bg-gray-800 dark:text-white">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-white font-display dark:text-gray-200 font-['Cursive', 'serif']">
                        Tom Miller
                      </h4>
                      <p className="text-xs text-gray-200 font-body dark:text-gray-400">
                        Tech Blogger
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 font-body dark:text-gray-400">
                    &quot;The collaborative tools in ATLAS have been invaluable
                    for my team. We can easily manage our content and publish
                    seamlessly.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-display dark:text-gray-200 font-['Cursive', 'serif']">
                Start Blogging with ATLAS
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body dark:text-gray-400">
                Sign up today and unlock the power of ATLAS to grow your online
                presence.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-white/20 text-white placeholder:text-gray-200 focus:bg-white/30 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  className="bg-white text-[#ff6b6b] hover:bg-gray-100 dark:bg-[#ffa500] dark:text-gray-900 dark:hover:bg-[#ff6b6b] dark:hover:text-white"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CombineIcon(props: any) {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function CurrencyIcon(props: any) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function DeleteIcon(props: any) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
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

function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
