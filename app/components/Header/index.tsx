import React from "react";
import Image from "next/image";
import logoImg from './assets/raLogo.png'

export const Header = () => {
  return (
    <div className="headerComponent">
      <Image src="/assets/RaLogoText.png" alt="Ra Logo" width={200} height={30} />
      <Image src="/assets/raLogo.png" alt="Ra Logo" width={80} height={80} />
    </div>
  );
};
