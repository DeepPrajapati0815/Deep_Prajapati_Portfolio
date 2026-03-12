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
      "Modular backend for security management at OpenXcell—high-throughput patrol tracking and guard allocation engines. Real-time dashboard APIs with Node.js and Socket.IO, built for 10x scalability and live activity monitoring.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Patrol tracking & guard allocation engines",
      "Real-time dashboard APIs",
      "10x scalability for live monitoring",
      "End-to-end backend ownership",
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
      "Complex eCommerce shipping workflows with automated courier allocation and logic-heavy fulfillment pipelines. Integrated with Security Management backend for enterprise clients.",
    image: "",
    technologies: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    features: [
      "Automated courier allocation",
      "Fulfillment pipeline orchestration",
      "High-throughput order processing",
      "Sprint & client delivery alignment",
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
      "Creator-fan communication platform. Led backend architecture; reduced call drop rates by 50% and improved system responsiveness by 40%. Repository pattern refactoring achieved 60% faster database query performance. Architected Brand Module for real-time earnings and campaign management.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    features: [
      "Real-time voice & video communication",
      "Brand Module & campaign management",
      "50% call drop reduction, 40% responsiveness gain",
      "60% DB performance improvement",
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
      "Low-latency voice, video, and text communication systems with Node.js and Socket.IO. Live radio streaming architecture with complex third-party API integration and stream orchestration. Role-based authorization and security hardening.",
    image: "",
    technologies: ["Node.js", "Socket.IO", "Redis", "WebSockets"],
    features: [
      "Voice, video & text communication",
      "Live radio streaming architecture",
      "Third-party API & stream orchestration",
      "Role-based authorization",
    ],
    type: "Real-time App",
    status: "Completed",
    icon: Phone,
    links: {
      github: "",
      live: "#",
    },
  },
  {
    title: "Decentralized NFT Marketplace",
    description:
      "NFT marketplace components at Luncet Innovation—blockchain smart contracts for secure, high-concurrency transactions. Custom checkout extensions and conversion-rate optimization through iterative backend enhancements.",
    image: "",
    technologies: ["Node.js", "Blockchain", "Smart Contracts", "PostgreSQL"],
    features: [
      "Smart contract–based transactions",
      "High-concurrency marketplace backend",
      "Custom checkout extensions",
      "Conversion rate optimization",
    ],
    type: "Backend / Blockchain",
    status: "Completed",
    icon: Shield,
    links: {
      github: "",
      live: "#",
    },
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Notable backend and real-time systems I've architected and shipped
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-card-border hover-lift"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-card rounded-lg overflow-hidden">
                    {/* Placeholder for project screenshot */}
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-foreground-muted" />
                    </div>
                  </div>

                  {/* Project Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground-muted">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      {/* Show "View Code" only if github link exists */}
                      {project.links.github && project.links.github !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}

                      {/* Show "Live Demo" only if live link exists */}
                      {project.links.live && project.links.live !== "#" && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-primary hover:shadow-button"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-card border-card-border inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Want to See More Projects?
              </h3>
              <p className="text-foreground-muted max-w-md">
                Check out my GitHub profile for more projects and open-source
                contributions.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-primary hover:shadow-button font-medium group"
              >
                <a
                  href="https://github.com/DeepPrajapati0815?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Visit GitHub
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
