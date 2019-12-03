import {SocialNetwork} from 'model/SocialNetwork';

import featuredTalk01 from 'assets/talks/cejs-2016.jpg';
import featuredTalk02 from 'assets/talks/cejs-2017.jpg';
import featuredTalk04 from 'assets/talks/front_in_fortaleza-2018.jpg';
import featuredTalk13 from 'assets/talks/frontend_talks_brn-2019.jpg';
import featuredTalk14 from 'assets/talks/frontend_talks_prg-2019.jpg';
import featuredTalk06 from 'assets/talks/natal_tech_conference-2019.jpg';
import featuredTalk03 from 'assets/talks/phpeste-2017.jpg';
import featuredTalk05 from 'assets/talks/react_nyc-2018.jpg';
import featuredTalk08 from 'assets/talks/tdc_bh-2019-1.jpg';
import featuredTalk09 from 'assets/talks/tdc_bh-2019-2.jpg';
import featuredTalk07 from 'assets/talks/tdc_florianopolis-2019.jpg';
import featuredTalk10 from 'assets/talks/tdc_sp-2019-1.jpg';
import featuredTalk11 from 'assets/talks/tdc_sp-2019-2.jpg';
import featuredTalk12 from 'assets/talks/the_conf.jpg';

const shortIntro = `
🙋 Hi folks! I'm Matheus.

👨‍💻 I'm currently working as a Front-End Engineer at [STRV](https://www.strv.com), 
a San Francisco-based strategy, design, and engineering company.

✌️ I'm casually [speaking](/talks), [writing](/posts), 
[travelling](/about) & advocating for craft brewing.

📢 Feel free to reach me out on social networks, 
[appear.in](https://appear.in/ythecombinator) or schedule something 
on [my calendar](https://calendly.com/ythecombinator). Last but not least,
you can write to me 
through [land@ythecombinator.space](mailto:land@ythecombinator.space).
`;

const intro = `
## Intro

✋ Hi folks! I'm just another constantly evolving full-stack developer draft who
inhabits this world.

💜 My areas of interest/passions include: JavaScript, Swift, architecture 
patterns, User Interfaces libraries and frameworks developer tooling, 
functional and reactive programming, unix philosophy, and User Interaction 
design.

👥 I also try to help as much as I can Brazilian local communities like Dev I/O 
Foundation, Ionic Brazil, CocoaHeads Fortaleza, Lambda I/O Foundation, and many
others!

📢 In addition to attending and organizing meetups and conferences, I really like
to bring cool things to where I'm invited to speak; if you want to see some of 
my lectures, [here](/talks) they are.

💻 As I mentioned, I also love open source, if you'd like to stalk me on GitHub, 
[don't ever hesitate](https://github.com/ythecombinator).
`;

const travelling = `
## Travelling

As I started working as a remote developer (~ early 2018) besides travelling a lot
more through my homeland, I decided to travel and live a little around the world for a 
while – not staying for too long on any city. 

These are the countries where I've been to in this journey:
`;

const working = `
## Working

### Software Engineer, Front-End

🏢 [STRV](https://www.strv.com/)

🌎 Prague, Czech Republic

📅 July 2019 – Present

📃 Working to grow the business and, mostly, help our clients meeting their 
business goals, without leaving quality aside.

👨‍💻 Mostly working with:

- React.js and Next.js
- React Native
- redux and related tooling (e.g. redux-saga, redux-act, reselect etc.)
- JavaScript and TypeScript

<hr>

### Tech Lead, Front-End

🏢 [Beakyn Company](https://beakyn.com/)

🌎 New York City, USA (Remote)

📅 Feb 2018 – Aug 2019

📃 As a tech lead on a few of the company's most recent projects, I’ve been responsible
for ensuring the team balances all of the following: working at a speed guided by 
direction, not pace; delivering on its promises to potential customers, and applying 
my expertise as a guiding force growing and developing the team. 

It's been an exciting role that does not have strict boundaries, giving me the 
opportunity to expand my impact where I see value to the team and our business and 
where I have the freedom to identify opportunities and create solutions that enable 
fast UI innovation.

### Senior Software Engineer, Front-End

🏢 [Beakyn Company](https://beakyn.com/)

🌎 New York City, USA (Remote)

📅 Sep 2017 – Feb 2018

📃 Working to grow the business and, mostly, help our clients meeting their 
business goals, without leaving quality aside in large-scale geographic data 
visualization platforms and assets curation systems.

👨‍💻 Mostly working with:

- React.js and Next.js
- React Native and iOS native development
- redux and related tooling (e.g. redux-saga, redux-act, reselect etc.)
- JavaScript and TypeScript
- Webpack and bundle optimization techniques (prefetching, code splitting, common chunks, dynamic imports, service workers, web workers, compile-time optimization etc.)
- Map data plotting and analyzation tools (e.g. Mapbox GL, Turf.js, pbf etc.)
- Firebase services (Auth, Cloud Functions, Firestore etc.)
- Authentication, authorization and accounting infrastructure (mostly with Auth0 and node.js)
- Chat & Chatbots tooling (Intercom, Tokbox, Dialogflow etc.)

<hr>

### Mobile Developer

🏢 [Apple Developer Academy](http://developeracademy.ifce.edu.br/)

🌎 Fortaleza, Brazil

📅 Jan 2016 – Dec 2017

📃 I've been a macOS, iOS, watchOS, tvOS development intern with a Full-Stack 
development and User Interaction design background in the Apple Developer 
Academy – former _Brazilian Education Program for iOS Developers_ (BEPiD) – 
which aims to grow iOS developers by training Swift/Objective-C and other 
technologies.

👨‍💻 Mostly working with:

- Swift/Objective-C
- iOS frameworks and APIs (e.g. Foundation, UIKit, AutoLayout, CoreData, MapKit, CoreLocation, CoreMotion, Push Notifications etc.)
- watchOS frameworks and APIs (e.g. WatchKit, WatchConnectivity etc.)
- tvOS frameworks and APIs (e.g. UIKit, Focus Engine, TVMLKit etc.)
- Server-side Swift frameworks and APIs (e.g. Vapor)
- Unit and integration tests tools (e.g. XCTest, Quick, Nimble etc.)
- SpriteKit and other game development focused APIs (e.g. GameCenter)
`;

