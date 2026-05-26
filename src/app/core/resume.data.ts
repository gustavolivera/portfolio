export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  period: string;
  progression?: string;
  description: string[];
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  profileImage: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: string[];
  projects: ProjectEntry[];
  skills: {
    backend: string[];
    frontend: string[];
    databasesAndCloud: string[];
    tools: string[];
    languages: string[];
  };
}

export const RESUME_DATA: ProfileData = {
  name: 'Gustavo Oliveira',
  title: 'Desenvolvedor Full Stack Pleno',
  email: 'social.gustavosilva@gmail.com',
  phone: '(17) 99656-4988',
  linkedin: 'https://linkedin.com/in/gustavolivera',
  github: 'https://github.com/gustavolivera',
  profileImage: 'profile-gustavo-oliveira.jpg',
  summary: 'Desenvolvedor Full Stack com atuação em sistemas web corporativos, combinando .NET, Angular e bancos relacionais e NoSQL para entregar soluções estáveis, legíveis e orientadas a negócio. Tenho experiência com evolução de sistemas jurídicos, refatoração de código legado, análise de requisitos e colaboração próxima com times técnicos.',
  experience: [
    {
      company: 'INTEGRATIVA - GESTÃO E TECNOLOGIA',
      location: 'Catanduva - SP',
      role: 'Analista Desenvolvedor Pleno',
      period: 'Out/2024 - Atual',
      progression: 'Promoções internas: Desenvolvedor Web → Analista Desenvolvedor Júnior → Analista Desenvolvedor Pleno',
      description: [
        'Atuação no Desenvolvimento Full Stack para evolução de sistemas jurídicos corporativos de alta complexidade, utilizando .NET (C#), Angular, PostgreSQL e MongoDB.',
        'Execução de Engenharia de Requisitos abrangendo o levantamento, análise técnica e detalhamento de especificações para novas funcionalidades do ecossistema.',
        'Foco em Qualidade e Mentoria por meio da refatoração de sistemas legados, revisão rigorosa de Pull Requests e suporte técnico orientado a padrões de arquitetura e otimização de desempenho.'
      ]
    }
  ],
  education: [
    {
      institution: 'Faculdade de Tecnologia de Catanduva',
      location: 'Catanduva - SP',
      degree: 'Gestão de Tecnologia da Informação',
      period: '2023 - 2025',
      achievements: [
        'Autor do artigo científico "Modernização de uma Aplicação Legada: Um Estudo de Caso com Contêineres", com foco em escalabilidade de CI/CD usando Docker.',
        'Participação em projeto acadêmico internacional com colaboração entre estudantes brasileiros e estadunidenses.',
        'Contribuição na manutenção e melhoria de um sistema web de gestão de simpósio com NestJS, React, PostgreSQL e Docker.'
      ]
    }
  ],
  certifications: [
    'TOEIC Listening and Reading - Inglês Avançado C1 (Listening 495 / Reading 465)'
  ],
  projects: [
    {
      name: 'Sistema de Gestão Contábil',
      description: 'Um sistema web full-stack robusto para o gerenciamento de documentos financeiros e fiscais, voltado para escritórios de contabilidade.',
      technologies: ['NestJS', 'React', 'Vite', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/gustavolivera/accounting-doc-system',
      images: [
        {
          src: '/projects/accounting-dashboard.png',
          alt: 'Dashboard administrativo do Sistema de Gestão Contábil'
        },
        {
          src: '/projects/accounting-monthly-control.png',
          alt: 'Tela de recebimento de documentos mensais'
        },
        {
          src: '/projects/accounting-obligation-form.png',
          alt: 'Tela de edição de obrigação fiscal'
        }
      ]
    }
  ],
  skills: {
    backend: ['C#', '.NET', 'NestJS'],
    frontend: ['TypeScript', 'Angular', 'React'],
    databasesAndCloud: ['PostgreSQL', 'MongoDB', 'Microsoft Azure'],
    tools: ['Docker', 'Git'],
    languages: ['Inglês Avançado - C1']
  }
};
