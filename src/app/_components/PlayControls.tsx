"use client";
import { useEffect, useState } from "react";
import { api } from "~/trpc/react";

const Button = ({ children, active, ...attrs }) => {
  return (
    <button
      className={`mr-4 rounded-md border bg-black p-4 px-5 text-sm font-semibold leading-5 text-white transition-colors duration-1000 hover:bg-white hover:text-black ${active ? "bg-blue-400" : ""}`}
      {...attrs}
    >
      {children}
    </button>
  );
};

export function PlayControls() {
  const [playerState, setPlayerState] = useState(null);

  useEffect(() => {
    getStatus.mutate();
  }, []);

  const playMusic = api.music.play.useMutation({
    onSuccess: async (res) => {
      console.log("play music!", res);

      getStatus.mutate();
    },
  });

  const pauseMusic = api.music.pause.useMutation({
    onSuccess: async () => {
      console.log("paused music!");
      getStatus.mutate();
    },
  });

  const getStatus = api.music.getStatus.useMutation({
    onSuccess: async (res) => {
      console.log("getting status", res);

      setPlayerState(res.playerState);
    },
  });

  console.log({ playerState });

  return (
    <div className="w-full">
      <Button
        onClick={() => playMusic.mutate()}
        active={playerState?.state === "stream"}
      >
        Play Music
      </Button>
      <Button
        onClick={() => pauseMusic.mutate()}
        active={playerState?.state !== "stream"}
      >
        Pause Music
      </Button>
      <Button onClick={() => getStatus.mutate()}>Get Player Status</Button>

      {playerState &&
        Object.entries(playerState)?.map(([key, value]) => {
          return (
            <div key={key}>
              {key} - {value}
            </div>
          );
        })}
    </div>
  );
}
