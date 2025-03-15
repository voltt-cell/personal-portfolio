import { Github, Linkedin, Mail } from "lucide-react";

export const socialLinks = [
  {
    href: "https://github.com/voltt-cell",
    icon: <Github className="h-5 w-5" />,
  },
  {
    href: "https://www.linkedin.com/in/loveleet-verma",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    href: "mailto:vermaloveleet@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

const LeftSide = () => {
  return (
    <div className="w-32 h-[90vh] flex-col items-center justify-end gap-4 hidden xl:inline-flex fixed left-0 bottom-0">
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, i) => (
          <a href={link.href} target="_blank" key={i}>
            <span className="w-10 h-10 text-xl dark:bg-gray-600 bg-gray-200 hover:text-teal-500 dark:hover:text-teal-400 rounded-full inline-flex items-center justify-center hover:-translate-y-1 transition-all duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
      <div className="w-[2px] h-28 dark:bg-white bg-black"></div>
    </div>
  );
};

export default LeftSide;
