
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
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/732/732211.png" 
              alt="Swift icon" 
              className="h-6 w-6"
            />
          }
          label="Swift" 
          variant="accent"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5969/5969346.png" 
              alt="Kotlin icon" 
              className="h-6 w-6"
            />
          }
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
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5611/5611129.png" 
              alt="Adobe XD icon" 
              className="h-6 w-6"
            />
          }
          label="Adobe XD" 
          variant="secondary"
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968770.png" 
              alt="Sketch icon" 
              className="h-6 w-6"
            />
          }
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
        />
        
        <SkillIcon 
          icon={
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2546/2546035.png" 
              alt="CorelDRAW icon" 
              className="h-6 w-6"
            />
          }
          label="CorelDRAW" 
          variant="primary"
        />
      </div>
    </AnimatedText>
  );
};

export default SpecialiseGrid;
