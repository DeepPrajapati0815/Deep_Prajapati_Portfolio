import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Zap, 
  Network, 
  Cloud, 
  Code,
  Layers,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Architecture",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Architecture Design", level: 88 },
    ]
  },
  {
    title: "Databases & Scaling",
    icon: Database,
    color: "accent",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 85 },
      { name: "RabbitMQ", level: 80 },
      { name: "Sequelize & Prisma", level: 85 },
    ]
  },
  {
    title: "Real-Time & Communication",
    icon: Zap,
    color: "orange",
    skills: [
      { name: "Socket.IO", level: 90 },
      { name: "WebSockets", level: 88 },
      { name: "Real-time APIs", level: 90 },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "primary",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Git / GitHub", level: 95 },
    ]
  },
  {
    title: "System Design & Performance",
    icon: Layers,
    color: "accent",
    skills: [
      { name: "Scalability & High-Throughput Design", level: 88 },
      { name: "Database Optimization", level: 90 },
      { name: "API Design & Versioning", level: 92 },
      { name: "Secure Architecture", level: 85 },
    ]
  },
  {
    title: "Leadership & Strategy",
    icon: Network,
    color: "teal",
    skills: [
      { name: "Dev Lead & Technical Ownership", level: 85 },
      { name: "Sprint Planning", level: 88 },
      { name: "Product Roadmap Management", level: 82 },
    ]
  },
  {
    title: "Development Tools",
    icon: Code,
    color: "teal",
    skills: [
      { name: "REST API Design", level: 95 },
      { name: "Testing & Documentation", level: 80 },
      { name: "Code Quality & Best Practices", level: 88 },
    ]
  },
  {
    title: "AI & Coding Assistants",
    icon: Sparkles,
    color: "accent",
    skills: [
      { name: "Cursor", level: 90 },
      { name: "Windsurf", level: 85 },
      { name: "Antigravity", level: 82 },
      { name: "Claude (Anthropic)", level: 90 },
      { name: "ChatGPT / OpenAI", level: 88 },
      { name: "GitHub Copilot", level: 85 },
    ]
  }
];


const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{skill.name}</span>
      <span className="text-foreground-muted">{skill.level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Backend technologies, scalable systems, and leadership experience I use to ship scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-card-border hover-lift group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {category.skills.length} skills
                  </Badge>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Backend Architecture & Design",
              "Node.js & NestJS",
              "PostgreSQL, MySQL, MongoDB, Redis",
              "Real-time Systems (Socket.IO)",
              "AWS, Docker, Kubernetes",
              "RabbitMQ & Event-Driven Systems",
              "Technical Ownership & Dev Lead",
              "Sprint Planning & Product Roadmap",
              "High-Throughput API Design",
              "Security & Role-Based Authorization",
              "Cursor & AI-Assisted Development",
              "Claude, ChatGPT & LLM Tools",
              "Windsurf, Antigravity, Copilot"
            ].map((competency, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}