import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="grid gap-0.5">
            <Skeleton className="h-5 w-24 rounded" />
            <Skeleton className="h-4 w-40 rounded" />
          </div>
        </div>
        <Skeleton className="w-12 h-12 rounded-full" />
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid gap-6 max-w-3xl mx-auto">
          {Array(4).fill(
            <Card className="bg-background hover:opacity-80 transition-all">
              <CardContent className="grid gap-4">
                <div className="flex mt-6 items-center justify-between">
                  <div className="grid gap-1">
                    <Skeleton className="h-5 w-24 rounded" />
                    <Skeleton className="h-4 w-40 rounded" />
                  </div>
                  <Skeleton className="w-12 h-12 rounded-full" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
