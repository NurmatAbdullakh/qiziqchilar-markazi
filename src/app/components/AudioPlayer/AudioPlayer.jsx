import { Progress } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-bottom: 24px;
  border-radius: 16px;
  border: 1px solid var(--Greys-Grey-3, #E1E1E2);
  background: var(--greys-grey-bg, #F1F1F2);
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 16px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const PlayIcon = styled.img`
  cursor: pointer;
`;

const VolumeIcon = styled.img`
  cursor: pointer;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 8px;
`;

const ProgressLine = styled.div`
  flex-grow: 1;
  height: 4px;
  background-color: white;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => (props.currentTime / props.duration) * 100}%;
    background-color: #F59C2F;
  }
`;

const Time = styled.div`
  font-size: 14px;
  color: #6B6B70;
`;

const AudioPlayer = ({ imageUrl, title, src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleDurationChange);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleDurationChange);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      const currentTime = (clickPosition / progressBarWidth) * duration;

      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <PlayerWrapper>
      <ImageWrapper>
        <img className="bg" src={imageUrl} alt="audioplayer" />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Controls>
          <PlayIcon
            src={isPlaying ? "/icons/pause-icon.svg" : "/icons/play-icon.svg"}
            onClick={togglePlay}
          />
          <ProgressBar onClick={handleProgressClick}>
            <Time>{formatTime(currentTime)}</Time>
            <ProgressLine currentTime={currentTime} duration={duration} />
            <Time>{formatTime(duration)}</Time>
          </ProgressBar>
          <VolumeIcon
            src={isMuted ? "/icons/statistics/unvolume.svg" : "/icons/statistics/volume.svg"}
            onClick={toggleMute}
          />
        </Controls>
        <audio ref={audioRef} src={src}></audio>
      </InfoWrapper>
    </PlayerWrapper>
  );
};

export default AudioPlayer;
