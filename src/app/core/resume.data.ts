export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: {
    languagesAndFrameworks: string[];
    databasesAndCloud: string[];
    tools: string[];
    languages: string[];
  };
}

export const RESUME_DATA: ProfileData = {
  name: 'GUSTAVO OLIVEIRA',
  title: 'Desenvolvedor Full Stack',
  email: 'social.gustavosilva@gmail.com',
  phone: '(17) 99656-4988',
  linkedin: 'https://linkedin.com/in/gustavolivera',
  github: 'https://github.com/gustavolivera',
  summary: 'Desenvolvedor Full Stack especializado no ecossistema .NET e Angular. Focado em escalabilidade, arquitetura limpa e design voltado para a melhor experiência do usuário.',
  experience: [
    {
      company: 'INTEGRATIVA - GESTÃO E TECNOLOGIA',
      location: 'Catanduva - SP',
      role: 'Analista Desenvolvedor Júnior',
      period: 'MAI/2025 - Presente',
      description: [
        'Atuei no desenvolvimento e evolução de um sistema web jurídico corporativo utilizando .NET, Angular, PostgreSQL e MongoDB.',
        'Participei do levantamento, análise e detalhamento de requisitos para implementação de novas funcionalidades.',
        'Realizei refatoração de código legado e melhorias estruturais visando maior manutenibilidade, organização e desempenho.',
        'Prestei suporte técnico interno ao time de desenvolvimento e demais equipes da área de tecnologia.',
      ]
    },
    {
      company: 'INTEGRATIVA - GESTÃO E TECNOLOGIA',
      location: 'Catanduva - SP',
      role: 'Desenvolvedor Web',
      period: 'OUT/2024 - MAI/2025',
      description: [
        'Atuei no desenvolvimento e manutenção de um sistema web corporativo utilizando C#, .NET e Angular.',
        'Realizei ajustes em interfaces front-end e em regras de negócio no back-end.',
        'Apoiei a manutenção e consulta de dados em bancos PostgreSQL e MongoDB.',
        'Participei da identificação e resolução de bugs, testes funcionais e validação de requisitos.'
      ]
    }
  ],
  education: [
    {
      institution: 'FACULDADE DE TECNOLOGIA DE CATANDUVA',
      location: 'Catanduva - SP',
      degree: 'Gestão de Tecnologia da Informação',
      period: '2023 - 2025',
      achievements: [
        'Autor do artigo científico "Modernização de uma Aplicação Legada: Um Estudo de Caso com Contêineres" sobre escalabilidade na CI/CD com Docker.',
        'Colaborei em projeto acadêmico internacional com interação entre estudantes brasileiros e estadunidenses.',
        'Contribuí para a manutenção e melhoria de um sistema web (NestJS, React, PostgreSQL e Docker) de gestão de simpósio da FATEC Catanduva.'
      ]
    }
  ],
  skills: {
    languagesAndFrameworks: ['C#', '.NET', 'TypeScript', 'Angular', 'React', 'NestJS'],
    databasesAndCloud: ['PostgreSQL', 'MongoDB', 'Microsoft Azure'],
    tools: ['Docker', 'Git'],
    languages: ['Inglês Avançado (C1 - TOEIC L/R 495/465)']
  }
};
