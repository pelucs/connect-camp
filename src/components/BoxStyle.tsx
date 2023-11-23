import { ReactNode } from "react";

interface BoxStyleProps{
  children: ReactNode;
}

export function BoxStyle({ children }: BoxStyleProps){
  return(
    <div className="relative">
      <div className="py-4 z-20 relative flex items-center justify-center bg-yellow-500 border-2 border-black">
        {children}
      </div>

      <div className="w-full h-full bg-red-500 border-2 border-black absolute top-3 left-3"/>
    </div>
  );
}