const Innovation = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Every product undergoes rigorous testing with child-safe, non-toxic materials that exceed international safety standards."
    },
    {
      icon: "🌱",
      title: "Sustainable Materials",
      description: "Revolutionary bio-based composites and recycled materials that are both durable and environmentally responsible."
    },
    {
      icon: "🎨",
      title: "Inclusive Design",
      description: "Thoughtfully designed for children of all abilities, ensuring every child can play, learn, and grow together."
    },
    {
      icon: "🚀",
      title: "Innovation Lab",
      description: "Our R&D team continuously explores new materials and manufacturing techniques to push the boundaries of what's possible."
    },
    {
      icon: "🧠",
      title: "Developmental Focus",
      description: "Each product is designed with child development experts to enhance cognitive, physical, and emotional growth."
    },
    {
      icon: "🌟",
      title: "Made in India",
      description: "Proudly manufactured in Coimbatore with local craftsmanship, supporting communities while maintaining quality."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Makes Us
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Revolutionary
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just making furniture and toys—we're reimagining what childhood can be
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft border hover:shadow-card transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-3xl shadow-soft border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Coming Soon from Coimbatore, India
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're putting the finishing touches on our revolutionary product line. 
              Join our community to be the first to experience the future of kids' furniture and toys.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-muted rounded-full">🏭 Advanced Manufacturing</span>
              <span className="px-4 py-2 bg-muted rounded-full">🧪 Material Innovation</span>
              <span className="px-4 py-2 bg-muted rounded-full">👶 Child Development</span>
              <span className="px-4 py-2 bg-muted rounded-full">🌍 Global Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;