import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Button } from "../components/ui/Button";
import { Github, Linkedin } from "lucide-react";
import avatarImg from "../assets/avatar.png"; 

export function HomePage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`p-10 max-w-6xl mx-auto ${
        isDark ? "text-white" : "text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header className="text-center mb-16 ">
        <img
          src={avatarImg}
          alt="Avatar Iago Cardoso Souza"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover border-4 border-indigo-500"
        />

        <h1 className={`text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>Iago Cardoso Souza</h1>
        <p
          className={`text-xl max-w-2xl mx-auto ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
        <p className="mb-4 italic">
          Desenvolvedor Fullstack
        </p>
          Acredito que tecnologia existe para criar soluções reais. Meu objetivo é desenvolver sistemas que sejam ao mesmo tempo funcionais, eficientes e fáceis de manter.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://github.com/iagocpv" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-lg px-6">
              <Github className="mr-2" /> GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/iago-cardoso-315955194/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-lg px-6">
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
          </a>
        </div>
      </header>
    </motion.div>
  );
}

        