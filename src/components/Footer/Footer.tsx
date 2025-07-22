import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import FooterModal from './FooterModal';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text }) => {
  return (
    <div className="flex-1 min-w-[250px] max-w-[350px] p-4 text-center">
      <div className="h-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full" style={{ height: '120px' }}>
          <div className="relative w-full h-full max-w-[200px]">
            <Image
              src={imgUrl}
              alt={title}
              width={200}
              height={120}
              className="object-contain w-full h-full"
              quality={100}
              priority
              unoptimized={process.env.NODE_ENV !== 'production'}
              style={{
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
              }}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold mt-4 mb-2 text-black whitespace-nowrap">{title}</h3>
        <p className="text-black text-base leading-tight">{text}</p>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => (
  <a
    className="text-black cursor-pointer hover:text-black transition-colors duration-300 mx-2"
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {label}
  </a>
);

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className="w-full text-lg text-center font-medium flex flex-wrap justify-center items-center space-x-4">
    <FooterLink label="Terms & Disclaimer" id="terms-pop-modal" onClick={loadInfo} />
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
    <FooterLink label="Giveaway Terms" id="giveaway-terms-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  // Expose the showModal function to the window object
  useEffect(() => {
    const showModalHandler = (id: string) => {
      setModalId(id);
      setShowModal(true);
    };

    // Set it on the window object
    (window as any).showFooterModal = showModalHandler;

    // Also handle custom events
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      showModalHandler(customEvent.detail);
    };

    window.addEventListener('showFooterModal', handleCustomEvent as EventListener);

    // Clean up
    return () => {
      delete (window as any).showFooterModal;
      window.removeEventListener('showFooterModal', handleCustomEvent as EventListener);
    };
  }, []);

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
  };

  return (
    <footer className="w-full mt-2 bg-white">
      <div className="pt-1 pb-4 text-black bg-white">
        <div className="flex flex-col items-center">
          <div className="text-center text-lg text-black mb-2 md:-mb-1">
            &copy; <b>2025 VNSH.com</b> All Rights Reserved.
          </div>
          <div className="mt-4">
            <FooterLinks loadInfo={loadInfo} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-[60] p-4 pt-20 overflow-hidden"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              className="bg-white border-2 border-gray-200 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative p-2 mx-auto shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 200,
                mass: 0.5,
                duration: 0.4,
              }}
            >
              <motion.button
                className="absolute top-4 right-4 text-2xl text-black hover:text-black bg-transparent border-none hover:bg-transparent"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                &times;
              </motion.button>
              <FooterModal modalId={modalId} closeModal={closeModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

// Add global type declarations
declare global {
  interface Window {
    showFooterModal(id: string): void;
  }
  interface WindowEventMap {
    showFooterModal: CustomEvent<string>;
  }
}

export default Footer;
