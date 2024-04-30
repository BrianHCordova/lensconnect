

export default function Welcome() {
    return (
      <div className="overflow-hidden bg-transparent py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
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
                  href="#"
                  className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Join our team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }