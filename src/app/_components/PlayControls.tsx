"use client";

import { api } from "~/trpc/react";

export function PlayControls() {
  const playMusic = api.music.play.useMutation({
    onSuccess: async () => {
      console.log("play music!");
      //   await utils.post.invalidate();
      //   setName("");
    },
  });

  const pauseMusic = api.music.pause.useMutation({
    onSuccess: async () => {
      console.log("paused music!");
      //   await utils.post.invalidate();
      //   setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      <button onClick={() => playMusic.mutate()}>Play Music</button>
      <button onClick={() => pauseMusic.mutate()}>Pause Music</button>
    </div>
  );
}
