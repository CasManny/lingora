'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Volume2 } from "lucide-react";

const languages = ["English", "Spanish", "French", "German", "Mandarin"];

export default function LanguageApp() {
  const [mode, setMode] = useState<"learn" | "teach" | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [sentence, setSentence] = useState<string>("");
  const [recorded, setRecorded] = useState<boolean>(false);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Language Audio Learning
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Select onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full md:w-64">
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
              <Button onClick={() => setRecorded(true)}>
                {recorded ? "Recorded!" : "Record Audio"}
              </Button>
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
                    <p className="text-sm text-gray-600 italic">
                      This is a sample sentence in {selectedLanguage}
                    </p>
                  </div>
                  <Button variant="ghost">
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
