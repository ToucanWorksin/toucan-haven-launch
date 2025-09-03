const Innovation = () => {
  const features = [
    {
      icon: "🔧",
      title: "No-Tools Assembly",
      description: "Revolutionary slot-and-click design means no screws, no glue, no stress. Kids can even help assemble their own furniture!"
    },
    {
      icon: "📦",
      title: "Flat-Pack Design",
      description: "Smart engineering allows complex furniture to pack flat for easy shipping and storage, then transform into sturdy pieces."
    },
    {
      icon: "🛡️",
      title: "Safe for Children",
      description: "Child-safe materials and rounded edges ensure your little ones can play and help assemble without any safety concerns."
    },
    {
      icon: "🔗",
      title: "Slottable System",
      description: "Ingenious slotting mechanism creates incredibly strong connections that can be assembled and reassembled countless times."
    },
    {
      icon: "🧠",
      title: "Educational Assembly",
      description: "Building furniture becomes a learning experience, developing problem-solving skills and spatial awareness."
    },
    {
      icon: "🌟",
      title: "Made in India",
      description: "Proudly manufactured in Coimbatore with precision engineering, supporting local innovation and craftsmanship."
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
            We're revolutionizing furniture assembly - making it fun, fast, and frustration-free
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
              Revolutionary flat-pack furniture that grows with your child. No tools, no fuss - 
              just innovative design that makes assembly part of the fun.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-muted rounded-full">🔧 Tool-Free Assembly</span>
              <span className="px-4 py-2 bg-muted rounded-full">📦 Flat-Pack Design</span>
              <span className="px-4 py-2 bg-muted rounded-full">🔗 Slottable System</span>
              <span className="px-4 py-2 bg-muted rounded-full">📏 Grows with Kids</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;