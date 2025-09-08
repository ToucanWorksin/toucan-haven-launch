const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming childhood experiences through innovative, safe, and inclusive design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-gradient-card p-8 rounded-3xl text-white shadow-card transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              To create flat-pack, slottable furniture and toys for children, making assembly 
              fun and tool-free. We believe every family deserves furniture that's easy to build, 
              safe to use, and designed with kids in mind.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card p-8 rounded-3xl shadow-soft border transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize how families experience furniture assembly by making it intuitive, 
              engaging, and completely tool-free. We envision a world where children can actively 
              participate in creating their own spaces, learning through hands-on building experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;