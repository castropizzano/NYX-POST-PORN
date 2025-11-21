import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  src: string;
  title: string;
  artist: string;
}

export function AudioPlayer({ src, title, artist }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = x / bounds.width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full border border-[#9b7653]/20 bg-black/40 backdrop-blur-sm p-6"
    >
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Track Info */}
      <div className="mb-4">
        <h4 className="nyx-h2 mb-1">{title}</h4>
        <p className="nyx-xs">{artist}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#9b7653]/40 hover:border-[#9b7653] hover:bg-[#9b7653]/10 transition-all duration-300 group"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span className="nyx-meta text-[#9b7653] group-hover:text-[#e8d5c4] transition-colors">
            {isPlaying ? '⏸' : '▶'}
          </span>
        </button>

        {/* Progress Bar */}
        <div className="flex-1 flex items-center gap-3">
          <span className="nyx-meta tabular-nums min-w-[40px]">
            {formatTime(currentTime)}
          </span>
          
          <div
            className="flex-1 h-1 bg-[#9b7653]/20 cursor-pointer group relative"
            onClick={handleProgressClick}
          >
            <div
              className="absolute inset-y-0 left-0 bg-[#9b7653] transition-all"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#e8d5c4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          
          <span className="nyx-meta tabular-nums min-w-[40px]">
            {formatTime(duration)}
          </span>
        </div>

        {/* Volume Control */}
        <button
          onClick={toggleMute}
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center hover:bg-[#9b7653]/10 transition-colors nyx-meta"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </button>
      </div>
    </motion.div>
  );
}
