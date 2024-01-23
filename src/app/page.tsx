import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-200 min-h-screen p-10">
      <h1 className=" font-bold text-3xl">hello</h1>
      <Button size="lg" variant="outline">
        click me
      </Button>
    </div>
  );
}
