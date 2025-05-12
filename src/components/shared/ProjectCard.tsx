
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  slug: string;
  featured?: boolean;
  className?: string;
}

interface TiltStyle {
  transform: string;
  transition?: string;
}

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  slug, 
  featured = false,
  className 
}: ProjectCardProps) => {
  const [tiltStyle, setTiltStyle] = useState<TiltStyle>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt angle (max 10 degrees)
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: "transform 0.1s ease-out"
    });
  };

  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.3s ease-out"
    });
  };

  return (
    <div
      className={cn(
        "perspective-wrapper", 
        featured ? "md:col-span-2" : "",
        className
      )}
    >
      <Link 
        to={`/portfolio/${slug}`} 
        className={cn(
          "group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl shadow-custom shadow-custom-hover", 
          className
        )}
      >
        <div 
          className="relative overflow-hidden aspect-[16/9] card-3d"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 bg-card hover-lift">
          <p className="text-sm text-primary-600 font-medium mb-1 animated-underline">{category}</p>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
