
import { Code, Smartphone, Monitor, Palette, Brush } from "lucide-react";
import SkillIcon from "./SkillIcon";
import AnimatedText from "@/components/shared/AnimatedText";

const SpecialiseGrid = () => {
  return (
    <AnimatedText className="mt-12" delay={800}>
      <p className="text-sm font-medium text-muted-foreground mb-4">Specialise at</p>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mt-2">
        {/* Web Development */}
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" 
              alt="HTML icon" 
              className="h-6 w-6"
            />
          }
          label="HTML" 
          variant="primary"
          iconClassName="h-6 w-6"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png" 
              alt="CSS icon" 
              className="h-6 w-6"
            />
          }
          label="CSS" 
          variant="primary"
          iconClassName="h-6 w-6"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" 
              alt="JavaScript icon" 
              className="h-6 w-6"
            />
          }
          label="JavaScript" 
          variant="primary"
          iconClassName="h-6 w-6"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" 
              alt="React icon" 
              className="h-6 w-6"
            />
          }
          label="React" 
          variant="primary"
          iconClassName="h-6 w-6"
        />
        
        {/* App Development */}
        <SkillIcon 
          icon={
            <img 
              src="https://storage.googleapis.com/cms-storage-bucket/a9d6ce81aee44ae017ee.png" 
              alt="Flutter icon" 
              className="h-6 w-6"
            />
          }
          label="Flutter" 
          variant="accent"
          iconClassName="h-6 w-6"
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
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" 
              alt="Figma icon" 
              className="h-6 w-6"
            />
          }
          label="Figma" 
          variant="secondary"
          iconClassName="h-6 w-6"
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
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png" 
              alt="Adobe Illustrator icon" 
              className="h-6 w-6"
            />
          }
          label="Illustrator" 
          variant="primary"
          iconClassName="h-6 w-6"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png" 
              alt="Photoshop icon" 
              className="h-6 w-6"
            />
          }
          label="Photoshop" 
          variant="primary"
          iconClassName="h-6 w-6"
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
