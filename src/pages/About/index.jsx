import React from 'react';

const people = [
  {
    name: 'Eric Lee',
    role: 'Full Stack Developer',
    imageUrl:
      '/Eric.jpg',
    gitHub: 'https://github.com/ericeya',
    linkedinUrl: '#',
    email: 'eric@example.com',
  },
  {
    name: 'Samuel Fuller',
    role: 'Full Stack Developer',
    imageUrl:
      '/Chad.png',
    gitHub: 'https://github.com/SamuelFullerCA',
    linkedinUrl: '#',
    email: 'sam@example.com',
  },
  {
    name: 'Andrew Yang',
    role: 'Full Stack Developer',
    imageUrl:
      '/Andrew.jpg',
    gitHub: 'https://github.com/anduhrooo',
    linkedinUrl: '#',
    email: 'andrew@example.com',
  },
  {
    name: 'Brian Cordova',
    role: 'Full Stack Developer',
    imageUrl:
      '/Brian.jpg',
    gitHub: 'https://github.com/BrianHCordova',
    linkedinUrl: 'https://www.linkedin.com/in/brianhcordova/',
    email: 'briancordova@yahoo.com',
  },
];

export default function About() {
  return (
    <div className="bg-zinc-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            We're a dynamic and diverse cohort of full stack developers, each with our unique areas of expertise, collaborating to construct a scalable and impactful project.
            Passionate about our craft, we're driven by a shared dedication to delivering excellence and optimal outcomes for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
              <p className="text-base leading-7 text-white">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.gitHub} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 duration-200 ease-in-out">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 17.5h-9v-2.3c.6-.3 1.2-.7 1.8-1.2L10 15l1.2-1.2c.6.5 1.2.9 1.8 1.2v2.3zm0-5.5c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zM12 4.5c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.2-1.4-3.2-3.2S10.2 4.5 12 4.5zM7.2 15h-2v2h2v-2zm12.8-2h-2v4h2v-4z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-400 duration-200 ease-in-out">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${person.email}`} className="text-emerald-600 hover:text-emerald-400 duration-200 ease-in-out">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
