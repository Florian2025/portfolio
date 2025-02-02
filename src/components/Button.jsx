export const Button = ({ children, theme, className, href }) => {
  const baseClasses = "text-white hover:text";
  const themeClasses =
    theme === "primary"
      ? "bg-primary hover:bg-[#689EF5]"
      : theme === "secondary"
      ? "bg-secondary hover:bg-blue-200"
      : "";

  const renderButton = () => {
    return (
      <button className={`${baseClasses} ${themeClasses} ${className}`}>
        {children}
      </button>
    );
  };

  const renderLink = () => (
    <a
      href={href}
      className={`button inline-block py-3 px-3 rounded-lg ${baseClasses} ${themeClasses} ${className}`}
    >
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};
