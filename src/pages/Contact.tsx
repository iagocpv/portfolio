import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useTheme } from "../context/ThemeContext";

export function ContactPage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`p-10 max-w-xl mx-auto ${
        isDark ? "text-white" : "text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2
        className={`text-3xl font-semibold mb-10 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Contato
      </h2>

      <div className="flex flex-col items-center space-y-4 w-full">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=iago.csouza15@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs"
        >
          <Button variant="outline" className="w-full text-lg">
            <Mail className="mr-2" /> Email
          </Button>
        </a>

        <a
          href="https://github.com/iagocpv"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs"
        >
          <Button variant="outline" className="w-full text-lg">
            <Github className="mr-2" /> GitHub
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/iago-cardoso-315955194/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs"
        >
          <Button variant="outline" className="w-full text-lg">
            <Linkedin className="mr-2" /> LinkedIn
          </Button>
        </a>
      </div>
    </motion.div>
  );
}