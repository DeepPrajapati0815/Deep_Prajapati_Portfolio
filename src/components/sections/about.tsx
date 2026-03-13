import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const workExperience = [
  {
    title: "Software Engineer – Backend",
    company: "OpenXcell Technologies",
    period: "January 2025 – Present",
    type: "Backend & Architecture",
    description: "I design and build the backend for a security management product—things like patrol tracking and guard allocation. We use Node.js and Socket.IO for real-time dashboards. I also work on eCommerce shipping: courier allocation, fulfillment pipelines, and making sure clients get what they need on time. I run sprints and talk to stakeholders so we ship without surprises.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Fancall Pvt Ltd",
    period: "February 2024 – January 2025",
    type: "Backend & Team Lead",
    description: "Backend for a platform where creators and fans do video calls. I led the team that fixed a lot of call drops—we got drop rate down by 50% and made the system feel much snappier. I refactored our data layer (repository pattern) and that alone made our DB queries about 60% faster. Also built the Brand Module so brands could run campaigns and see earnings in real time.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "PagetX Technologies LLP",
    period: "July 2023 – February 2024",
    type: "Real-time Systems",
    description: "Voice, video, and text chat—all in Node.js and Socket.IO. I worked on keeping latency low and the streams stable. We also had live radio; I integrated third-party APIs and made the streaming pipeline reliable. I added role-based access so only the right people could do certain actions.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Luncet Innovation Pvt Ltd",
    period: "June 2022 – June 2023",
    type: "Backend",
    description: "Backend for a product that used blockchain and smart contracts. I built the APIs that talked to the chain and made sure we could handle a lot of concurrent requests. Also did checkout and conversion flow improvements on the backend.",
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
            Backend engineer, ~4 years in. I build systems that stay up when it matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I've been writing backend code for about 4 years, mostly in Node.js. Started at a smaller product company, then moved to places where the systems had to scale—real-time calling, live dashboards, shipping and fulfillment logic. I care about clean design and making sure the database and APIs don't become the bottleneck.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                These days I do a mix of hands-on coding and helping decide what we build next. I've worked on security management backends, eCommerce workflows, and creator–fan platforms. When something breaks in prod, I'm usually the one digging in and fixing it.
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
                { label: "Learning", value: "I keep up with new tools" },
                { label: "Sharing", value: "I explain things clearly" },
                { label: "Code", value: "Readable and maintainable" },
                { label: "Debugging", value: "I find the root cause" },
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