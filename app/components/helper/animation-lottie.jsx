"use client";

import dynamic from 'next/dynamic';

// Dynamically load Lottie with SSR disabled
const Lottie = dynamic(
  () => import('lottie-react'),
  { ssr: false }
);

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  // Configuration moved inside component
  const animationOptions = {
    animationData: animationPath,
    loop: true,
    autoplay: true,
  };

  return (
    <div style={{ width }}>
      <Lottie
        {...animationOptions}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default AnimationLottie;