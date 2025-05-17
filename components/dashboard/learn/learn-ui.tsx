"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTour } from "@reactour/tour";
import { Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SpeakModal } from "./modal";
import { VoiceWave } from "./voice-wave";

const languages = ["English", "Spanish", "French", "German", "Mandarin"];

export function LanguageApp() {
  const [mode, setMode] = useState<"learn" | "teach" | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [sentence, setSentence] = useState<string>("");
  const [recorded, setRecorded] = useState<boolean>(false);

  const { setIsOpen } = useTour();

  useEffect(() => {
    setIsOpen(true); // Start the tour on load
  }, [setIsOpen]);

  return (
    <div className="h-[calc(100vh-60px)] p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto space-y-6 mt-20">
        <h1 className="text-3xl font-bold text-center">
          Language Audio Learning
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Select onValueChange={setSelectedLanguage}>
            <SelectTrigger id="language-select" className="w-full md:w-64">
              {selectedLanguage || "Select a Language"}
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              id="learn-button"
              onClick={() => setMode("learn")}
              variant={mode === "learn" ? "default" : "outline"}
            >
              Learn
            </Button>
            <Button
              onClick={() => setMode("teach")}
              variant={mode === "teach" ? "default" : "outline"}
            >
              Teach
            </Button>
          </div>
        </div>

        {mode === "teach" && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <Input
                placeholder="Type a sentence in your language"
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
              />
              <SpeakModal>
                <Button
                  className="bg-[#DD5E98]/90 hover:bg-[#DD5E98]"
                  onClick={() => setRecorded(true)}
                >
                  {recorded ? "Recorded!" : "Record Audio"}
                </Button>
              </SpeakModal>
            </CardContent>
          </Card>
        )}

        {mode === "learn" && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Sentence {i}</p>
                    {playingIndex === i ? (
                      <VoiceWave />
                    ) : (
                      <p className="text-sm text-gray-600 italic">
                        This is a sample sentence in {selectedLanguage}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setPlayingIndex((prev) => (prev === i ? null : i))
                    }
                  >
                    <Volume2 className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
