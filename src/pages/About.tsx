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
import SkillIcon from "../components/ui/SkillIcon";

export function AboutPage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="p-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/*<img
        src={eu}
        alt="Minha foto"
        className="rounded-2xl shadow-lg max-w-xs mx-auto mb-6"
      /> */}
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
        Sou estudante de tecnologia com foco em desenvolvimento fullstack, com maior interesse em backend. Trabalho com Java, Python e JavaScript, utilizando frameworks como Spring Boot, Node.js e FastAPI.

No frontend, tenho experiência com HTML, CSS, React e Angular, o que me permite atuar em diferentes camadas de uma aplicação.

Tenho interesse em arquitetura de sistemas, bancos de dados e cloud, buscando evoluir na construção de aplicações escaláveis e bem estruturadas. Também venho explorando conceitos de inteligência artificial aplicada a software.

Busco oportunidades para aplicar meus conhecimentos em projetos reais e continuar evoluindo como desenvolvedor.
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
        className={`text-2xl font-semibold mb-7 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Habilidades
      </h3>

      <div className="max-w-5xl mx-auto space-y-10 px-20">

        {/* BACKEND */}
        <section>
          <h4 className="text-center text-lg italic mb-6">Backend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-4xl">
            <SkillIcon icon={<FaJava className="text-orange-700" />} label="Java" />
            <SkillIcon icon={<SiSpring className="text-green-600" />} label="Spring" />
            <SkillIcon icon={<SiNodedotjs className="text-green-500" />} label="Node.js" />
            <SkillIcon icon={<SiExpress className="text-gray-700" />} label="Express" />
            <SkillIcon icon={<SiPython className="text-yellow-500" />} label="Python" />
            <SkillIcon icon={<SiFlask className="text-gray-600" />} label="Flask" />
            <SkillIcon icon={<SiDjango className="text-green-800" />} label="Django" />
            <SkillIcon icon={<SiFastapi className="text-teal-400" />} label="FastAPI" />
          </div>
        </section>
        {/* FRONTEND */}
        <section>
          <h4 className="text-center text-lg italic mb-6">Frontend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-4xl">
            <SkillIcon icon={<SiHtml5 className="text-orange-600" />} label="HTML" />
            <SkillIcon icon={<SiCss3 className="text-blue-600" />} label="CSS" />
            <SkillIcon icon={<SiJavascript className="text-yellow-400" />} label="JavaScript" />
            <SkillIcon icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
            <SkillIcon icon={<SiReact className="text-cyan-400" />} label="React" />
            <SkillIcon icon={<SiAngular className="text-red-600" />} label="Angular" />
            <SkillIcon icon={<SiExpo className="text-black" />} label="Expo" />
            <SkillIcon icon={<SiFlutter className="text-[#02569B]" />} label="Flutter" />
          </div>
        </section>
        {/* DATABASE */}
        <section>
          <h4 className="text-center text-lg italic mb-6">Database</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-4xl">
            <SkillIcon icon={<SiMysql className="text-blue-700" />} label="MySQL" />
            <SkillIcon icon={<SiPostgresql className="text-blue-900" />} label="PostgreSQL" />
            <SkillIcon icon={<SiMongodb className="text-green-600" />} label="MongoDB" />
            <SkillIcon icon={<SiRedis className="text-red-500" />} label="Redis" />
          </div>
        </section>

        {/* DEVOPS */}
        <section>
          <h4 className="text-center text-lg italic mb-6">DevOps & Tools</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-4xl">
            <SkillIcon icon={<SiGithub className={isDark ? "text-white" : "text-gray-900"} />} label="GitHub" />
            <SkillIcon icon={<SiDocker className="text-blue-400" />} label="Docker" />
            <SkillIcon icon={<VscAzure className="text-[#007FFF]" />} label="Azure" />
          </div>
        </section>

      </div>
    </motion.div>
  );
}
