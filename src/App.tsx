import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { useTheme } from './context/ThemeContext';

export function App() {
  
  const { isDark } = useTheme();

  return (
    <Router>
      <ScrollToTop />
      <div className={"min-h-screen " + (isDark ? "dark bg-gray-950 text-gray-100" : "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900")}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
        <footer className="mt-20 text-center text-sm text-gray-600 dark:text-gray-400 py-6">
          © {new Date().getFullYear()} Iago Cardoso Souza. Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App
