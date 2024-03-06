import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto md:py:10 h-scream">
      <div className="h-full border rounded-md">
        <div className="h-20">
          <div className="p-5 border-b flex item-center justify-between">

            <div>
              <h1 className="text-xl font-bold">Zingle</h1>
              <div className="flex item-center gap-1">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse">

                </div>
                <h1 className="text-sm text-gray-400">2 online</h1>
              </div>
            </div>
            <Button>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
