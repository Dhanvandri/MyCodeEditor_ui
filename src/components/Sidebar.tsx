import React from 'react';
import styles from '@/styles/Sidebar.module.css';
import { FaPython, FaRust} from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhp } from "react-icons/di";
import { PiFileSqlFill } from "react-icons/pi";
import { FaRProject } from "react-icons/fa";



const languages = [
  { name: <FaPython/>, extension: 'py' },
  { name: <FaRProject />, extension: 'r' },
  { name: <PiFileSqlFill />, extension: 'sql' },
  { name: <IoLogoJavascript />, extension: 'js' },
  { name: <FaGolang/>, extension: 'go' },
  { name: <DiPhp />, extension: 'php' },
  { name: <GrSwift/>, extension: 'swift' },
  { name: <FaRust/>, extension: 'rs' },
];

const templates: Record<string, string> = {
  py: `# Online Python compiler\nprint("Hello World")`,
  R: `# Online R compiler\ncat("Hello World")`,
  DB: `-- SQL script to run database queries\nSELECT 'Hello World';`,
  JS: `// Online JavaScript editor\nconsole.log("Hello World");`,
  Go: `// Online Go compiler\npackage main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello World")\n}`,
  PHP: `<?php\necho "Hello World";\n?>`,
  Swift: `// Online Swift compiler\nprint("Hello World")`,
  Rust: `// Online Rust compiler\nfn main() {\n    println!("Hello World");\n}`,
};

interface SidebarProps {
  onLanguageChange: (language: string, template: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLanguageChange }) => {
  return (
    <div className={styles.sidebar}>
      {languages.map((lang) => (
        <div
          key={lang.extension}
          className={styles.icon}
          onClick={() => onLanguageChange(lang.extension, templates[lang.extension])}
        >
          {lang.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
