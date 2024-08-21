import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import image_src from './images/Group.png'
import { ThemeSwitch } from './components/ThemeSelector'
import { AskCookbook } from './components/AskCookbook'

const config: DocsThemeConfig = {
  logo: (
    <Image src={image_src} alt={""} width={
      60}/>
  ),
  nextThemes: { defaultTheme: "dark" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ApeChain Docs",
    };
  },
  navigation: false,
  themeSwitch: {
    component: <ThemeSwitch />
  },
  navbar: {
    extraContent: (
      <div >
        <AskCookbook />
      </div>
    ),
  }
};

export default config;
