import Grid from "@/components/Grid";
import { quotesFetch } from "@/server";
import Image from "next/image";

export default async function Home() {
  const { data } = await quotesFetch(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-[20%] ">
      <Grid data={data} />
    </div>
  );
}
