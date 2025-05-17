"use client";

import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useRef, useState } from "react";

export const VoiceVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [listening, setListening] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      sourceRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      sourceRef.current.connect(analyserRef.current);

      analyserRef.current.fftSize = 256;
      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      draw(); // start visualizing
      setListening(true);
    } catch (error) {
      console.error("Mic access denied:", error);
    }
  };

  const stopListening = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    setListening(false);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    if (!canvas || !analyser || !dataArray) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const drawLoop = () => {
      animationIdRef.current = requestAnimationFrame(drawLoop);

      analyser.getByteTimeDomainData(dataArray);

      if (!ctx) return;
      ctx.fillStyle = "#0e0e10";
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#a78bfa"; // violet

      ctx.beginPath();

      const sliceWidth = (width * 1.0) / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    };

    drawLoop();
  };

  return (
    <div className=" p-4 rounded-xl flex items-center gap-4 w-full max-w-md">
      <Button
        size={"icon"}
        onClick={listening ? stopListening : startListening}
        className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
      >
        <Mic className="text-white" />
      </Button>
      <canvas
        ref={canvasRef}
        width={300}
        height={40}
        className="rounded-md bg-gray-100"
      />
    </div>
  );
};
