"use client";

import { Mic, Send, MoreVertical } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Message {
  id: string;
  sender: "user" | "coach";
  text?: string;
  audioUrl?: string;
  timestamp: string;
}

interface Coach {
  id: number;
  name: string;
  avatar: string;
  messages: Message[];
}

const initialCoaches: Coach[] = [
  {
    id: 1,
    name: "Carlos (Spanish)",
    avatar: "/man-1.svg",
    messages: [
      {
        id: "1",
        sender: "coach",
        text: "¡Hola! ¿Listo para practicar español?",
        timestamp: "04:45 PM",
      },
    ],
  },
  {
    id: 2,
    name: "Marie (French)",
    avatar: "/globe.svg",
    messages: [
      {
        id: "1",
        sender: "coach",
        text: "Salut ! Prêt à parler français ?",
        timestamp: "04:46 PM",
      },
    ],
  },
];

export const LanguageChatUI = () => {
  const [coaches, setCoaches] = useState<Coach[]>(initialCoaches);
  const [selectedCoachId, setSelectedCoachId] = useState<number>(coaches[0].id);
  const [input, setInput] = useState("");

  const selectedCoach = coaches.find((c) => c.id === selectedCoachId)!;

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `${Date.now()}-${Math.random()}`,
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setCoaches((prevCoaches) =>
      prevCoaches.map((coach) =>
        coach.id === selectedCoachId
          ? {
              ...coach,
              messages: [...coach.messages, userMessage],
            }
          : coach
      )
    );

    setInput("");

    setTimeout(() => {
      const reply: Message = {
        id: `${Date.now()}-${Math.random()}`,
        sender: "coach",
        text: "¡Muy bien! Continuemos...",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setCoaches((prevCoaches) =>
        prevCoaches.map((coach) =>
          coach.id === selectedCoachId
            ? {
                ...coach,
                messages: [...coach.messages, reply],
              }
            : coach
        )
      );
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r p-4 space-y-4 overflow-y-auto md:h-full max-h-48 md:max-h-full">
        <h2 className="text-lg font-semibold mb-2">Language Coaches</h2>
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition ${
              coach.id === selectedCoachId ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedCoachId(coach.id)}
          >
            <Image
              src={coach.avatar}
              alt={coach.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{coach.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white shadow-sm border-b">
          <div className="flex items-center gap-3">
            <Image
              src={selectedCoach.avatar}
              alt={selectedCoach.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold text-sm md:text-base">
                {selectedCoach.name}
              </h2>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <MoreVertical className="text-gray-600" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {selectedCoach.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "coach" && (
                <Image
                  src={selectedCoach.avatar}
                  alt={selectedCoach.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <div
                className={`max-w-[80%] sm:max-w-xs p-3 rounded-lg shadow-sm transition-all duration-300 ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.audioUrl && (
                  <audio controls src={msg.audioUrl} className="mt-2 w-full" />
                )}
                <p className="text-[10px] text-right text-gray-400 mt-1">
                  {msg.timestamp}
                </p>
              </div>
              {msg.sender === "user" && (
                <Image
                  src="/avatar-user.png"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t bg-white p-3 flex items-center gap-2">
          <Mic className="text-gray-500 cursor-pointer" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${selectedCoach.name}...`}
            className="flex-1 p-2 border rounded-full focus:outline-none focus:ring text-sm"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
