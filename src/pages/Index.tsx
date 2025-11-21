import { useState, useEffect } from "react";
import AgeGate from "@/components/AgeGate";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Film, Star } from "lucide-react";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified
    const verified = localStorage.getItem("nyx_age_verified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("nyx_age_verified", "true");
    setIsVerified(true);
  };

  if (!isVerified) {
    return <AgeGate onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nyx-red/5 via-transparent to-background" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
              <span className="text-nyx-red">NYX</span>
              <br />
              <span className="text-foreground">POST-PORN</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              Cinematic Digital Experience
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Uma experiência visual cinematográfica que transcende os limites convencionais,
            explorando narrativas ousadas através de uma estética única e provocativa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nyx-red hover:bg-nyx-red-hover text-white font-bold text-base px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Explorar Conteúdo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-foreground/20 text-foreground hover:bg-foreground/10 font-bold text-base px-8 py-6"
            >
              <Film className="mr-2 h-5 w-5" />
              Sobre o Projeto
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nyx-red to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Film,
                title: "Cinematográfico",
                description: "Produção visual de alta qualidade com estética cinematográfica única"
              },
              {
                icon: Star,
                title: "Narrativa Ousada",
                description: "Histórias que desafiam convenções e exploram novas perspectivas"
              },
              {
                icon: Play,
                title: "Experiência Imersiva",
                description: "Design interativo que coloca você no centro da experiência"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border rounded p-8 hover:border-nyx-red/50 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-nyx-red mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 NYX POST-PORN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
