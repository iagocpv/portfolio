import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Mail, Sun, Moon, Menu, X, User } from "lucide-react";
import { Button } from "./ui/Button";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow p-5 sticky top-0 z-50 text-white">
      <div className="flex items-center m-auto w-max">
        <div className="hidden sm:flex gap-1 md:gap-6 text-lg">
          <Link to="/">
            <Button variant="ghost">
              <Home/>
            </Button>
          </Link>
          <Link to="/projetos">
            <Button variant="ghost">
              <FileText className="mr-2 hidden md:flex" />Projetos
            </Button>
          </Link>
          <Link to="/sobre">
            <Button variant="ghost">
              <User className="mr-2 hidden md:flex"/>Sobre
            </Button>
          </Link>
          <Link to="/contato">
            <Button variant="ghost">
              <Mail className="mr-2 hidden md:flex" />Contato
            </Button>
          </Link>
          <Button onClick={toggleTheme} variant="ghost">
            {isDark ? <Moon/> : <Sun/>}
          </Button>
        </div>
        
        <div  className="flex gap-15 sm:hidden text-lg items-center">
          {!isOpen && 
            <Link to="/">
              <Button variant="ghost">
                <Home/>
              </Button>
            </Link>
          }
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {!isOpen && 
            <Button onClick={toggleTheme} variant="ghost">
              {isDark ? <Moon/> : <Sun/>}
            </Button>}
        </div>

      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 sm:hidden">
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
        </div>
      )}
    </nav>
  );
}
