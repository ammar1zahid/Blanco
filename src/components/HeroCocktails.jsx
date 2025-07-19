import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { cocktailLists, mockTailLists } from "../../constants/index.js";

const HeroCocktails = () => {
  const videoRef = useRef();
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  useGSAP(() => {
    // Hero animations
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });
    
    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    
    // Hero leaf animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero-cocktails",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);
    
    // Video scroll animation
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-cocktails",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
    
    // Cocktails parallax animation
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails-section',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    });
    
    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100, y: 100
      })
      .from('#c-right-leaf', {
        x: 100, y: 100
      });
  }, []);
  
  return (
    <section id="hero-cocktails" className="noisy relative">
      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="title">MOJITO</h1>
        
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails-section">View cocktails</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video (Ice cube falling) */}
      <div className="video absolute inset-0 -z-10">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
      
      {/* Cocktails Section in Background */}
      <div id="cocktails-section" className="cocktails-background noisy absolute inset-0 -z-20">
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
        
        <div className="list">
          <div className="popular">
            <h2>Most popular cocktails:</h2>
            
            <ul>
              {cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>{country} | {detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="loved">
            <h2>Most loved mocktails:</h2>
            
            <ul>
              {mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="me-28">
                    <h3>{name}</h3>
                    <p>{country} | {detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCocktails;