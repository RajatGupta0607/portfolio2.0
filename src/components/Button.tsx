import type React from "react";

function Button({
  className,
  id,
  children,
}: {
  className: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <a className={`${className ?? ""} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{children}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default Button;
