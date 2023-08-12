import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { particleBgColors } from './particleBGColors';


const ParticlesBg = ({ darkMode }) => {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      await console.log('Particles loaded', container);
    }, []);
  
    const { background, links, particle } = particleBgColors();
  
    const [backgroundColor, setBgColor] = useState(background(darkMode));
    const [particleColor, setParticleColor] = useState(particle(darkMode));
    const [linksColor, setLinksColor] = useState(links(darkMode));
  
    useEffect(() => {
      setBgColor(background(darkMode));
      setParticleColor(particle(darkMode));
      setLinksColor(links(darkMode));
    }, [darkMode, background, links, particle]);

    return (
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	    }}
        />
    );
};
export default ParticlesBg;