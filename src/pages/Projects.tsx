import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import type { Project } from "../types/Project";
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { useTheme } from "../context/ThemeContext";

export function ProjectsPage() {
  
  const {isDark} = useTheme()
  
  const projects: Project[] = [
    {
      title: "Neurahive",
      description: "Sistema para gerenciamento de agentes de IA, com foco em respostas baseadas em temas pré-definidos.",
      url: "https://github.com/Grupo-Syntax-Squad/neurahive"
    },
    {
      title: "Foodtracker",
      description: "App para monitorar alimentação de pets, alertando quando o pote de ração estiver vazio.",
      url: "https://github.com/iagocpv/foodtracker"
    },
    {
      title: "App multifunções",
      description: "Aplicativo Flutter com funções como To-Do List, Lista de compras, Notas rápidas, pesquisa de cidades, entre outras.",
      url: "https://github.com/iagocpv/flutter_multifuncoes"
    },
    {
      title: "Análise de dados sobre a Covid Longa",
      description: "Projeto desenvolvido para a Rede Vanguarda com o objetivo de analisar dados sobre a Covid Longa e seus impactos na região.",
      url: "https://github.com/Equipe-CodeLand/API-2023.1"
    },
    {
    title: "CallNet",
    description: "Sistema para facilitar a gestão de chamados em empresas provedoras de internet.",
    url: "https://github.com/Equipe-CodeLand/API-2023.2"
    },
    {
      title: "Sistema de gestão de ativos",
      description: "Sistema para monitoramento de ativos empresariais, com dashboards e informações sobre localização, valor e manutenções.",
      url: "https://github.com/Equipe-CodeLand/API-2024.1"
    },
    {
      title: "Tupã",
      description: "Sistema para monitoramento de estações meteorológicas de baixo custo, com dados de sensores ambientais.",
      url: "https://github.com/Grupo-Syntax-Squad/Tupan"
    },
    {
      title: "Atlantis",
      description: "Sistema para gerenciamento de acomodações de clientes e dependentes para uma rede de resorts fictícia.",
      url: "https://github.com/iagocpv/atlantis"
    },
    {
      title: "Autobots",
      description: "Sistema para gerenciamento de vendas de veículos.",
      url: "https://github.com/iagocpv/autobots"
    },
    {
      title: "Loteria",
      description: "Aplicativo web para mostrar os dados do último sorteio da Mega-sena, Lotofácil e Quina.",
      url: "https://github.com/iagocpv/LabDevWeb"
    }
  ];

  return (
    <motion.div className="p-10 max-w-6xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className={`text-3xl font-semibold mb-10 text-center ${
            isDark ? "text-white" : "text-gray-900"
          }`}>Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} className="shadow-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button size="lg">Ver no GitHub</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}