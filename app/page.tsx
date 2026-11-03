import HomeCatalog from "@/components/HomeCatalog";
import { jerseys } from "@/lib/data";

export default function Home() {
  return <HomeCatalog jerseys={jerseys} />;
}
