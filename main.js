import imageDaniel from "./images/image-daniel.jpg";
import imageJonathan from "./images/image-jonathan.jpg";
import imageJeanette from "./images/image-jeanette.jpg";
import imagePatrick from "./images/image-patrick.jpg";
import imageKira from "./images/image-kira.jpg";

const main = document.querySelector("#main");

const cards = [
  {
    classes: ["bg-purple", "bg-quote", "colspan-2"],
    picture: imageDaniel,
    name: "Daniel clifford",
    highlight: `I received a job offer mid-
course, and the subjects I
learned were current, if not more
so, in the company I joined. I
honestly feel I got every penny's
worth.`,
    description: `"I was an EMT for many years before I joined the
bootcamp. I've been looking to make a transition
and have heard some people who had an
amazing experience here. I signed up for the
free intro course and found it incredibly fun! I
enrolled shortly thereafter. The next 12 weeks
was the best - and most grueling - time of my
life. Since completing the course, l've
successfully switched careers, working as a
Software Engineer at a VR startup."`,
    online: true,
  },
  {
    classes: ["bg-gray"],
    picture: imageJonathan,
    name: "Jonathan Walters",
    highlight: `The team was very supportive
      and kept me motivated
     `,
    description: `"I started as a total newbie with virtually no coding
      skills. I now work as a mobile engineer for a big
      company. This was one of the best investments l've
      made in myself."`,
  },
  {
    classes: ["bg-white"],
    picture: imageJeanette,
    name: "Jeanette Harmon",
    highlight: `An overall wonderful and
      rewarding experience
     `,
    description: `"Thank you for the wonderful experience! I now
      have a job really enjoy, and make a good living
      while doing something I love."`,
  },
  {
    classes: ["bg-black", "colspan-2"],
    picture: imagePatrick,
    name: "Patric Abrams",
    highlight: `Awesome teaching support from
      TAs who did the bootcamp
      themselves. Getting guidance
      from them and learning from
      their experiences was easy.

     `,
    description: `"The staff seem genuinely concerned about my
      progress which I find really refreshing. The
      program gave me the confidence necessary to be
      able to go out in the world and present myself as a
      capable junior developer. The standard is above the
      rest. You will get the personal attention you need
      from an incredible community of smart and
      amazing people."`,

    online: true,
  },
  {
    classes: ["bg-white", "grid-end", "rowspan-2"],
    picture: imageKira,
    name: "Kira Whittle",
    highlight: `Such a life-changing experience.
    Highly recommended!

     `,
    description: `"Before joining the bootcamp, I've never written a
    line of code. I needed some structure from
    professionals who can help me learn programming
    step by step. I was encouraged to enroll by a
    former student of theirs who can only say
    wonderful things about the program. The entire
    curriculum and staff did not disappoint. They were
    very hands-on and I never had to wait long for
    assistance. The agile team project, in particular,
    was outstanding. It took my learning to the next
    level in a way that no tutorial could ever have. In
    fact, I've often referred to it during interviews as an
    example of my developent experience. It certainly
    helped me land a job as a full-stack developer after
    receiving multiple offers. 100% recommend!"`,
  },
];

cards.forEach((card) => generateCard(card));

function generateCard({
  name,
  highlight,
  description,
  picture,
  classes,
  online,
}) {
  const card = document.createElement("section");
  const header = document.createElement("div");
  const img = document.createElement("img");
  const infoHeaderContainer = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardHighLight = document.createElement("h1");
  const cardDescription = document.createElement("p");

  const personName = document.createElement("p");
  const personInfo = document.createElement("span");

  personInfo.append("Verified graduate");
  personName.append(name);
  cardHighLight.append(highlight);

  cardDescription.append(description);

  infoHeaderContainer.append(personName, personInfo);

  img.src = picture;
  img.alt = `picture from ${name}`;
  if (online) img.classList.add("border-purple");
  infoHeaderContainer.classList.add("card-header-info");
  cardBody.classList.add("card-body");
  card.classList.add("card", ...classes);
  header.classList.add("card-header");

  header.append(img);
  header.append(infoHeaderContainer);
  cardBody.append(cardHighLight, cardDescription);

  card.append(header, cardBody);
  main.append(card);
}
