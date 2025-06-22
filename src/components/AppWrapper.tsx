"use client";

import { useState } from "react";
import VideoIntro from "./VideoIntro";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return <>{showIntro ? <VideoIntro onFinish={handleIntroFinish} /> : children}</>;
}
