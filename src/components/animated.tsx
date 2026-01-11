"use client";
import { useEffect, useState } from "react";

export default function TypingText({text,time}:any) {
//   const text = "We are growing, Grow with Us.";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    text.split("").forEach((char:any, i:any) => {
      setTimeout(() => setDisplay((d) => d + char), i * time);
    });
  }, []);

  return <>{display}</>;
}
