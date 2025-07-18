'use client';

import { useSearchParams } from 'next/navigation';

interface CallToActionProps {
  buttonText?: string;
  className?: string;
  showTrialText?: boolean;
}

export default function CallToAction({
  buttonText = 'Give Me My VNSH Holster + FREE QuickDraw Gun Magnet',
  className = '',
  showTrialText = true,
}: CallToActionProps) {
  const searchParams = useSearchParams();

  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    return `${baseUrl}${params.toString() ? `?${params}` : ''}`;
  };

  return (
    <div className={className}>
      <div className="text-center my-8 md:my-10">
        <a
          href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
          className="inline-block"
        >
          <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
            {buttonText}
          </button>
        </a>
      </div>
      {showTrialText && (
        <div className="text-center my-8">
          <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
            <span className="bg-[#ff0] px-1 py-1">
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
