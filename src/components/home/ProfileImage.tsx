
import { useState } from 'react';

const ProfileImage = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative profile-container animate-slide-up" 
      style={{ width: '280px', height: '280px' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-primary-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute inset-2 bg-accent-100 rounded-full blur-xl opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Decorative Circles */}
      <div className="absolute -top-12 -right-10 w-16 h-16 bg-primary-300 rounded-full opacity-70 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent-200 rounded-full opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-10 -left-14 w-10 h-10 bg-secondary-200 rounded-full opacity-60 animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute -bottom-4 right-2 w-12 h-12 bg-primary-200 rounded-full opacity-50 animate-bounce" style={{animationDuration: '8s'}}></div>
      
      {/* Small Accent Dots */}
      <div className="absolute top-1/4 -left-3 w-3 h-3 bg-accent-500 rounded-full"></div>
      <div className="absolute top-1/2 -right-5 w-5 h-5 bg-secondary-400 rounded-full"></div>
      <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-primary-400 rounded-full"></div>
      
      {/* Circle Frame */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ 
          boxShadow: "0 10px 30px -5px rgba(103, 71, 204, 0.4)",
          border: "4px solid rgba(155, 135, 245, 0.3)",
          overflow: "hidden"
        }}
      >
        {/* Message Popup on Hover */}
        {isHovering && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-opacity duration-300">
            <div className="text-white text-center p-4">
              <p className="font-medium text-lg">Hey, I'm Dhruba!</p>
              <p className="text-sm text-white/80">How can I help you today?</p>
            </div>
          </div>
        )}
        
        {/* Profile Image - Normal size (1x scale) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/32e8542a-929d-4640-868e-f070ddf32bc0.png" 
            alt="Dhruba Saikia - Designer and Developer" 
            className="w-full h-full object-cover scale-100"
            style={{ objectPosition: 'center 60%' }}
          />
        </div>
        
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-60 z-10 rounded-full"></div>
      </div>
      
      {/* Decorative Ring Elements */}
      <div className="absolute -inset-5 border-2 border-dashed border-primary-300 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute -inset-10 border border-primary-200 rounded-full opacity-20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-[-30px] right-[-20px] w-48 h-48 bg-primary-200 rounded-full opacity-50 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-40px] left-[-30px] w-56 h-56 bg-accent-200 rounded-full opacity-50 blur-3xl -z-10" style={{animationDelay: '0.7s'}}></div>
    </div>
  );
};

export default ProfileImage;
