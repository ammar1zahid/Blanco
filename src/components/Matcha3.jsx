/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import Lenis from '@studio-freight/lenis';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 799 });

  useEffect(() => {
    // Lenis smooth scrolling initialization
    const lenis = new Lenis();
    
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop animations
    mm.add("(min-width: 800px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.fanta-section1',
          start: '50% 50%',
          end: '130% 50%',
          scrub: 1
        }
      });

      tl.to('#fanta-leaf1', {
        top: "120%",
        left: "80%",
        rotate: 90
      }, 'timeO')
        .to('#fanta-leaf2', {
          top: "105%",
          left: "5%",
          rotate: 120
        }, 'timeO')
        .to('#fanta-bottle', {
          top: "125%",
          left: "10%",
        }, 'timeO')
        .to('#fanta-orange2', {
          top: "150%",
          left: "25%",
        }, 'timeO')
        .to('#fanta-orange', {
          top: "160%",
          left: "70%",
        }, 'timeO');
    });

    // Mobile animations
    mm.add("(max-width: 799px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.fanta-section1',
          start: '50% 50%',
          end: '130% 50%',
          scrub: 1
        }
      });

      tl.to('#fanta-leaf1', {
        top: "120%",
        left: "80%",
        rotate: 90
      }, 'timeO')
        .to('#fanta-leaf2', {
          top: "105%",
          left: "5%",
          rotate: 120
        }, 'timeO')
        .to('#fanta-bottle', {
          top: "125%",
          left: "5%",
        }, 'timeO')
        .to('#fanta-orange2', {
          top: "110%",
          left: "15%",
        }, 'timeO')
        .to('#fanta-orange', {
          top: "160%",
          left: "35%",
          width: "65vw"
        }, 'timeO');
    });

    let mm2 = gsap.matchMedia();

    // Desktop section 2 animations
    mm2.add("(min-width: 800px)", () => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.fanta-section2',
          start: '50% 50%',
          end: '200% 100%',
          scrub: 1,
        }
      });

      tl2.to('#fanta-bottle', {
        top: "218%",
        left: "40%",
        width: "20vw",
      }, 'time1')
        .to('#fanta-orange2', {
          top: "210%",
          left: "40%",
          width: "20vw",
        }, 'time1')
        .from('#fanta-pineapplecut', {
          y: 500,
          x: -900,
          rotate: -90,
        }, 'time1')
        .from('#fanta-pineapple', {
          y: 300,
          x: -700,
          rotate: -90,
        }, 'time1')
        .from('#fanta-orangefruit', {
          y: 500,
          x: 900,
          rotate: 90,
        }, 'time1')
        .from('#fanta-yellow', {
          y: 300,
          x: 700,
          rotate: 90,
        }, 'time1');
    });

    // Mobile section 3 animations
    mm2.add("(max-width: 799px)", () => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.fanta-section3',
          start: '0% 90%',
          end: '100% 100%',
          scrub: 1,
        }
      });

      tl2.from('#fanta-pineapplecut', {
        y: 500,
        x: -900,
        rotate: -90,
      }, 'time1')
        .from('#fanta-pineapple', {
          y: 300,
          x: -700,
          rotate: -90,
        }, 'time1')
        .from('#fanta-orangefruit', {
          y: 500,
          x: -900,
          rotate: -90,
        }, 'time1')
        .from('#fanta-yellow', {
          y: 300,
          x: -700,
          rotate: -90,
        }, 'time1')
        .from('#fanta-resp-orange', {
          y: 500,
          x: 900,
          rotate: 90,
        }, 'time1')
        .from('#fanta-resp-fanta', {
          y: 300,
          x: 700,
          rotate: 90,
        }, 'time1');
    });

    return () => {
      mm.revert();
      mm2.revert();
    };
  });

  return (
    <div id="fanta-main">
      {/* <nav className="fanta-nav fanta-d-flex">
        <h1>LOGO</h1>
        <div className="fanta-cntr-nav fanta-d-flex">
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Shop</a>
          <a href="">Contact</a>
        </div>
        <i className="ri-menu-line"></i>
      </nav> */}

      <div className="fanta-section fanta-section1 fanta-d-flex">
        <h1 >MATCHA</h1>
        <img id="fanta-leaf1" src="/Assets2/leaf.webp" alt="" />
        {/* <img id="fanta-orange2" src="/Assets2/orange2.png" alt="" /> */}
        <img id="fanta-orange2" src="/Assets2/png/Coconut2.png" alt="" />
        <img id="fanta-leaf2" src="/Assets2/leaf2.png" alt="" />
        <img id="fanta-bottle" src="/Assets2/png/blanco1.png" alt="" />
        <img id="fanta-orange" src="/Assets2/orange.webp" alt="" />
      </div>

      <div className="fanta-section fanta-d-flex fanta-section2">
        <div className="fanta-lft fanta-d-flex">
          <div className="fanta-magicpattern"></div>
        </div>
        <div className="fanta-rght fanta-d-flex-c">
          <h1 className="fanta-mainHeading">Flavour Updated</h1>
          <p className="fanta-mainP">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            sunt enim! Debitis eius distinctio, unde in quis totam, dolorem
            cumque laborum deserunt dignissimos reprehenderit quaerat sed rerum
            enim, obcaecati quisquam quidem magni modi laudantium nemo omnis
            nobis provident! Temporibus quos a sequi, voluptas fuga quis commodi
            suscipit doloribus tempora nemo.
          </p>
          <button>Check Now</button>
        </div>
      </div>

      <div className="fanta-section fanta-d-flex fanta-section3">
        <div className="fanta-card fanta-d-flex-c">
          <div className="fanta-img-div fanta-d-flex">
            <img id="fanta-pineapplecut" src="/Assets2/png/strawberry3.png" alt="" />
            <img id="fanta-pineapple" src="/Assets2/png/blanco3.png" alt="" />
          </div>
          <h1 className="fanta-mainHeading">Stawberry Matcha</h1>
          {/* <button>Buy Now</button> */}
        </div>
        <div className="fanta-card fanta-d-flex-c">
          <div className="fanta-img-div fanta-d-flex">
            <img id="fanta-resp-orange" src="/Assets2/orange2.png" alt="" />
            <img id="fanta-resp-fanta" src="/Assets2/png/blanco1.png" alt="" />
          </div>
          <h1 className="fanta-mainHeading">Coconut Matcha</h1>
          {/* <button>Buy Now</button> */}
        </div>
        <div className="fanta-card fanta-d-flex-c">
          <div className="fanta-img-div fanta-d-flex">
            <img id="fanta-orangefruit" src="/Assets2/orangefruit.jpg" alt="" />
            <img id="fanta-yellow" src="/Assets2/png/blanco2.png" alt="" />
          </div>
          <h1 className="fanta-mainHeading">Lemon</h1>
          {/* <button>Buy Now</button> */}
        </div>
      </div>
      
      <div className="fanta-section"></div>
    </div>
  );
};

export default LandingPage;