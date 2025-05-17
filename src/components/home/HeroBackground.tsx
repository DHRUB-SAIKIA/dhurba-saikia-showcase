
const HeroBackground = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full opacity-30 filter blur-3xl dark:opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-100 rounded-full opacity-30 filter blur-3xl dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-secondary-100 rounded-full opacity-20 filter blur-3xl dark:opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </>
  );
};

export default HeroBackground;
