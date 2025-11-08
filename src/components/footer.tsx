import Image from "next/image";
import React from "react";
import Logo from "./images/Sharon (1).png";
import LogoDark from './images/sharon_dark.png'
import { Mail } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return (
    <div className="mt-20 w-full">
      <div className="text-center">
        <Image
          src={mounted ? (resolvedTheme === "dark" ? LogoDark : Logo) : Logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Mail className="h-4 w-4" />
          mailtosharonsunny@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400   mt-12 pt-6">
        <p>
          © 2025 Sharon Sunny. <br className="md:hidden " />
          All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Sharonsunny619"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sharon-sunny-542062383/"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sharon_c_sunny/"
              className="hover:text-blue-600 transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
