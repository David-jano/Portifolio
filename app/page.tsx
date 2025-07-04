// app/page.tsx

import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home"), { ssr: false });

export default function Page() {
  return <Home />;
}
