'use client';

interface CallToActionProps {
  buttonText?: string;
  className?: string;
  onClick: () => void;
}

export default function CallToAction({
  buttonText = 'Click Here to Enter - Hurry Giveaway is Over Soon',
  className = '',
  onClick,
}: CallToActionProps) {
  return (
    <div className={className}>
      <div className="text-center my-8 md:mt-8 md:mb-2">
        <button
          onClick={onClick}
          className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
