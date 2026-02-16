import React, { useEffect, useState } from 'react';
import './orbit.css';

interface Icon {
  id: string;
  component: React.ReactNode;
  size?: number;
  orbit?: 1 | 2; // Which orbit the icon belongs to
}

interface OrbitIconsProps {
  icons: Icon[];
  radius1: number; // Inner orbit radius
  radius2: number; // Outer orbit radius
  centerIcon?: React.ReactNode;
  orbitDuration1?: number; // Inner orbit duration in seconds
  orbitDuration2?: number; // Outer orbit duration in seconds
  centerSize?: number;
  autoRotate?: boolean;
  rotateIcons?: boolean; // Whether icons should counter-rotate to stay upright
  orbitColor1?: string;
  orbitColor2?: string;
  orbitWidth?: number;
  pauseOnHover?: boolean; // Whether to pause rotation when hovering over icons
}

export default function OrbitIcons({
  icons,
  radius1,
  radius2,
  centerIcon,
  orbitDuration1 = 20,
  orbitDuration2 = 30,
  centerSize = 60,
  autoRotate = true,
  rotateIcons = true,
  orbitColor1 = '#e0e0e0',
  orbitColor2 = '#c0c0c0',
  orbitWidth = 2,
  pauseOnHover = true,
}: OrbitIconsProps) {
  const [rotation1, setRotation1] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!autoRotate || !isMounted || isPaused) return;

    const updateInterval = 50; // milliseconds per update
    
    // Calculate rotation increment based on duration
    // 360 degrees / (duration in seconds * 1000ms / update interval)
    const rotationSpeed1 = 360 / ((orbitDuration1 * 1000) / updateInterval);
    const rotationSpeed2 = 360 / ((orbitDuration2 * 1000) / updateInterval);

    const interval1 = setInterval(() => {
      setRotation1((prev) => (prev + rotationSpeed1) % 360);
    }, updateInterval);

    const interval2 = setInterval(() => {
      setRotation2((prev) => (prev + rotationSpeed2) % 360);
    }, updateInterval);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [autoRotate, isMounted, isPaused, orbitDuration1, orbitDuration2]);

  const getIconPosition = (index: number, totalIcons: number, radius: number, rotation: number) => {
    const angle = (360 / totalIcons) * index + rotation;
    const radian = (angle * Math.PI) / 180;
    
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
      rotate: angle,
    };
  };

  const handleIconMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleIconMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Separate icons by orbit
  const orbit1Icons = icons.filter(icon => !icon.orbit || icon.orbit === 1);
  const orbit2Icons = icons.filter(icon => icon.orbit === 2);

  const maxRadius = Math.max(radius1, radius2);
  const containerSize = maxRadius * 2 + 100;

  // Don't render rotating content until mounted on client
  if (!isMounted) {
    return (
      <div
        className="orbit-container"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        {/* Inner Orbit Circle Path */}
        <div
          className="orbit-path orbit-path-1"
          style={{
            width: `${radius1 * 2}px`,
            height: `${radius1 * 2}px`,
            border: `${orbitWidth}px solid ${orbitColor1}`,
          }}
        />

        {/* Outer Orbit Circle Path */}
        <div
          className="orbit-path orbit-path-2"
          style={{
            width: `${radius2 * 2}px`,
            height: `${radius2 * 2}px`,
            border: `${orbitWidth}px solid ${orbitColor2}`,
          }}
        />

        {/* Center Icon */}
        {centerIcon && (
          <div
            className="center-icon"
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
            }}
          >
            {centerIcon}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="orbit-container"
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      {/* Inner Orbit Circle Path */}
      <div
        className="orbit-path orbit-path-1"
        style={{
          width: `${radius1 * 2}px`,
          height: `${radius1 * 2}px`,
          border: `${orbitWidth}px solid ${orbitColor1}`,
        }}
      />

      {/* Outer Orbit Circle Path */}
      <div
        className="orbit-path orbit-path-2"
        style={{
          width: `${radius2 * 2}px`,
          height: `${radius2 * 2}px`,
          border: `${orbitWidth}px solid ${orbitColor2}`,
        }}
      />

      {/* Center Icon */}
      {centerIcon && (
        <div
          className="center-icon"
          style={{
            width: `${centerSize}px`,
            height: `${centerSize}px`,
          }}
        >
          {centerIcon}
        </div>
      )}

      {/* Inner Orbit Icons */}
      {orbit1Icons.map((icon, index) => {
        const position = getIconPosition(index, orbit1Icons.length, radius1, rotation1);
        const iconSize = icon.size || 40;

        return (
          <div
            key={icon.id}
            className="orbit-icon orbit-1"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
          >
            <div
              className="icon-content"
              style={{
                transform: rotateIcons ? `rotate(-${position.rotate}deg)` : 'none',
              }}
            >
              {icon.component}
            </div>
          </div>
        );
      })}

      {/* Outer Orbit Icons */}
      {orbit2Icons.map((icon, index) => {
        const position = getIconPosition(index, orbit2Icons.length, radius2, rotation2);
        const iconSize = icon.size || 40;

        return (
          <div
            key={icon.id}
            className="orbit-icon orbit-2"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
          >
            <div
              className="icon-content"
              style={{
                transform: rotateIcons ? `rotate(-${position.rotate}deg)` : 'none',
              }}
            >
              {icon.component}
            </div>
          </div>
        );
      })}
    </div>
  );
};
