# LensConnect
 ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

 
## Description
We at LensConnect recognize the challenges behind seeking talented photographers for work, and the struggle of gig-oriented photographers to find work. We seek to connect the two parties without the throughput of a large and expensive photographer booking or rental company.

There is a genuine need in the photography industry to simplify and stream-line this process of hiring photographers, and fostering a connection between clients and talent.

LensConnect solves this through customizable portfolios for the talented photographers in one centralized and accessible platform. Photographers can exhibit important information for prospective clients, such as serviceable-locations, specialties, and a portfolio of images to express style and performance. Clients have the option to leave honest reviews of the photographers through the validation that services were performed to ensure honest reviews that add to the confidence and candor of both parties. 

Throughout the development of LensConnect we gained insight into the distinct uniqueness of both the photography industry and the complicated nuances of designing a user-centric platform. From styling to user customization every step was made to enrich our understanding of the needs of clients and talent and bridging the gap through the technology and languages of a web developer. 

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Questions](#questions)

## Installation
These steps are for if a user wishes to download the repo and run the application on their own local server.

1. Download, copy, or clone the code to your local machine through GitHub and open in a VSCode, or another appropriate Code Editor/IDE. 


3. Right-click on the file 'vite.config.js' and select 'Open In Integrated Terminal' option in the drop-down menue, then run the command ```npm install``` to install all required node nodules. 


6. Once the modules and packages are installed, the user can then run the command: ```npm run dev```, to launch the react application.

## Usage
This User-centric platform is built primarily with the connecting clients with prosepective photographers. Because of this mantra we made the base functionallity public facing and accessable to anyone without an account, this includes: browsing featured photographers, searching for photographers via Username, location, or specialties, and browsing a catalogue of user-images.
<p align="center">
  <img alt="Gif of publically useable features process" src="public/READMEImages/basicfunc.gif" />
</p>

Any user wishing to access the personal features of lensConnect, such as: writing reviews, customizing profile information, transaction reports, and uploading images, will need to either create and account or login:
<p align="center">
  <img alt="Gif of login/signup process" src="public/READMEImages/loginandsignup.gif" />
</p>

This User-centric platform is built primarily with the focus of photographers unique identity through customization agency. We allow every user, weather they are a client or talent, to add a profile picture, and an about-me biography. User who declare themselves as photographers are presented with more customizable profile options, such as: serviceable locations, specialties, personal webiste, and whether or not they can perform videography.

The profile page also has the option for users to write reviews or a

## Credits

Application developers:

* <a href="https://github.com/BrianHCordova"> Brian Cordova </a>

* <a href="https://github.com/SamuelFullerCA"> Samuel Fuller </a>

* <a href="https://github.com/ericeya"> Eric Lee </a>

* <a href="https://github.com/anduhrooo"> Andrew Yang</a>

Image cloud storage via AWS Bucket: https://aws.amazon.com/s3/


## Features

This React application boasts modern styling through libraries and frameworks to achieve unique styles such as a parallax effect. Beyond the styling there is prominent integration of a PostgreSQL databases ran through an articulated repository, and then integrated into JavaScript, through the use of Sequelize. This allows the users to perform a variety of RESTful API requests that give agency to numerous elements of user profile customization, as well as inter-user reviews and reports. Additionally, the integration of external cloud service via AWS Bucket to host user images, and the use of socket.io to implement a chat network for user-to-user communication.

## Questions

Any questions please reach-out to any of our e-mails at: 
