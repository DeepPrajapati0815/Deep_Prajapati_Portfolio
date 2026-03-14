import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const workExperience = [
  {
    title: "Software Engineer",
    company: "Openxcell Technolabs Pvt Ltd",
    period: "January 2025 – Present",
    type: "Full-stack & Real-time",
    description: "Built Livesecure security guard management system with patrol tracking, guard allocation, schedule management, and real-time analytics using Socket.IO. Built Pepli, a unified social media platform with feeds, messaging, media uploads, and professional networking. Built MMTA, an event & conference management system with session scheduling, attendee registration, speaker management, and notifications.",
    icon: Briefcase,
  },
  {
    title: "Sr. Software Engineer",
    company: "Fancall Pvt Ltd",
    period: "February 2024 – January 2025",
    type: "Backend & Scale",
    description: "Built Fancall creator–fan communication platform scaled to 100,000+ users with real-time video, audio, and chat; brand–creator collaboration module; campaign management; views/clicks analytics; and creator earning engine. Resolved systematic call drops by 50% and improved system responsiveness. Refactored data layer with repository pattern, achieving 75% improvement in DB query performance under peak load.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Pragetx Technologies LLP",
    period: "July 2023 – February 2024",
    type: "Full-stack & Real-time",
    description: "Built Clickasa, an on-demand home service platform with provider matching, geo-location, booking, and real-time job tracking. Built an astrology platform similar to Astrotalk with live consultations, video chat, and e-commerce astro store.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Lucent Innovation",
    period: "June 2022 – June 2023",
    type: "Full-stack & Blockchain",
    description: "Built React.js frontend and Node.js backend for NFT marketplace with minting, listing, bidding, and trading. UI integrated with backend APIs and blockchain smart contracts.",
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
            Software Engineer with 3.8 years building systems that scale—social platforms, ecommerce, security, and events.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I've been building production systems for 3.8 years in Node.js, NestJS, and React—across social platforms, ecommerce, security, and events. I've scaled infrastructure to 1 lakh+ users, cut call failures by 50%, and improved DB performance by 75%. I own products end-to-end: architecture, APIs, and delivery.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                I've worked with clients in USA, UK, Nigeria, and Canada. My work spans real-time systems (Socket.IO), guard management, event platforms, creator–fan apps, and NFT marketplaces. When something breaks in prod, I'm the one digging in and fixing it.
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
                  <p className="text-primary font-medium">MSCIT — Grades: 9.36/10</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-foreground-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Silver Oak University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Passing Year: 2024
                    </div>
                  </div>
                  <p className="text-primary font-medium mt-2">Higher Education, 74% — H.H. Patel High School</p>
                  <div className="flex items-center gap-1 mt-1 text-sm text-foreground-muted">
                    <Calendar className="h-4 w-4" />
                    Passing Year: 2020
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