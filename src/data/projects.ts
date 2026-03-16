export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  architecture: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  color: string;
  gridSpan: "normal" | "wide" | "tall" | "featured";
  deployBadges: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  department: string;
  period: string;
  metrics: { value: string; label: string }[];
  highlights: string[];
  color: string;
}

export interface TechCategory {
  category: string;
  items: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "catalogo-digital",
    title: "Catálogo Digital",
    subtitle: "API REST Fullstack para Lojas Físicas",
    description:
      "API REST multi-loja com controle de estoque por filial, categorias, upload de imagens e importação de planilhas (CSV/XLSX/XLS). Rate limiting a 100 req/min por IP/usuário. Deploy em 3 plataformas.",
    techStack: [
      "C#",
      ".NET 10",
      "EF Core",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Vite",
      "Docker",
      "Nginx",
    ],
    architecture: [
      "DTOs + Options Pattern",
      "Versionamento de API",
      "Multi-stage Dockerfile",
      "Usuário não-root em container",
      "Docker Compose (3 serviços)",
    ],
    highlights: [
      "JWT com refresh token + BCrypt + autorização por roles",
      "Middleware global de exceções + request logging",
      "Health checks (/health, /ready, /live) + auto-migrations",
      "Frontend servido por Nginx em container Docker",
      "Testes unitários com xUnit e EF Core InMemory",
    ],
    githubUrl: "https://github.com/RafaelVn1808/CatalagoApi",
    color: "neu-green",
    gridSpan: "featured",
    deployBadges: ["Vercel", "Render", "Supabase"],
  },
  {
    id: "gestao-despesas",
    title: "Gestão de Despesas",
    subtitle: "API REST com Autenticação Completa",
    description:
      "Autenticação completa com JWT + refresh token, ASP.NET Identity e controle de acesso por roles. Arquitetura em camadas com EF Core, AutoMapper e Swagger. Ambiente dockerizado.",
    techStack: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "Identity",
      "Docker",
      "AutoMapper",
      "Swagger",
    ],
    architecture: [
      "Arquitetura em camadas",
      "ASP.NET Identity + JWT",
      "AutoMapper para DTOs",
      "Ambiente dockerizado (API + Web + DB)",
    ],
    highlights: [
      "JWT com refresh token + controle de acesso por roles",
      "Testes automatizados com xUnit e Moq",
      "Deploy completo na Microsoft Azure (plano gratuito)",
      "Configuração de ambientes e gerenciamento de recursos",
    ],
    githubUrl: "https://github.com/RafaelVn1808/ExpenseManagement",
    color: "neu-blue",
    gridSpan: "wide",
    deployBadges: ["Azure", "Oracle Cloud", "Multi-Cloud"],
  },
];

export const experiences: Experience[] = [
  {
    id: "dev-junior",
    role: "Desenvolvedor Júnior",
    company: "Polícia Científica do Pará",
    department: "Gerência de Informática",
    period: "06/2025 – Atual",
    metrics: [
      { value: "-40%", label: "tempo de geração de relatórios" },
      { value: "20+", label: "relatórios SQL otimizados" },
    ],
    highlights: [
      "Manutenção e evolução de sistemas internos em C#/.NET",
      "Otimização de consultas SQL Server para relatórios institucionais",
      "Análise de falhas via logs e correções no backend",
      "Atualização do site institucional (HTML, CSS, JS)",
    ],
    color: "neu-yellow",
  },
  {
    id: "assistente-admin",
    role: "Assistente Administrativo",
    company: "Polícia Científica do Pará",
    department: "Recursos Humanos",
    period: "01/2023 – 06/2025",
    metrics: [],
    highlights: [
      "Sistema em Java para automação de declarações e documentos",
      "Processos completos de admissão: e-Social + folha de pagamento",
      "Gestão de folha de pagamento com conformidade normativa",
    ],
    color: "neu-orange",
  },
  {
    id: "estagiario",
    role: "Estagiário",
    company: "Polícia Científica do Pará",
    department: "Recursos Humanos",
    period: "01/2021 – 01/2023",
    metrics: [],
    highlights: [
      "Rotinas de admissão, contratos e folha de pagamento",
      "Produção de ofícios, portarias e relatórios administrativos",
    ],
    color: "neu-purple",
  },
];

export const techCategories: TechCategory[] = [
  {
    category: "Backend",
    items: ["C#", "ASP.NET Core", "Web API", "Entity Framework Core"],
    color: "neu-blue",
  },
  {
    category: "Banco de Dados",
    items: ["SQL Server", "PostgreSQL", "Supabase"],
    color: "neu-green",
  },
  {
    category: "Infraestrutura",
    items: ["Docker", "Docker Compose", "Nginx", "Azure", "Vercel", "Render"],
    color: "neu-orange",
  },
  {
    category: "Segurança",
    items: ["JWT", "ASP.NET Identity", "BCrypt"],
    color: "neu-red",
  },
  {
    category: "Frontend",
    items: ["TypeScript", "React", "HTML", "CSS", "JavaScript"],
    color: "neu-pink",
  },
  {
    category: "Testes & Qualidade",
    items: ["xUnit", "Moq", "SOLID", "Clean Code", "Design Patterns", "DDD"],
    color: "neu-purple",
  },
];

export const personalInfo = {
  name: "Rafael Almeida",
  title: "Backend Developer",
  tagline:
    "Sistemas que funcionam em produção. APIs otimizadas, consultas 40% mais rápidas, deploy multi-cloud.",
  email: "rafaelalmeida1808@gmail.com",
  phone: "(+55) 91 989892338",
  linkedin: "https://www.linkedin.com/in/rafael-almeida-ba4a92314",
  github: "https://github.com/RafaelVn1808",
  education: [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "FACI WYDEN",
      period: "2025 – 2026",
    },
  ],
};
