export const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[80rem] mx-auto px-5 md:px-10 ${className || ""}`}>
      {children}
    </div>
  );
};
