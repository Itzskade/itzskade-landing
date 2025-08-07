import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/ItzSkade",
    icon: <Github className="w-10 h-10 text-white" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/Itzskade",
    icon: <Linkedin className="w-10 h-10 text-white" />,
  },
  {
    name: "Email",
    url: "mailto:itzskade@gmail.com",
    icon: <Mail className="w-10 h-10 text-white" />,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/d74nrXcUV3",
    icon: <FaDiscord className="w-10 h-10 text-white" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/itzskade",
    icon: <FaInstagram className="w-10 h-10 text-white" />,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/itzskade",
    icon: <FaXTwitter className="w-10 h-10 text-white" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6 py-12">
      <div className="bg-[#161b22] p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-gray-700">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Roger Marín</h1>
          <p className="text-xl text-gray-400 mt-2">
            Entusiasta de la tecnología
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
            >
              <Card className="rounded-2xl bg-[#0d1117] hover:bg-[#1f2937] transition duration-300 border border-gray-600 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-5">
                  {link.icon}
                  <span className="mt-3 text-white text-lg font-medium">
                    {link.name}
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
