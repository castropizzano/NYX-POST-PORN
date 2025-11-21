import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface AgeGateProps {
  onVerify: () => void;
}

const AgeGate = ({ onVerify }: AgeGateProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleVerify = () => {
    setIsExiting(true);
    setTimeout(() => {
      onVerify();
    }, 600);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-nyx-overlay/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center space-y-8 px-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-black tracking-tighter"
              >
                <span className="text-nyx-red">NYX</span>
                <br />
                <span className="text-foreground">POST-PORN</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground font-mono"
              >
                Verificação de Idade
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-base text-foreground/80 max-w-md mx-auto">
                Este conteúdo é destinado exclusivamente para maiores de 18 anos.
                Confirme sua idade para continuar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  onClick={handleVerify}
                  size="lg"
                  className="w-full sm:w-auto bg-nyx-red hover:bg-nyx-red-hover text-white font-bold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
                >
                  Tenho +18
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-foreground/20 text-foreground hover:bg-foreground/10 font-bold text-lg px-8 py-6 transition-all duration-300"
                >
                  Não tenho
                </Button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-muted-foreground font-mono pt-8"
            >
              Ao continuar, você confirma ter mais de 18 anos
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeGate;
