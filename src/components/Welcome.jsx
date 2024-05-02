import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Welcome() {
  const { ref: fadeInRef, inView: fadeInInView } = useInView();
  const { ref: fadeOutRef, inView: fadeOutInView } = useInView();
  const fadeInControls = useAnimation();
  const fadeOutControls = useAnimation();

  useEffect(() => {
    if (fadeInInView) {
      fadeInControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.5 }
      });
    }
    if (!fadeOutInView) {
      fadeOutControls.start({
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.5 }
      });
    }
  }, [fadeInControls, fadeInInView, fadeOutControls, fadeOutInView]);

  return (
    <div className="lg:pb-40 lg:pt-40">
      <div ref={fadeInRef} className="overflow-hidden bg-zinc-800 rounded-lg py-32 mt-12 mb-12 border max-w-7xl mx-auto">
        <div className="mx-auto px-6 lg:flex lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={fadeInControls}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
          >
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our people</h2>
              <p className="mt-6 text-xl leading-8 text-white">
                Welcome to LensConnect, a sanctuary of admiration for skilled photographers, where their expertise intertwines with boundless creativity. Step into a world where each click is a masterpiece,
                and every frame is a story waiting to be told.
              </p>
              <p className="mt-6 text-base leading-7 text-white">
                Elevate your photography game with LensConnect Pro: Gain exposure as a Featured Pro,
                streamline client communication with descriptive intake forms and chat functionality, and highlight your specialties with professional tags. Join now to unlock a world of opportunities for your photography career!
              </p>
              <div className="mt-10 flex">
                <a
                  href="/login"
                  className="rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
                >
                  Join our team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <motion.div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <motion.div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="/jakob-owens-f3s0i96CRGQ-unsplash.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div ref={fadeOutRef}></div>
    </div>
  );
}
