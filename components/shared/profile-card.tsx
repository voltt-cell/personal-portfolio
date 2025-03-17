"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { infos } from "@/constants";
import Image from "next/image";

export function ProfileCard() {
  const classNameButton =
    "text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400";
  return (
    <Card className="overflow-hidden bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-teal-200 dark:border-teal-700 shadow-lg relative">
            <Image
              alt="Profile"
              src={infos.avatar}
              className="object-cover h-24 w-24"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-200">
              {infos.fullName}
            </h1>
            <p className="text-sm text-teal-600 dark:text-teal-400">
              {infos.status}
            </p>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {infos.shortBio}
          </p>
        </div>
        <div className="flex xl:hidden justify-center space-x-4 mt-6">
          <a href={infos.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href={infos.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={`mailto:${infos.mail}`}>
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
