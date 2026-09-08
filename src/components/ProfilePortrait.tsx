import { useState } from 'react';

interface ProfilePortraitProps {
  className?: string;
  size?: 'hero' | 'about' | 'compact';
  priority?: boolean;
}

export default function ProfilePortrait({
  className = '',
  size = 'hero',
  priority = true,
}: ProfilePortraitProps) {
  const [imgSrc, setImgSrc] = useState<string>('/portrait.webp');
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const fallbackSources = ['/portrait.webp', '/image.png'];

  const handleImgError = () => {
    const nextIndex = fallbackIndex + 1;
    if (nextIndex < fallbackSources.length) {
      setFallbackIndex(nextIndex);
      setImgSrc(fallbackSources[nextIndex]);
    }
  };

  return (
    <div
      className={`relative select-none pointer-events-none flex items-end justify-center ${className}`}
    >
      {/* Subtle depth glow behind portrait */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d8d5cc]/30 via-transparent to-transparent pointer-events-none" />

      <picture className="w-full h-full flex items-end justify-center">
        <source srcSet={imgSrc} />
        <img
          src={imgSrc}
          onError={handleImgError}
          alt="Salman Ali Khan — UI/UX Designer & React Frontend Developer"
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          className={`w-auto max-w-full h-auto object-contain object-bottom drop-shadow-[0_18px_32px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out ${
            size === 'hero'
              ? 'max-h-[520px] sm:max-h-[620px] md:max-h-[680px] lg:max-h-[740px]'
              : size === 'about'
              ? 'max-h-[420px]'
              : 'max-h-[280px]'
          }`}
        />
      </picture>
    </div>
  );
}
