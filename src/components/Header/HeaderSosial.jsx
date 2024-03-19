import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

const HeaderSosial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <TiSocialLinkedinCircular />
      </a>
      <a href="https://github.com" target="_blank">
        <VscGithub />
      </a>
    </div>
  );
};

export default HeaderSosial;
