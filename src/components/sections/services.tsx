import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  Layers, 
  Zap, 
  Database, 
  Cloud,
  ArrowRight,
  Layout,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Backend systems that scale",
    description: "I build APIs and services in Node.js (Express, NestJS) that can handle real traffic. Message queues, caching, and clean structure so you can grow without rewriting everything.",
    features: [
      "APIs that stay fast under load",
      "Redis, RabbitMQ when you need async or queues",
      "Sensible scaling and load handling",
      "Monitoring so you know when something breaks"
    ],
    color: "blue"
  },
  {
    icon: Layout,
    title: "Full-stack web apps",
    description: "Backend plus a React front end when you need it. I focus on the API and data side; the UI is built to work with it and stay responsive.",
    features: [
      "React, Tailwind, modern UI patterns",
      "State and auth done right",
      "APIs that your front end can rely on"
    ],
    color: "green"
  },
  {
    icon: Zap,
    title: "Real-time features",
    description: "Chat, live updates, dashboards, or anything that needs instant data. I use WebSockets and Socket.IO so the server and client stay in sync.",
    features: [
      "Live messaging and notifications",
      "Dashboards that update without refresh",
      "Socket.IO and WebSockets wired correctly"
    ],
    color: "orange"
  },
  {
    icon: Database,
    title: "Databases that don't slow you down",
    description: "Schema design, indexing, and when to use SQL vs NoSQL. I've tuned PostgreSQL and MongoDB in production and fixed slow queries more times than I can count.",
    features: [
      "PostgreSQL, MySQL, MongoDB",
      "Indexes and queries that make sense",
      "Redis for caching where it helps",
      "Migrations and backups you can trust"
    ],
    color: "teal"
  },
  {
    icon: Cloud,
    title: "Deploy and run it",
    description: "AWS, Docker, and CI/CD so your app gets to production and stays there. I set up the pipeline and the basics so you can focus on building.",
    features: [
      "AWS: EC2, RDS, S3, load balancers",
      "Docker and containers",
      "CI/CD so deploys are one click",
      "Grafana/Prometheus when you want visibility"
    ],
    color: "purple"
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Services
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            What I can help you build
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-card-border hover-lift group h-full flex flex-col"
            >
              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground-muted">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToContact}
                className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-card-border inline-block">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Have a project in mind?
              </h3>
              <p className="text-foreground-muted">
                Tell me what you're building and we can figure out if I'm a good fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-primary hover:shadow-button font-medium"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.location.href =
                      "mailto:deepprajapati0815@gmail.com?subject=Project discussion&body=Hi Deep,%0D%0A%0D%0AI saw your portfolio. Would like to chat about a project.%0D%0A%0D%0AName: [Your name]%0D%0AAvailability: [When you're free]%0D%0AQuick summary: [What you need]%0D%0A%0D%0AThanks"
                  }
                >
                  Email to schedule a call
                </Button>

              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}