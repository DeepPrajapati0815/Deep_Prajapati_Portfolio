import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Cloud, 
  Code,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Socket.IO", level: 90 },
      { name: "RabbitMQ", level: 85 },
      { name: "Kafka", level: 80 },
      { name: "REST APIs & Swagger", level: 92 },
    ]
  },
  {
    title: "Frontend",
    icon: Code,
    color: "accent",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5, CSS3, Tailwind", level: 88 },
      { name: "MUI", level: 85 },
      { name: "Redux & State Management", level: 85 },
      { name: "UI Library", level: 85 },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "orange",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 85 },
      { name: "Sequelize (ORM)", level: 85 },
      { name: "Knex.js (ORM)", level: 82 },
      { name: "Mongoose (ODM)", level: 85 },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "primary",
    skills: [
      { name: "AWS (EC2, Lambda, S3, SES, SNS, SQS)", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Git & CI/CD", level: 92 },
    ]
  },
  {
    title: "AI & Tools",
    icon: Sparkles,
    color: "accent",
    skills: [
      { name: "Cursor", level: 90 },
      { name: "Windsurf", level: 85 },
      { name: "ChatGPT", level: 88 },
      { name: "Claude", level: 90 },
      { name: "GitHub Copilot", level: 85 },
      { name: "Prompt Engineering", level: 85 },
      { name: "VS Code, Postman", level: 95 },
    ]
  },
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
            Tech and practices I use day to day
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
          <h3 className="text-2xl font-bold text-foreground mb-8">What I work with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Node.js · NestJS · Express.js",
              "React.js · Tailwind · MUI · Redux",
              "PostgreSQL, MySQL, MongoDB, Redis",
              "Socket.IO · RabbitMQ · Kafka",
              "AWS (EC2, Lambda, S3, SES, SNS, SQS)",
              "Docker · Kubernetes · CI/CD",
              "Sequelize · Knex · Mongoose",
              "REST APIs · Swagger",
              "Cursor · ChatGPT · Claude · Copilot",
              "Prompt Engineering"
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