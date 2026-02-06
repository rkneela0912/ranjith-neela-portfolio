import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ranjith's expertise in Power Platform transformed our entire workflow. His solutions reduced our processing time by 60% and the AI automation he implemented has been game-changing for our team.",
    name: 'Sarah Mitchell',
    role: 'Director of Operations',
    company: 'TechCorp Industries',
    rating: 5,
  },
  {
    quote: "Working with Ranjith on our government portal modernization was exceptional. He delivered a complex Dataverse architecture that seamlessly integrated with our existing systems.",
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'State Government Agency',
    rating: 5,
  },
  {
    quote: "The Microsoft Copilot solution Ranjith developed exceeded all expectations. His deep understanding of AI and enterprise architecture made him an invaluable partner for our digital transformation.",
    name: 'Jennifer Adams',
    role: 'VP of Technology',
    company: 'Global Financial Services',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Trusted by enterprise clients and government organizations worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group glow-border rounded-2xl p-8 bg-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
