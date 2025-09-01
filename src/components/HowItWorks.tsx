import { Card, CardContent } from "@/components/ui/card";
import kidsAssembly from "@/assets/kids-assembly.jpg";
import slotSystem from "@/assets/slot-system.jpg";
import flatPackBox from "@/assets/flat-pack-box.jpg";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Our Slotting System Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionary flat-pack furniture that assembles in minutes with our innovative slot-and-tab system. 
            No screws, no glue, no complicated tools - just smart design that kids can help build.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <Card className="group hover-scale">
            <CardContent className="p-6">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={flatPackBox}
                  alt="Organized flat-pack box with wooden pieces"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-toucan-orange rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Unpack & Organize</h3>
              </div>
              <p className="text-muted-foreground">
                Every piece is precisely cut and organized. Clear labeling and intuitive design 
                make it easy for kids to identify and sort components.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="group hover-scale">
            <CardContent className="p-6">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={slotSystem}
                  alt="Close-up of innovative slot and tab system"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-toucan-orange rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Slot & Connect</h3>
              </div>
              <p className="text-muted-foreground">
                Our precision-engineered slots and tabs create strong, secure connections. 
                Pieces slide together with a satisfying click - no force needed.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="group hover-scale">
            <CardContent className="p-6">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={kidsAssembly}
                  alt="Children helping assemble furniture with parents"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-toucan-orange rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Build Together</h3>
              </div>
              <p className="text-muted-foreground">
                Kids become active participants in creating their own furniture. 
                Building confidence, problem-solving skills, and family bonding time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Advantages */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Our System is Revolutionary
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-toucan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">5-Minute Assembly</h4>
              <p className="text-muted-foreground text-sm">
                What used to take hours now takes minutes. Our slot system is faster than any traditional furniture assembly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-toucan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">Kid-Friendly</h4>
              <p className="text-muted-foreground text-sm">
                Safe for children to handle and assemble. No sharp tools or small parts that pose safety risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-toucan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">No Tools Required</h4>
              <p className="text-muted-foreground text-sm">
                Zero tools, screws, or glue needed. Just your hands and our perfectly engineered connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-toucan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">Reconfigurable</h4>
              <p className="text-muted-foreground text-sm">
                Easily disassemble and rebuild in new configurations as your child grows and needs change.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              "Building furniture becomes a fun family activity that teaches kids valuable skills 
              while creating something they can be proud of."
            </p>
            <div className="inline-flex items-center space-x-2 text-toucan-teal font-medium">
              <span>🎯</span>
              <span>Ages 4+ can participate in assembly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;