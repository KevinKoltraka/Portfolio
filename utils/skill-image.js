//Core Web Technologies (Frontend & Scripting)
import html from "../app/assets/svg/skills/html.svg";
import css from "../app/assets/svg/skills/css.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import react from "../app/assets/svg/skills/react.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";
import node from "../app/assets/svg/skills/node.svg";
//Styling Frameworks & UI Libraries
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
//Databases
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
//Back-End & DevOps Tools
import django from "../app/assets/svg/skills/django.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import git from "../app/assets/svg/skills/git.svg";
import linux from "../app/assets/svg/skills/linux.svg";
import azure from "../app/assets/svg/skills/azure.svg";
//Testing & Machine Learning
import selenium from "../app/assets/svg/skills/selenium.svg";
import tensorflow from "../app/assets/svg/skills/tensorflow.svg";
import pandas from "../app/assets/svg/skills/pandas.svg";
//Design & Productivity
import figma from "../app/assets/svg/skills/figma.svg";
import canva from "../app/assets/svg/skills/canva.svg";
import microsoftoffice from "../app/assets/svg/skills/microsoftoffice.svg";
//CMS & Platforms
import wordpress from "../app/assets/svg/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    // 🧠 Core Web Technologies
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "vitejs":
      return vitejs;
    case "node":
      return node;

    // 🎨 Styling Frameworks & UI Libraries
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "materialui":
      return materialui;

    // 🗄️ Databases
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;

    // ⚙️ Back-End & DevOps Tools
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "docker":
      return docker;
    case "git":
      return git;
    case "linux":
      return linux;
    case "azure":
      return azure;

    // 🤖 Testing & Machine Learning
    case "selenium":
      return selenium;
    case "tensorflow":
      return tensorflow;
    case "pandas":
      return pandas;

    // 🧰 Design & Productivity
    case "figma":
      return figma;
    case "canva":
      return canva;
    case "ms office":
      return microsoftoffice;

    // 🌐 CMS & Platforms
    case "wordpress":
      return wordpress;

    default:
      break;
  }
};
