
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

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  slug, 
  featured = false,
  className 
}: ProjectCardProps) => {
  return (
    <Link 
      to={`/portfolio/${slug}`} 
      className={cn(
        "group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl", 
        featured ? "md:col-span-2" : "",
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-card">
        <p className="text-sm text-primary-600 font-medium mb-1">{category}</p>
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
