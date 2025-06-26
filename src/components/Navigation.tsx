import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { FileText, Home, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";


export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-6 flex justify-center gap-6 text-lg sticky top-0 z-50">
      <Link to="/">
        <Button variant="ghost" className={"text-white"}>
          <Home className="mr-2" /> Início
        </Button>
      </Link>
      <Link to="/projetos">
        <Button variant="ghost" className={"text-white"}>
          <FileText className="mr-2" /> Projetos
        </Button>
      </Link>
      <Link to="/sobre">
        <Button variant="ghost" className={"text-white"}>
          <FileText className="mr-2" /> Sobre
        </Button>
      </Link>
      <Link to="/contato">
        <Button variant="ghost" className={"text-white"}>
          <Mail className="mr-2" /> Contato
        </Button>
      </Link>
      <Button onClick={toggleTheme} variant="ghost" className={"text-white"}>
        {isDark ? <Sun className="mr-2" /> : <Moon className="mr-2" />} Tema
      </Button>
    </nav>
  );
}