export const sections = {
  shortIntro,
  intro,
  travelling,
  working
};

export const featuredTalks = [
  {
    event: "Frontend Talks PRG",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalk14,
    key: "featuredTalk14"
  },
  {
    event: "Frontend Talks BRN",
    link:
      "/talks/code-sharing-at-scale-one-codebase-for-web-mobile-and-desktop",
    image: featuredTalk13,
    key: "featuredTalk13"
  },
  {
    event: "The Conf | 2019",
    link: "/talks/the-day-i-reverse-engineered-a-gameboy-advance-game",
    image: featuredTalk12,
    key: "featuredTalk12"
  },
  {
    event: "TDC 2019 | São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks-revisited",
    image: featuredTalk11,
    key: "featuredTalk11"
  },
  {
    event: "TDC 2019 | São Paulo",
    link: "/talks/react-16-dot-x-way-beyond-hooks-revisited",
    image: featuredTalk10,
    key: "featuredTalk10"
  },
  {
    event: "TDC 2019 | Belo Horizonte",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk09,
    key: "featuredTalk09"
  },
  {
    event: "TDC 2019 | Belo Horizonte",
    link: "/talks/react-16-dot-x-way-beyond-hooks-revisited",
    image: featuredTalk08,
    key: "featuredTalk08"
  },
  {
    event: "TDC 2019 | Florianópolis",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk07,
    key: "featuredTalk07"
  },
  {
    event: "Natal Tech Conference | 2019",
    link:
      "/talks/the-hitchhikers-guide-to-the-front-end-performance-2019-edition",
    image: featuredTalk06,
    key: "featuredTalk06"
  },
  {
    event: "React NYC | October, 2018",
    link: "/talks/state-of-the-art-react-development-flow-with-typescript",
    image: featuredTalk05,
    key: "featuredTalk05"
  },
  {
    event: "Front In Fortaleza | 2018",
    link:
      "/talks/the-hitchhikers-guide-to-the-front-end-performance-2018-edition",
    image: featuredTalk04,
    key: "featuredTalk04"
  },
  {
    event: "PHPeste | 2017",
    link: "/talks/the-correctness-by-design-duck-will-bite-php",
    image: featuredTalk03,
    key: "featuredTalk03"
  },
  {
    event: "CEJS | 2017",
    link: "/talks/sweet-macros-o-mine",
    image: featuredTalk02,
    key: "featuredTalk02"
  },
  {
    event: "CEJS | 2016",
    link: "/talks/javascript-in-the-sky-with-types",
    image: featuredTalk01,
    key: "featuredTalk01"
  }
];

export const socialData: SocialNetwork[] = [
  {
    name: "twitter",
    link: "https://twitter.com/ythecombinator"
  },
  {
    name: "github",
    link: "https://github.com/ythecombinator"
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/ythecombinator"
  },
  {
    name: "instagram",
    link: "https://instagram.com/ythecombinator"
  }
];

export const githubProfilePicture =
  "https://avatars1.githubusercontent.com/u/2644563?s=460&v=4";
