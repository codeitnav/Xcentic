"use client";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const handleVideoEnd = () => {
    onFinish();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/intro_vid.mp4"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
