import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="default" size="default">
        <Loader2 className="animate-spin" />
        Clique-me
      </Button>
    </div>
  );
}
