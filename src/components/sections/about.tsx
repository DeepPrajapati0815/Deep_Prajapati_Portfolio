import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const workExperience = [
  {
    title: "Software Engineer – Backend",
    company: "OpenXcell Technologies",
    period: "January 2025 – Present",
    type: "Backend & Architecture",
    description: "Architecting modular backend systems for Security Management, owning end-to-end design of high-throughput patrol tracking and guard allocation engines. Shipping real-time dashboard APIs using Node.js and Socket.IO for 10x scalability. Leading integration of complex eCommerce shipping workflows including automated courier allocation and fulfillment pipelines. Delegating sprint priorities and managing client communication to align with aggressive product roadmap timelines.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Fancall Pvt Ltd",
    period: "February 2024 – January 2025",
    type: "Backend & Team Lead",
    description: "Led cross-functional team in architecting creator-fan communication modules. Owned root-cause analysis and bug resolution—reducing call drop rates by 50% and improving system responsiveness by 40%. Implemented repository pattern refactoring for 60% improvement in database query performance. Architected Brand Module for real-time earnings calculation and campaign management interface.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "PagetX Technologies LLP",
    period: "July 2023 – February 2024",
    type: "Real-time Systems",
    description: "Architected low-latency voice, video, and text communication systems using Node.js and Socket.IO. Shipped live radio streaming architecture with complex third-party API integration and stream orchestration. Led security hardening with role-based authorization protocols.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Luncet Innovation Pvt Ltd",
    period: "June 2022 – June 2023",
    type: "Backend & Blockchain",
    description: "Architected decentralized NFT marketplace components using blockchain smart contracts for secure, high-concurrency transactions. Shipped custom checkout extensions and optimized conversion rate workflows through iterative backend enhancements.",
    icon: Briefcase,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Software Engineer (Backend) with 3+ years building scalable systems and leading technical delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I'm a Software Engineer with over 3 years of experience architecting and 
                shipping scalable backend solutions. I specialize in Node.js and scalable 
                systems, with a proven track record of owning engineering standards to support 
                high-growth environments.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I'm passionate about delegating technical ownership and leading teams to meet 
                aggressive product roadmaps for 10x scalability. My work spans real-time systems, 
                security management, eCommerce fulfillment, and creator-fan platforms—backed by 
                strong database optimization and cloud infrastructure.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 bg-card border-card-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Education</h4>
                  <p className="text-primary font-medium">MSc in Information Technology, GPA: 9.36 / 10</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-foreground-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Silver Oak University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      January 2020 – January 2024
                    </div>
                  </div>
                  <p className="text-primary font-medium mt-2">HSC, 74% — H.H. Patel High School</p>
                  <div className="flex items-center gap-1 mt-1 text-sm text-foreground-muted">
                    <Calendar className="h-4 w-4" />
                    January 2019 – January 2020
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Continuous Learning", value: "Always Improving" },
                { label: "Knowledge Sharing", value: "Community First" },
                { label: "Code Quality", value: "Best Practices" },
                { label: "Problem Solving", value: "Analytical Thinking" },
              ].map((item, index) => (
                <Card key={index} className="p-4 text-center bg-card border-card-border hover-lift">
                  <p className="text-sm text-foreground-muted">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div className="space-y-6 animate-slideInRight">
            <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="p-6 bg-card border-card-border hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                      <job.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-3 text-sm text-foreground-muted">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                      <p className="text-foreground-muted leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}