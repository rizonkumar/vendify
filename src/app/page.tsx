import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap">
      <div>
        <Button variant={"elevated"}>I am an Button</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am a textarea" />
      </div>
    </div>
  );
}
