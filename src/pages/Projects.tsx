import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import type { Project } from "../types/Project";
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { useTheme } from "../context/ThemeContext";

export function ProjectsPage() {
  
  const {isDark} = useTheme()

  const apiProjects: Project[] = [
    {
      title: "API 6 - Synapse",
      description: "Plataforma inteligente desenvolvida para a empresa DomRock, utilizando uma base de dados fornecida em arquivos CSV como referência para estruturar os relatórios e o módulo de chat. O sistema automatiza a geração de relatórios corporativos, oferece consultas em linguagem natural e disponibiliza previsões e análises em tempo real, tornando a exploração de dados mais rápida e acessível.",
      url: "https://github.com/Grupo-Syntax-Squad/synapse",
      contribution: "Cadastro de usuários, autenticação/autorização, criação dos módulos de websocket e notificações, envio de relatórios por email, previsões + cache do Prophet.",
      tech: "Python, FastAPI, React, PostgreSQL, SpaCy, Transformers, Torch, Docker, Redis, Prometheus, Grafana, Loki"
    },
    {
      title: "API 5 - Neurahive",
      description: "Plataforma desenvolvida para a empresa Pro4Tech com foco em gerenciar agentes de inteligência artificial. O sistema permite cadastrar e configurar agentes que respondem a perguntas dos usuários a partir de dados estruturados em arquivos CSV, facilitando a consulta e análise de informações de forma automatizada.",
      url: "https://github.com/Grupo-Syntax-Squad/neurahive",
      contribution: "Modelagem de dados, autenticação/autorização, CRUD de agentes, integração com serviços de IA, envio e tratamento dos arquivos CSV, além do processo de build do APK para distribuição.",
      tech: "Python, FastAPI, React Native (Expo), PostgreSQL, Render, Docker, OpenRouter"
    },
    {
      title: "API 4 - Tupã",
      description: "Projeto desenvolvido para a empresa Tecsus com o objetivo de monitorar estações meteorológicas de baixo custo. O sistema recebe dados de sensores instalados em campo, processa as informações coletadas (como direção e velocidade do vento, índice pluviométrico, temperatura, pressão e umidade) e disponibiliza dashboards para acompanhamento em tempo real.",
      url: "https://github.com/Grupo-Syntax-Squad/Tupan",
      contribution: "Implementação de CRUDs para estações e medições, ajustes no backend, criação de endpoints de consulta, configuração de filas e deploy do sistema em instâncias EC2 da AWS.",
      tech: "Python, Django, React, PostgreSQL, Redis, Docker, AWS"
    },
    {
      title: "API 3 - Sistema de Gestão de Ativos",
      description: "Sistema empresarial desenvolvido para a empresa Youtan, com o objetivo de monitorar ativos corporativos. A solução oferece cadastro e acompanhamento de informações como localização, valor, histórico de manutenção e dashboards que auxiliam no controle e tomada de decisão sobre bens materiais.",
      url: "https://github.com/Equipe-CodeLand/API-2024.1",
      contribution: "Criação de CRUDs, envio e armazenamento de arquivos relacionados a ativos, mapeamento de entidades utilizando Spring JPA, implementação de regras de autorização no frontend e desenvolvimento de listagens e consultas customizadas.",
      tech: "Java, Spring, React, Typescript, MySQL"
    },
    {
      title: "API 2 - CallNet",
      description: "Sistema voltado para provedores de internet, com o objetivo de otimizar a gestão de chamados técnicos e administrativos. A aplicação organiza atendimentos, acompanha o status dos chamados e gera registros que facilitam a gestão do fluxo de demandas de clientes.",
      url: "https://github.com/Equipe-CodeLand/API-2023.2",
      contribution: "Desenvolvimento de funcionalidades no backend, modelagem do banco de dados, criação de endpoints para chamados, além da colaboração em componentes de frontend relacionados ao fluxo de abertura e acompanhamento de tickets.",
      tech: "Node.js, Express, Typescript, MySQL, TypeORM, React"
    },
    {
      title: "API 1 - Análise de Dados sobre a Covid Longa",
      description: "Projeto desenvolvido para a Rede Vanguarda com o propósito de analisar dados da Covid Longa na região do Vale do Paraíba. O sistema processa planilhas CSV, gera gráficos estatísticos e disponibiliza dashboards que auxiliam na visualização dos impactos da doença em diferentes municípios e faixas etárias.",
      url: "https://github.com/Equipe-CodeLand/API-2023.1",
      contribution: "Manipulação e limpeza de arquivos CSV, implementação de CRUDs para armazenamento de informações, geração de gráficos dinâmicos e modelagem de dados no banco de dados relacional.",
      tech: "Python, Flask, MySQL, HTML, CSS, Javascript, Charts.js"
    }
  ]
  
  const otherProjects: Project[] = [ 
    {
      title: "Tokenização SpaCy",
      description: "Este projeto implementa uma pipeline de tokenização utilizando SpaCy e filtrando tokens que não são palavras usando expressões regulares. É baixado um texto do Projeto Gutenberg(como Dom Casmurro), processado para extrair apenas as palavras relevantes e depois são exibidas estatísticas sobre o número de tokens antes e depois da filtragem.",
      url: "https://github.com/iagocpv/tokenizacao-spacy",
      tech: "Python, SpaCy"
    }, 
    {
      title: "Parceiros",
      description: "Formulário simples para cadastro de parceiros comerciais, com busca no ViaCep para preenchimento automático do endereço e ReceitaWS para validação e autopreenchimento dos dados do CNPJ. Os dados são salvos utilizando procedures no banco Postgres.",
      url: "https://github.com/iagocpv/parceiros",
      tech: "React, Typescript, Spring Boot, Java, Postgres"
    }, 
    {
      title: "Youtube Downloader",
      description: "Aplicativo desktop desenvolvido em Python para baixar vídeos e áudios do YouTube em diferentes resoluções e formatos, incluindo MP4 e MP3. O sistema permite ao usuário escolher a qualidade do download, visualizar o progresso em tempo real e salvar os arquivos de forma organizada em diretórios locais, oferecendo uma interface simples e intuitiva construída com Tkinter.",
      url: "https://github.com/iagocpv/yt-downloader",
      tech: "Python, Tkinter, yt-dlp"
    },   
    {
      title: "Foodtracker",
      description: "Aplicativo voltado ao monitoramento de alimentação de pets, que utiliza sensores e integração com backend para alertar o usuário quando o pote de ração estiver vazio. O sistema registra horários de alimentação, consumo médio e status do recipiente, possibilitando acompanhar hábitos do animal e receber notificações automáticas via API. O design foi planejado no Figma e o backend implementado em FastAPI.",
      url: "https://github.com/Grupo-Syntax-Squad/food-tracker",
      tech: "Python, FastAPI, Postgres, Docker"
    },
    {
      title: "App multifunções",
      description: "Aplicativo móvel criado em Flutter que concentra diversas ferramentas do dia a dia em uma única interface, como To-Do List, lista de compras, notas rápidas, calculadora e pesquisa de cidades. O projeto tem como objetivo oferecer praticidade e organização pessoal, com armazenamento local e design responsivo. Cada funcionalidade foi projetada para funcionar de forma independente dentro do mesmo app.",
      url: "https://github.com/iagocpv/flutter_multifuncoes",
      tech: "Dart, Flutter"
    },
    {
      title: "Atlantis",
      description: "Sistema web desenvolvido para o gerenciamento de acomodações e reservas em uma rede de resorts fictícia. A aplicação permite cadastrar clientes, dependentes e quartos, além de gerenciar check-ins, check-outs e status das hospedagens. O projeto foca em boas práticas de componentização com React e na criação de uma interface moderna e responsiva voltada à administração hoteleira.",
      url: "https://github.com/iagocpv/atlantis",
      tech: "React, Typescript"
    },
    {
      title: "Autobots",
      description: "Aplicação desenvolvida em Java com Spring para o gerenciamento de vendas de veículos. O sistema inclui cadastro de clientes, carros e vendedores, além do registro de negociações e relatórios básicos. Foi implementado com o banco de dados H2 para facilitar o desenvolvimento local e demonstrar o uso de entidades, relacionamentos e operações CRUD em ambiente Spring Boot.",
      url: "https://github.com/iagocpv/autobots",
      tech: "Java, Spring, H2"
    },
    {
      title: "Loteria",
      description: "Aplicativo web que consome APIs públicas para exibir os resultados mais recentes das principais loterias brasileiras, como Mega-Sena, Lotofácil e Quina. O sistema apresenta informações como números sorteados, data do concurso e premiações, além de oferecer uma interface simples e responsiva para facilitar a consulta rápida pelos usuários.",
      url: "https://github.com/iagocpv/LabDevWeb",
      tech: "React, Typescript"
    }
  ];

  return (
    <motion.div className="p-3 max-w-6xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className={`text-3xl font-semibold mb-10 mt-5 text-center ${
            isDark ? "text-white" : "text-gray-900"
          }`}>Projetos API</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {apiProjects.map((project, idx) => (
          <Card key={idx} className="shadow-lg min-h-72 bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-center">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                {project.contribution && <p className="mb-4"><b>Contribuições:</b> {project.contribution}</p>}
                {project.tech && <p className="mb-4"><b>Tecnologias:</b> {project.tech}</p>}
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-center">
                <Button size="lg">Ver no GitHub</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className={`text-3xl font-semibold mb-10 mt-5 text-center ${
        isDark ? "text-white" : "text-gray-900"
      }`}>
        Outros Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {otherProjects.map((project, idx) => (
          <Card key={idx} className="shadow-lg min-h-72 bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-center">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                {project.contribution && <p className="mb-4"><b>Contribuições:</b> {project.contribution}</p>}
                {project.tech && <p className="mb-4"><b>Tecnologias:</b> {project.tech}</p>}
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-center">
                <Button size="lg">Ver no GitHub</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}