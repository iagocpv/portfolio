import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import eu from "/eu.jpg";
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
import SkillIcon from "../components/ui/SkillIcon";

export function AboutPage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="p-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={eu}
        alt="Minha foto"
        className="rounded-2xl shadow-lg max-w-xs mx-auto mb-6"
      />
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
          Cursando 6º semestre do curso Tecnólogo em Desenvolvimento de Software Multiplataforma na Fatec de São José dos Campos.
        </p>
        <p className={`text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
          Previsão de conclusão: 06/2026
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
        <SkillIcon icon={<FaJava title="Java" className="text-orange-700" />} label="Java"/>
        <SkillIcon icon={<SiJavascript title="JavaScript" className="text-yellow-400" />} label="Javascript" />
        <SkillIcon icon={<SiTypescript title="TypeScript" className="text-blue-500" />} label="Typescript" />
        <SkillIcon icon={<SiPython title="Python" className="text-yellow-500" />} label="Python" />
        <SkillIcon icon={<SiHtml5 title="HTML5" className="text-orange-600" />} label="HTML" />
        <SkillIcon icon={<SiCss3 title="CSS3" className="text-blue-600" />} label="CSS" />
        <SkillIcon icon={<SiSpring title="Spring" className="text-green-600" />} label="Spring" />
        <SkillIcon icon={<SiNodedotjs title="Node.js" className="text-green-500" />} label="Node.js" />
        <SkillIcon icon={<SiExpress title="Express" className="text-gray-700" />} label="Express" />
        <SkillIcon icon={<SiFlask title="Flask" className="text-gray-600" />} label="Flask" />
        <SkillIcon icon={<SiDjango title="Django" className="text-green-800" />} label="Django" />
        <SkillIcon icon={<SiFastapi title="FastAPI" className="text-teal-400" />} label="FastAPI" />
        <SkillIcon icon={<SiReact title="React" className="text-cyan-400" />} label="React" />
        <SkillIcon icon={<SiExpo title="Expo" className="text-black" />} label="Expo" />
        <SkillIcon icon={<SiFlutter title="Flutter" className="text-[#02569B]" />} label="Flutter" />
        <SkillIcon icon={<SiAngular title="Angular" className="text-red-600" />} label="Angular" />
        <SkillIcon icon={<SiMysql title="MySQL" className="text-blue-700" />} label="MySQL" />
        <SkillIcon icon={<SiPostgresql title="PostgreSQL" className="text-blue-900" />} label="PostgreSQL" />
        <SkillIcon icon={<SiMongodb title="MongoDB" className="text-green-600" />} label="MongoDB" />
        <SkillIcon icon={<SiRedis title="Redis" className="text-red-500" />} label="Redis" />       
        <SkillIcon icon={
          <SiGithub
            title="GitHub"
            className={`${isDark ? "text-white" : "text-gray-900"}`}
          />}
          label="Github" /> 
        <SkillIcon icon={<SiDocker title="Docker" className="text-blue-400" />} label="Docker" /> 
        <SkillIcon icon={<VscAzure title="Azure" className="text-[#007FFF]"/>} label="Azure" />  
      </div>
    </motion.div>
  );
}
