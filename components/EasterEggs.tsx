'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
  const [konami, setKonami] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [showConsoleMessage, setShowConsoleMessage] = useState(false);

  const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

  useEffect(() => {
    console.log(`
    🚀 Welcome to Maina's Portfolio!
    
    🔍 Found some easter eggs? Try:
    - Konami Code (↑↑↓↓←→←→BA)
    - Type 'developer' anywhere
    - Click the logo 7 times
    
    💼 Interested in working together?
    📧 mzaquir58@gmail.com
    
    Built with ❤️ using Next.js, Three.js & Tailwind CSS
    `);

    const handleKeyPress = (e: KeyboardEvent) => {
      const newKonami = (konami + e.key).slice(-konamiCode.length);
      setKonami(newKonami);
      
      if (newKonami === konamiCode) {
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 5000);
      }
    };

    let typed = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase();
      typed = typed.slice(-9); 
      
      if (typed === 'developer') {
        setShowConsoleMessage(true);
        setTimeout(() => setShowConsoleMessage(false), 3000);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [konami]);

  return (
    <>
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-center text-white">
              <h2 className="text-3xl font-bold mb-4">🎉 SECRET UNLOCKED! 🎉</h2>
              <p className="text-lg">You found the Konami Code easter egg!</p>
              <p className="mt-2"> Here is a secret: I still remember all the cheat codes from the 90s 🎮</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConsoleMessage && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="fixed bottom-4 right-4 z-40 bg-green-600 text-white p-4 rounded-lg shadow-lg"
          >
            <div className="text-sm">
              <div className="font-mono font-bold">DEVELOPER MODE ACTIVATED</div>
              <div>console.log( &quot;Nice to meet a fellow dev! 👨‍💻&quot; )</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}