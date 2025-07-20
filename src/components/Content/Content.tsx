import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import SignupModal from '../SignupModal/SignupModal';

const CallToAction = dynamic(() => import('../CallToAction/CallToAction'), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Click Here to Enter - Hurry Giveaway is Over Soon',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full max-w-[1140px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center py-1">
            <h1 className="font-sans text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] font-bold leading-tight mb-5 px-2">
              Will You Be the Winner of the BRAND NEW Compensated Springfield Prodigy?
            </h1>
            <span className="text-xl md:text-3xl font-bold text-[#ff0000] px-4 pt-1 pb-0 inline-block italic">
              <span className="bg-[#ff0] px-1 py-1">Valued at $1,599 - It Could Be Yours Free</span>
            </span>
          </header>
          <div className="mx-auto w-full md:max-w-[80%]">
            <Image
              src="/contentimages/gun-prodigy.webp"
              alt="VNSH Holster deal"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center">
            <h1 className="font-sans text-[1.25rem] sm:text-[1.75rem] md:text-[1.9rem] font-bold leading-tight mb-3 px-2">
              Enter Today And You May Take a Home a FREE Weapon From Our Co-Sponsor - Pain Safari
            </h1>
          </header>
          <CallToAction buttonText={buttonText} showTrialText={false} onClick={openModal} />
          <SignupModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-1 lg:px-20 bg-black">
        <div className="space-y-2">
          {/* Sponsored By Section */}
          <div className="w-full py-2 my-2">
            <div className="w-full px-5 lg:px-0">
              <p className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
                Sponsored By
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center w-full mx-auto gap-6 md:gap-12 lg:gap-[20rem]">
                <div className="w-48 sm:w-56 md:w-64 flex-shrink-0">
                  <Image
                    src="/contentimages/VNSH Logo.webp"
                    alt="VNSH Logo"
                    width={256}
                    height={128}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-36 sm:w-44 md:w-48 flex-shrink-0">
                  <Image
                    src="/contentimages/PSLogo.webp"
                    alt="Pain Safari Logo"
                    width={224}
                    height={112}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center">
            <h1 className="font-sans text-[1.25rem] sm:text-[1.75rem] md:text-[1.9rem] font-bold leading-tight mb-3 px-2">
              Check Out Just How Sweet this Gun Is And Enter Now
            </h1>
          </header>
          <CallToAction buttonText={buttonText} showTrialText={false} onClick={openModal} />
          {/* 3-Column Prodigy Images Section */}
          <div className="w-full pt-4 pb-4 px-0 -mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto px-4">
              {/* Image 1 */}
              <div className="text-center">
                <div className="mb-6 w-full relative">
                  <Image
                    src="/contentimages/ProdigyImage1.webp"
                    alt="Prodigy Feature 1"
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    priority
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">4.25" BULL BARREL</h3>
                <p className="mt-2 text-xl">
                  The 4.25-inch bull barrel on the Prodigy Comp is crafted from forged stainless
                  steel for match-grade accuracy and features an integral compensator.
                </p>
              </div>

              {/* Image 2 */}
              <div className="text-center">
                <div className="mb-6 w-full relative">
                  <Image
                    src="/contentimages/ProdigyImage2.webp"
                    alt="Prodigy Feature 2"
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    priority
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">DOUBLE STACK DESIGN</h3>
                <p className="mt-2 text-xl">
                  From its flush-fitting 17-round magazine to the extended 20-rounder —both included
                  standard with the pistol — the Prodigy Comp will never come up short on capacity.
                </p>
              </div>

              {/* Image 3 */}
              <div className="text-center">
                <div className="mb-6 w-full relative">
                  <Image
                    src="/contentimages/ProdigyImage3.webp"
                    alt="Prodigy Feature 3"
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    priority
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">OPTICS-READY</h3>
                <p className="mt-2 text-xl">
                  The Prodigy Comp employs AOS (Agency Optic System) plates that accept today’s most
                  popular optics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto py-2px bg-black">
        <div>
          {/* Mobile View (430x932) */}
          <div className="md:hidden">
            <div className="w-full" style={{ height: '36vh', overflow: 'hidden' }}>
              <Image
                src="/contentimages/ProdigyBlackImage.webp"
                alt="VNSH Prodigy Giveaway"
                className="w-full h-full object-cover object-left"
                width={1200}
                height={800}
                priority
              />
            </div>
            <div className="p-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-4 text-white">INTEGRAL COMPENSATOR</h3>
              <p className="text-base leading-relaxed">
                The integral compensator on the Prodigy Comp is discreetly designed, featuring a
                single port on the top of the hammer-forged slide and barrel. By redirecting gas
                upwards, it reduces muzzle rise and enhances control allowing for faster and more
                accurate follow-up shots. Additionally, the tritium front sight is positioned behind
                the compensator to ensure an uninterrupted sight picture.
              </p>
            </div>
          </div>

          {/* Tablet View (844x390) */}
          <div className="hidden md:block lg:hidden">
            <div className="relative w-full" style={{ height: '390px' }}>
              <Image
                src="/contentimages/ProdigyBlackImage.webp"
                alt="VNSH Prodigy Giveaway"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-end pr-12">
                <div className="max-w-[60%] text-right">
                  <h3 className="text-2xl font-bold mb-3 text-white">INTEGRAL COMPENSATOR</h3>
                  <p className="text-base text-white">
                    The integral compensator on the Prodigy Comp is discreetly designed, featuring a
                    single port on the hammer-forged slide and barrel. By redirecting gas upwards,
                    it reduces muzzle rise and enhances control for faster follow-up shots.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View (1024px and up) */}
          <div className="hidden lg:block">
            <div className="relative">
              <Image
                src="/contentimages/ProdigyBlackImage.webp"
                alt="VNSH Prodigy Giveaway"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="w-full px-4 mx-auto max-w-7xl">
                  <div className="w-full ml-auto max-w-2xl p-8 text-right text-white">
                    <h3 className="text-2xl font-bold mb-4 whitespace-nowrap text-white">
                      INTEGRAL COMPENSATOR
                    </h3>
                    <p className="text-[16px] leading-tight">
                      The integral compensator on the Prodigy Comp is discreetly designed, featuring
                      a single port on the top of the hammer-forged slide and barrel. By redirecting
                      gas upwards, it reduces muzzle rise and enhances control allowing for faster
                      and more accurate follow-up shots. Additionally, the tritium front sight is
                      positioned behind the compensator to ensure an uninterrupted sight picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <div className="max-w-7xl mx-auto mb-6 px-4 pt-6">
            <h2 className="text-3xl md:text-[38px] font-bold text-center mb-6">SPECS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">CALIBER</div>
                <div className="text-lg md:text-xl mt-1">9mm</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">COLOR</div>
                <div className="text-lg md:text-xl mt-1">Black</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">BARREL</div>
                <div className="text-lg md:text-xl mt-1">
                  4.25" Forged Stainless Steel, Match Grade, Bull, 1:16
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">SLIDE</div>
                <div className="text-lg md:text-xl mt-1">
                  Forged Carbon Steel, Black Cerakote®, Optics-Ready, Integral Compensator
                </div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">FRAME</div>
                <div className="text-lg md:text-xl mt-1">Forged Carbon Steel, Black Cerakote®</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">SIGHTS</div>
                <div className="text-lg md:text-xl mt-1">Tritium Front, Black Serrated Rear</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">RECOIL SYSTEM</div>
                <div className="text-lg md:text-xl mt-1">2 Piece Full Length Guide Rod</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">GRIPS</div>
                <div className="text-lg md:text-xl mt-1">Polymer</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">MAGAZINES</div>
                <div className="text-lg md:text-xl mt-1">(1) 17-Round, (1) 20-Round</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">WEIGHT</div>
                <div className="text-lg md:text-xl mt-1">32.5 oz</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">LENGTH</div>
                <div className="text-lg md:text-xl mt-1">7.8"</div>
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">WEIGHT</div>
                <div className="text-lg md:text-xl mt-1">32.5 oz</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">MSRP</div>
                <div className="text-lg md:text-xl mt-1">$1,599</div>
              </div>
              <div className="hidden md:block p-2 pt-4">
                {/* Empty middle column with no top border */}
              </div>
              <div className="p-2 border-t-2 border-gray-200 pt-4">
                <div className="font-bold text-xl md:text-2xl">HEIGHT</div>
                <div className="text-lg md:text-xl mt-1">5.5"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-1 lg:px-20 bg-black">
        <div className="space-y-2">
          {/* Sponsored By Section */}
          <div className="w-full py-2 my-2">
            <div className="w-full px-5 lg:px-0">
              <p className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
                Sponsored By
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center w-full mx-auto gap-6 md:gap-12 lg:gap-[20rem]">
                <div className="w-48 sm:w-56 md:w-64 flex-shrink-0">
                  <Image
                    src="/contentimages/VNSH Logo.webp"
                    alt="VNSH Logo"
                    width={256}
                    height={128}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-36 sm:w-44 md:w-48 flex-shrink-0">
                  <Image
                    src="/contentimages/PSLogo.webp"
                    alt="Pain Safari Logo"
                    width={224}
                    height={112}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-1 lg:px-20 bg-white">
        <div className="space-y-2"></div>
        <CallToAction buttonText={buttonText} showTrialText={false} onClick={openModal} />
      </div>
    </div>
  );
};

export default Content;
