import { User } from 'lucide-react';

interface FounderImageProps {
  alt: string;
  className?: string;
}

export default function FounderImage({ alt, className = "" }: FounderImageProps) {
  // This will be replaced with actual image when uploaded
  const hasFounderImage = false; // Set to true when image is available
  
  if (hasFounderImage) {
    return (
      <img
        src="/images/founder/founder-headshot.webp"
        srcSet="/images/founder/founder-headshot-400.webp 400w,
                /images/founder/founder-headshot-800.webp 800w,
                /images/founder/founder-headshot-1600.webp 1600w"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        alt={alt}
        loading="eager"
        fetchPriority="high"
        className={`object-cover rounded-lg ${className}`}
      />
    );
  }

  // Placeholder until actual image is uploaded
  return (
    <div className={`bg-muted rounded-lg flex items-center justify-center ${className}`}>
      <div className="text-center text-muted-foreground">
        <User className="w-24 h-24 mx-auto mb-4 opacity-50" />
        <p className="text-sm">Founder Photo</p>
        <p className="text-xs mt-1">Coming Soon</p>
      </div>
    </div>
  );
}