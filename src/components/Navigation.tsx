import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-6 sticky top-0 z-50">
      <div className="flex justify-between items-center m-auto w-max">
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/">
            <Button variant="ghost" className="text-white">
              <Home className="mr-2" /> Início
            </Button>
          </Link>
          <Link to="/projetos">
            <Button variant="ghost" className="text-white">
              <FileText className="mr-2" /> Projetos
            </Button>
          </Link>
          <Link to="/sobre">
            <Button variant="ghost" className="text-white">
              <FileText className="mr-2" /> Sobre
            </Button>
          </Link>
          <Link to="/contato">
            <Button variant="ghost" className="text-white">
              <Mail className="mr-2" /> Contato
            </Button>
          </Link>
          <Button onClick={toggleTheme} variant="ghost" className="text-white">
            {isDark ? <Moon className="mr-2" /> : <Sun className="mr-2" />} Tema
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full text-white">
              <Home className="mr-2" /> Início
            </Button>
          </Link>
          <Link to="/projetos" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full text-white">
              <FileText className="mr-2" /> Projetos
            </Button>
          </Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full text-white">
              <FileText className="mr-2" /> Sobre
            </Button>
          </Link>
          <Link to="/contato" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full text-white">
              <Mail className="mr-2" /> Contato
            </Button>
          </Link>
          <Button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            variant="ghost"
            className="w-full text-white"
          >
            {isDark ? <Moon className="mr-2" /> : <Sun className="mr-2" />} Tema
          </Button>
        </div>
      )}
    </nav>
  );
}
