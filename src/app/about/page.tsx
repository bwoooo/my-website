'use client';
import PageWrapper from "@/components/PageWrapper";
import { Metadata } from 'next';

// Note: If this is a page.tsx file, you can export metadata like this:
// export const metadata: Metadata = {
//   title: 'About Brandon - IT Technician & Creative Problem Solver',
//   description: 'Meet Brandon, an aspiring IT technician and tech hobbyist who builds innovative tools for tabletop gaming and solves real-world problems with creative solutions.',
//   keywords: 'IT technician, technical support, problem solving, system troubleshooting, web development, gaming tools',
// };

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Brandon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              IT Technician & Creative Problem Solver
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm Brandon Woolley, an experienced IT support specialist with 10+ years across enterprise and small business environments. 
              Based in Everett, WA, I specialize in cloud platforms, remote troubleshooting, and building innovative tools 
              for tabletop gaming communities while solving complex technical challenges.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Technical Journey */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">My Technical Journey</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over a decade of experience in technical support and systems administration, my journey spans enterprise 
                environments like Salesforce/Tableau and Rackspace, to nonprofit organizations and small businesses. 
                Currently pursuing CompTIA A+ certification while serving as an IT Administrator, I focus on delivering 
                reliable solutions and exceptional support across diverse technical environments.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Enterprise Cloud Support</h3>
                  <p className="text-gray-400">
                    Advanced support for AWS, OpenStack, and enterprise deployments including SAML/SSPI integrations.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Network & Infrastructure</h3>
                  <p className="text-gray-400">
                    Network cabling, structured wiring, DNS management, and security system installations.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Multi-Platform Administration</h3>
                  <p className="text-gray-400">
                    Windows/Linux support, Microsoft 365, Google Workspace, and virtualized environments.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">User Support & Training</h3>
                  <p className="text-gray-400">
                    Supporting diverse users from enterprise clients to educational environments with patience and clarity.
                  </p>
                </div>
              </div>
            </div>

            {/* What Drives Me */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">What Drives Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe the best technical solutions come from understanding both the system and the people who use it. 
                From supporting kindergarten students in STEM programs to helping enterprise clients with complex cloud deployments, 
                I've learned that effective IT support requires both technical expertise and genuine empathy. My approach combines:
              </p>
              
              <div className="space-y-4 mt-8">
                {[
                  {
                    title: "Adaptive Communication",
                    description: "From enterprise environments to community centers, tailoring support to each user's technical level"
                  },
                  {
                    title: "Scalable Solutions", 
                    description: "Designing fault-tolerant architectures that optimize performance while reducing costs"
                  },
                  {
                    title: "Continuous Learning",
                    description: "Currently pursuing CompTIA A+ and staying current with cloud platforms and emerging technologies"
                  },
                  {
                    title: "Mentorship & Knowledge Sharing",
                    description: "Training new engineers and developing onboarding guides to strengthen team capabilities"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gaming Projects */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">Gaming & Development Projects</h2>
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-lg border border-purple-500/30">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Beyond traditional IT work, I develop specialized tools for tabletop gaming communities. 
                  These projects combine my technical skills with my passion for gaming, resulting in applications 
                  that enhance gameplay experiences and streamline game management for players and dungeon masters alike.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">Skills & Expertise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    category: "Cloud Platforms",
                    skills: ["AWS", "Rackspace OpenStack", "Red Hat"]
                  },
                  {
                    category: "Operating Systems", 
                    skills: ["Windows Support", "Linux Administration", "Command Line/Bash"]
                  },
                  {
                    category: "Enterprise Tools",
                    skills: ["Microsoft 365", "Google Workspace", "Tableau Server"]
                  },
                  {
                    category: "Network & Security",
                    skills: ["DNS Management", "VPN/Remote Desktop", "Security Systems"]
                  },
                  {
                    category: "Hardware Support",
                    skills: ["Printers", "Projectors", "Network Cabling"]
                  },
                  {
                    category: "Integration & APIs",
                    skills: ["SAML/SSPI", "API Integration", "Virtualization (Xen)"]
                  },
                  {
                    category: "Support Systems",
                    skills: ["JIRA", "Zendesk", "Remote Troubleshooting"]
                  },
                  {
                    category: "Certifications",
                    skills: ["CompTIA A+ (In Progress)", "10+ Years Experience", "Enterprise Training"]
                  }
                ].map((skillGroup, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-lg font-semibold text-purple-400 mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6 py-16">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">Let's Connect</h2>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/30 max-w-3xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in discussing technology challenges, sharing solutions, or exploring new opportunities. 
                  Whether you need enterprise-level support, have questions about cloud migrations, or want to collaborate on 
                  innovative projects, I'd welcome the conversation.
                </p>
                <div className="space-y-4">
                  <p className="text-xl font-semibold text-white">
                    Ready to solve complex technical challenges together?
                  </p>
                  <p className="text-blue-400 font-medium">Let's build reliable, scalable solutions.</p>
                  <div className="pt-4 space-y-2 text-sm text-gray-400">
                    <p>📧 brandonwoolley85@gmail.com</p>
                    <p>📱 (425) 590-7066</p>
                    <p>📍 Everett, WA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-500 italic">
                  Currently serving as IT Administrator at Mind-Heart Therapy while pursuing CompTIA A+ certification. 
                  Open to remote or hybrid IT opportunities that leverage my decade of enterprise and small business experience.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </PageWrapper>
  );
}