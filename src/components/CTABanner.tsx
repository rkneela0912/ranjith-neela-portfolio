import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-blue-600" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float" />
      <div className="absolute bottom-10 right-20 w-32 h-32 border border-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-white/15 rotate-45 animate-float" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Available for New Projects</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block mt-2">Enterprise?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Microsoft Power Platform and AI solutions can accelerate 
            your digital transformation journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:iamranjithkneela@gmail.com?subject=Project Consultation Request"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['Fortune 500', 'Government', 'Enterprise', 'Startups'].map((item) => (
                <div key={item} className="px-6 py-2 bg-white/5 rounded-full border border-white/10">
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
