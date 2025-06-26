import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiReact,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGithub,
  SiDocker,
  SiExpo,
  SiFlutter,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export function AboutPage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="p-10 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2
        className={`text-3xl font-semibold mb-6 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Sobre Mim
      </h2>

      <p
        className={`text-lg max-w-3xl mx-auto mb-6 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Sou um estudante de tecnologia com interesse em desenvolvimento fullstack, com ênfase no backend. Estou aprendendo linguagens como Java, Python e Javascript, além de frameworks como Spring e Node.js. No frontend, tenho experiência com HTML, CSS, React e Angular, o que me permite atuar em diferentes camadas de uma aplicação. Tenho vontade de crescer na área, aprofundando meus conhecimentos em arquitetura de sistemas, bancos de dados, nuvem e inteligência artificial. Estou aberto a novos desafios que me ajudem a evoluir e a contribuir com projetos reais.
      </p>

      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h3
          className={`text-2xl font-semibold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Curso
        </h3>
        <p className={`text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
          Cursando 5º semestre do curso Tecnólogo em Desenvolvimento de Software Multiplataforma na Fatec de São José dos Campos.
        </p>
        <p className={`text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
          Previsão de conclusão: 12/2025
        </p>
      </div>

      <h3
        className={`text-2xl font-semibold mb-10 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Habilidades
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center text-4xl">
        <FaJava title="Java" className="text-orange-700" />
        <SiJavascript title="JavaScript" className="text-yellow-400" />
        <SiTypescript title="TypeScript" className="text-blue-500" />
        <SiPython title="Python" className="text-yellow-500" />
        <SiHtml5 title="HTML5" className="text-orange-600" />
        <SiCss3 title="CSS3" className="text-blue-600" />
        <SiSpring title="Spring" className="text-green-600" />
        <SiNodedotjs title="Node.js" className="text-green-500" />
        <SiExpress title="Express" className="text-gray-700" />
        <SiFlask title="Flask" className="text-gray-600" />
        <SiDjango title="Django" className="text-green-800" />
        <SiFastapi title="FastAPI" className="text-teal-400" />
        <SiReact title="React" className="text-cyan-400" />
        <SiExpo title="Expo" className="text-black" />
        <SiFlutter title="Flutter" className="text-[#02569B]" />
        <SiAngular title="Angular" className="text-red-600" />
        <SiMysql title="MySQL" className="text-blue-700" />
        <SiPostgresql title="PostgreSQL" className="text-blue-900" />
        <SiMongodb title="MongoDB" className="text-green-600" />
        <SiRedis title="Redis" className="text-red-500" />
        <SiGithub
          title="GitHub"
          className={`${isDark ? "text-white" : "text-gray-900"}`}
        />
        <SiDocker title="Docker" className="text-blue-400" />
        <VscAzure title="Azure" className="text-[#007FFF]"/>
      </div>
    </motion.div>
  );
}
