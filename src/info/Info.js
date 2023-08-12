import self from "../img/self.jpeg"
import mock1 from "../img/mock1.webp"
import mock2 from "../img/mock2.webp"
import mock3 from "../img/mock3.webp"

export let colors = ["rgb(214, 158, 181)", "rgb(155, 146, 221)"];


export const info = {
    firstName: "Cami",
    lastName: "Copo Amador",
    initials: "CCA", 
    position: "a Computer Science and Asian Studies Student",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'Passionate of working at coffee or tea shops'
        },
        {
            emoji: '🏫',
            text: 'Florida International University Student'
        },
        {
            emoji: "💼",
            text: "Data Science, Machine Learning and Natural Language Processing Intern at AbbVie"
        },
        {
            emoji: "📧",
            text: "mcamilacoa@gmail.com"
        }
    ],
    socials: [
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
        }

    ],
    bio: "Hey There! I love technology, especially coding and ML/AI : Curious, open-minded, and a fast learner. I want to find as many opportunities as possible to learn about new things. Fun fact? I also love reading and learning languages.",
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
    
    ]
}