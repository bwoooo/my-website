import PageWrapper from "../components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Where Technical Support Meets Creative Problem-Solving
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building enterprise solutions, fixing complex systems, crafting innovative tools.
            </p>

            {/* Professional Summary */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-200 mb-6">
                <span className="text-blue-400 font-semibold">Brandon Woolley</span> • 
                <span className="text-purple-400 font-semibold"> IT Administrator</span> • 
                <span className="text-cyan-400 font-semibold"> 10+ Years Experience</span>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Enterprise IT support specialist with expertise in cloud platforms, network infrastructure, 
                and multi-environment system administration. Currently managing IT operations while pursuing 
                CompTIA A+ certification.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/about" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Learn About My Experience
              </Link>
              <Link 
                href="/projects" 
                className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-400/10 hover:text-blue-400"
              >
                View My Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-gray-600 hover:border-purple-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-purple-400/10 hover:text-purple-400"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Key Expertise Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Core Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Enterprise Support */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced cloud platform management with AWS, OpenStack, and enterprise integrations including SAML/SSPI authentication systems.
                </p>
              </div>

              {/* System Administration */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">System Administration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Multi-platform expertise in Windows/Linux environments, Microsoft 365, Google Workspace, and network infrastructure management.
                </p>
              </div>

              {/* Problem Solving */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Creative Solutions</h3>
                <p className="text-gray-400 leading-relaxed">
                  Innovative approach to complex technical challenges, from enterprise architectures to custom gaming tools and automation systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Current Role</h3>
                  <p className="text-white font-semibold">IT Administrator - Mind-Heart Therapy</p>
                  <p className="text-gray-400">Managing Google Workspace, DNS, telehealth systems, and infrastructure</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Enterprise Experience</h3>
                  <p className="text-white font-semibold">Salesforce (Tableau) & Rackspace</p>
                  <p className="text-gray-400">4+ years supporting enterprise deployments and cloud architectures</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Diverse Environments</h3>
                  <p className="text-white font-semibold">Education, Security, Healthcare</p>
                  <p className="text-gray-400">Adaptable support across multiple industries and user types</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Collaborate?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you need enterprise-level IT support, cloud migration assistance, or innovative technical solutions, 
                  I bring a decade of experience and a problem-solving mindset to every challenge.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Available for remote/hybrid opportunities
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Currently pursuing CompTIA A+ certification
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    10+ years enterprise & small business experience
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}