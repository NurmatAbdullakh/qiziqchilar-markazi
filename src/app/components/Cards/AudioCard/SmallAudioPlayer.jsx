// AudioPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 91%;
  gap: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 12px;
`;

const PlayButton = styled.div`
  cursor: pointer;
`;

const ProgressBar = styled.div`
  cursor: pointer;
  flex-grow: 1;
  height: 4px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.24);
`;

const Time = styled.div`
  color: white; /* Custom text color */
`;

const AudioPlayer = ({ audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e) => {
        const progressBar = e.target;
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = (x / width) * 100;
        const durationToSeek = (percentage / 100) * duration;
        audioRef.current.currentTime = durationToSeek;
        setCurrentTime(durationToSeek);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <PlayerWrapper>
            <PlayButton onClick={togglePlay}>
                <img
                    src={isPlaying ? "/icons/pause-icon.svg" : "/icons/play-icon.svg"}
                    alt={isPlaying ? "Pause" : "Play"}
                />
            </PlayButton>
            <ProgressBar onClick={handleProgressClick}>
                <div
                    style={{
                        width: `${(currentTime / duration) * 100}%`,
                        background: '#F59C2F', // Custom progress bar color
                        height: '100%',
                        borderRadius: '9px',
                    }}
                />
            </ProgressBar>
            <Time>{formatTime(currentTime)}</Time>
            <audio ref={audioRef} src={audioSrc}></audio>
        </PlayerWrapper>
    );
};

export default AudioPlayer;
