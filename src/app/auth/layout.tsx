// import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className=" min-h-screen h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-slate-700 to-slate-600 "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
