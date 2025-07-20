'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Type will be imported from Footer component

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [mounted, setMounted] = useState(false);

  // Handle escape key press
  useEffect(() => {
    setMounted(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed inset-0 z-40 overflow-y-auto" onClick={onClose}>
            <div className="flex min-h-screen items-center sm:items-start sm:pt-20 justify-center p-4">
              <motion.div
                className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white pt-4 pr-6 pb-6 pl-6 text-left shadow-xl"
                onClick={e => e.stopPropagation()}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  duration: 0.3,
                }}
              >
                <div className="absolute right-2 top-2">
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#fff] hover:bg-[#fff] p-1 -m-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="mt-3">
                  <h3 className="text-[22px] font-bold text-black text-center">
                    Sign Up For Text and Emails to Enter to Win AND To Activate Your Discount
                  </h3>
                </div>

                <form className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Phone Number"
                    />
                  </div>
                  <p className="mt-2 text-black text-center italic text-lg leading-base">
                    By submitting this form and signing up for emails and texts, you agree to
                    receive recurring automated promotional and personalized marketing text messages
                    (e.g. cart reminders) from VNSH at the cell number used when signing up. Consent
                    is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg
                    frequency varies. Msg & data rates may apply. By submitting this form, you agree
                    to the{' '}
                    <a
                      href="#"
                      className="text-[#007bff] font-medium"
                      onClick={e => {
                        e.preventDefault();
                        if (typeof window !== 'undefined' && window.showFooterModal) {
                          window.showFooterModal('terms-pop-modal');
                        } else {
                          const event = new CustomEvent('showFooterModal', {
                            detail: 'terms-pop-modal',
                          });
                          window.dispatchEvent(event);
                        }
                      }}
                    >
                      Terms & Disclaimer
                    </a>
                    ,{' '}
                    <a
                      href="#"
                      className="text-[#007bff] font-medium"
                      onClick={e => {
                        e.preventDefault();
                        if (typeof window !== 'undefined' && window.showFooterModal) {
                          window.showFooterModal('privacy-policy-modal');
                        } else {
                          const event = new CustomEvent('showFooterModal', {
                            detail: 'privacy-policy-modal',
                          });
                          window.dispatchEvent(event);
                        }
                      }}
                    >
                      Privacy Policy
                    </a>{' '}
                    &{' '}
                    <a
                      href="#"
                      className="text-[#007bff] font-medium"
                      onClick={e => {
                        e.preventDefault();
                        if (typeof window !== 'undefined' && window.showFooterModal) {
                          window.showFooterModal('giveaway-terms-modal');
                        } else {
                          const event = new CustomEvent('showFooterModal', {
                            detail: 'giveaway-terms-modal',
                          });
                          window.dispatchEvent(event);
                        }
                      }}
                    >
                      Giveaway Terms
                    </a>.
                  </p>
                  <div className="mt-6">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-2xl font-bold text-black bg-[#ffc107] hover:bg-[#cf9d07] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      ENTER TO WIN
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
