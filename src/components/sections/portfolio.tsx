import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Globe,
  ArrowRight,
  Phone,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "Security Management System",
    description:
      "Backend for a security product at OpenXcell. Patrol tracking, guard allocation, and a real-time dashboard so ops can see what's happening live. Node.js and Socket.IO. I own the design and the code; we've scaled it as the product grew.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Patrol and guard allocation logic",
      "Live dashboard APIs",
      "Built to scale with traffic",
      "I own the backend end-to-end",
    ],
    type: "Backend / Real-time",
    status: "Live",
    icon: Shield,
    links: {
      github: "",
      live: "#",
    },
  },
  {
    title: "eCommerce Shipping & Fulfillment",
    description:
      "Shipping and fulfillment backend: which courier gets which order, pipeline logic, and making sure enterprise clients' workflows don't break. Integrated with the security product. Lots of rules and edge cases; I made it maintainable.",
    image: "",
    technologies: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    features: [
      "Auto courier allocation",
      "Fulfillment pipeline",
      "Handles high order volume",
      "Aligned with client timelines",
    ],
    type: "Backend / Enterprise",
    status: "Live",
    icon: Globe,
    links: {
      github: "",
      live: "#",
    },
  },
  {
    title: "Fancall – Creator–Fan Platform",
    description:
      "Backend for a platform where creators and fans do video calls. I led the backend; we cut call drops by 50% and made the system much more responsive. Refactored the data layer and got ~60% faster DB queries. Built the Brand Module so brands could run campaigns and see earnings in real time.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    features: [
      "Real-time voice and video",
      "Brand campaigns and earnings",
      "50% fewer call drops, 40% better responsiveness",
      "60% faster queries after refactor",
    ],
    type: "Real-time App",
    status: "Live",
    icon: Phone,
    links: {
      live: "https://www.fancall.in/",
    },
  },
  {
    title: "Real-Time Voice, Video & Radio (PagetX)",
    description:
      "Voice, video, and text chat in Node.js and Socket.IO. We also had live radio—I hooked up third-party APIs and built the streaming pipeline. Added role-based access so only the right people could do sensitive actions.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "Redis", "WebSockets"],
    features: [
      "Voice, video, text",
      "Live radio streaming",
      "Third-party API integration",
      "Role-based access control",
    ],
    type: "Real-time App",
    status: "Completed",
    icon: Phone,
    links: {
      github: "",
      live: "#",
    },
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Portfolio
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Stuff I've built and shipped
          </p>
        </div>

        {/* Project cards — clean grid */}
        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-6 sm:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Top row: icon, title, badges */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        {project.type}
                      </Badge>
                      <Badge className="bg-primary/90 text-primary-foreground text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                {(project.links.live && project.links.live !== "#") ||
                (project.links.github && project.links.github !== "#") ? (
                  <div className="flex gap-2 shrink-0 sm:ml-4">
                    {project.links.github && project.links.github !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.live && project.links.live !== "#" && (
                      <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                ) : null}
              </div>

              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="grid sm:grid-cols-2 gap-1.5 text-sm text-foreground-muted">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-primary">·</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="p-6 sm:p-8 max-w-xl mx-auto inline-block">
            <p className="text-foreground-muted mb-4">
              Rest of my work is on GitHub—repos and side projects.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://github.com/DeepPrajapati0815?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                Visit GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
