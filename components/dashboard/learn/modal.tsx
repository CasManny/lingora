import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PropsWithChildren } from "react";
import { VoiceVisualizer } from "./voice-visualizer";
import { Button } from "@/components/ui/button";

export function SpeakModal({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg p-10">
        <div className="space-y-4">
          <p className="text-sm font-bold">Record sentence</p>
          <VoiceVisualizer />
          <Button className="bg-[#DD5E98] cursor-pointer hover:bg-[#DD5E98] text-white">
            Save Audio
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
