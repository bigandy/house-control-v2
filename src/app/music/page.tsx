import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { PlayControls } from "../_components/PlayControls";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/music">Music</Link>
    </nav>
  );
};

export default async function Home() {
  return (
    <HydrateClient>
      <Nav />

      <PlayControls />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Music Page
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <p>This is the music page</p>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
