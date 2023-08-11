import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["rgb(229, 143, 178)", "rgb(107, 46, 142)"];


export const info = {
    firstName: "Cami",
    lastName: "Copo Amador",
    initials: "CCA", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Computer Science and Asian Studies Studend",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Data Science, Machine Learning and Natural Language Processing Intern at AbbVie"
        },
        {
            emoji: "📧",
            text: "mcamilacoa@gamil.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/_catastrophic._/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/catastrxphic",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/camicopoa/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey There! I love technology, especially coding and ML/AI :) /br Curious, open-minded, and a fast learner. I want to find as many opportunities as possible to learn about new things. Fun fact? I also love reading and learning languages.",
    skills:
        {
            proficientWith: ['python', 'git', 'github', 'html5', 'css3', 'figma', 'java', 'dash'],
            exposedTo: ['nodejs', 'R', 'swift', 'typescript']
        }
    ,
    hobbies: [
        {
            label:'learning',
            emoji:'📚'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'traveling',
            emoji: '🛫'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'coding',
            emoji: '💻'
        }
        
    ],
    portfolio: [
        {
            title: "MapMe",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/catastrxphic/MapModel", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Focus Buddy",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/catastrxphic/focusBuddy",
            image: mock2
        },
        {
            title: "Littler Detect",
            // live: "https://paytonpierce.dev",
            source: "https://devpost.com/software/litterdetect",
            image: mock3
        }
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}