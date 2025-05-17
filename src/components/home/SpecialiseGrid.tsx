
import { Code, FileCode, Monitor, Smartphone, Palette, Brush } from "lucide-react";
import SkillIcon from "./SkillIcon";
import AnimatedText from "@/components/shared/AnimatedText";

const SpecialiseGrid = () => {
  return (
    <AnimatedText className="mt-12" delay={800}>
      <p className="text-sm font-medium text-muted-foreground mb-4">Specialise at</p>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mt-2">
        {/* Web Development */}
        <SkillIcon 
          icon={<FileCode />}
          label="HTML" 
          variant="primary"
        />
        
        <SkillIcon 
          icon={<Code />}
          label="CSS" 
          variant="primary"
        />
        
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-js">
              <path stroke="currentColor" d="M12 19.15L4.8 8.4 12 4.5l7.2 3.9z" />
              <path stroke="currentColor" d="M12 19.15v-4.6" />
              <path stroke="currentColor" d="M9 15.5l3 -1v0.05" />
              <path stroke="currentColor" d="M15 15.5l-3 -1v0.05" />
              <path stroke="currentColor" d="M12 4.5v4.1" />
              <path stroke="currentColor" d="M9 9.65l3 -1v0.05" />
              <path stroke="currentColor" d="M15 9.65l-3 -1v0.05" />
            </svg>
          }
          label="JavaScript" 
          variant="primary"
        />
        
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" />
            </svg>
          }
          label="React" 
          variant="primary"
        />
        
        {/* App Development */}
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="currentColor" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3" />
              <path stroke="currentColor" d="M12 12l8-4.5" />
              <path stroke="currentColor" d="M12 12v9" />
              <path stroke="currentColor" d="M12 12L4 7.5" />
            </svg>
          }
          label="Flutter" 
          variant="accent"
        />
        
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="currentColor" d="M10 20.777a8.942 8.942 0 0 1-2.48-.969" />
              <path stroke="currentColor" d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
              <path stroke="currentColor" d="M4.579 17.093a8.961 8.961 0 0 1-1.227-2.592" />
              <path stroke="currentColor" d="M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305" />
              <path stroke="currentColor" d="M6.907 4.579A8.954 8.954 0 0 1 10 3.223" />
              <circle stroke="currentColor" cx="12" cy="12" r="1" />
            </svg>
          }
          label="Swift" 
          variant="accent"
        />
        
        <SkillIcon 
          icon={<Smartphone />}
          label="Kotlin" 
          variant="accent"
        />
        
        {/* UI/UX Design */}
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="currentColor" d="M5 5.5A2.5 2.5 0 0 1 7.5 3H12v7H7.5A2.5 2.5 0 0 1 5 7.5v-2z" />
              <path stroke="currentColor" d="M12 3h4.5A2.5 2.5 0 0 1 19 5.5v2a2.5 2.5 0 0 1-2.5 2.5H12V3z" />
              <path stroke="currentColor" d="M12 10v11" />
              <path stroke="currentColor" d="M5 16.5A2.5 2.5 0 0 1 7.5 14H12v7H7.5A2.5 2.5 0 0 1 5 18.5v-2z" />
            </svg>
          }
          label="Figma" 
          variant="secondary"
        />
        
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="currentColor" d="M16.5 6.5h.5m-8.5 11h3m-3-14h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z" />
            </svg>
          }
          label="Adobe XD" 
          variant="secondary"
        />
        
        <SkillIcon 
          icon={<Monitor />}
          label="Sketch" 
          variant="secondary"
        />
        
        {/* Graphic Design */}
        <SkillIcon 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="currentColor" d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2z" />
              <path stroke="currentColor" d="M10 8v8" />
              <path stroke="currentColor" d="M7 12h6" />
              <path stroke="currentColor" d="M17 12h.01" />
              <path stroke="currentColor" d="M17 8h.01" />
              <path stroke="currentColor" d="M17 16h.01" />
            </svg>
          }
          label="Illustrator" 
          variant="primary"
        />
        
        <SkillIcon 
          icon={<Palette />}
          label="Photoshop" 
          variant="primary"
        />
        
        <SkillIcon 
          icon={<Brush />}
          label="CorelDRAW" 
          variant="primary"
        />
      </div>
    </AnimatedText>
  );
};

export default SpecialiseGrid;
