
import SkillIcon from "./SkillIcon";
import AnimatedText from "@/components/shared/AnimatedText";

const SpecialiseGrid = () => {
  const skills = [
    {
      icon: "/lovable-uploads/f21d10fb-abff-42b3-aa53-f86b4aab2cd6.png",
      label: "HTML",
      alt: "HTML icon"
    },
    {
      icon: "/lovable-uploads/78432b35-c678-45cf-bb58-3042d439dd5f.png",
      label: "CSS",
      alt: "CSS icon"
    },
    {
      icon: "/lovable-uploads/baf18928-6857-4b09-b124-fee5ffd53046.png",
      label: "JavaScript",
      alt: "JavaScript icon"
    },
    {
      icon: "/lovable-uploads/67df72dd-ea89-4cb7-83c8-4f99d937920f.png",
      label: "React",
      alt: "React icon"
    },
    {
      icon: "/lovable-uploads/8f366afe-9b23-4263-9c11-f1314756baa7.png",
      label: "Node.js",
      alt: "Node.js icon"
    },
    {
      icon: "/lovable-uploads/b8e13655-c3e2-48cb-8079-b17c63c0b946.png",
      label: "Express.js",
      alt: "Express.js icon"
    },
    {
      icon: "/lovable-uploads/0e52dee5-a859-4d0d-b19a-573cb9c39d53.png",
      label: "MongoDB",
      alt: "MongoDB icon"
    },
    {
      icon: "/lovable-uploads/89e94ff8-414d-4cef-953e-0dec6f83cd20.png",
      label: "Git",
      alt: "Git icon"
    },
    {
      icon: "/lovable-uploads/2540f1a1-100c-4fe0-80cf-61fad025fac4.png",
      label: "Figma",
      alt: "Figma icon"
    },
    {
      icon: "/lovable-uploads/38238a00-d7b9-4b0d-a5eb-f56609084389.png",
      label: "Adobe Photoshop",
      alt: "Adobe Photoshop icon"
    }
  ];

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <AnimatedText className="mt-12 w-full" delay={800}>
      <p className="text-sm font-medium text-muted-foreground mb-6">Specialise at</p>
      
      {/* Infinite scroll container with proper overflow and width */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 w-max">
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill.label}-${index}`} className="flex-shrink-0">
              <SkillIcon 
                icon={
                  <img 
                    src={skill.icon} 
                    alt={skill.alt} 
                    className="h-6 w-6 object-contain"
                  />
                }
                label={skill.label} 
                variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "accent"}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedText>
  );
};

export default SpecialiseGrid;
