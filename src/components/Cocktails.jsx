import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import menuCategories from '../../constants/Blanco';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    // Enhanced parallax animation
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    parallaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100, rotation: -20, scale: 0.8 })
      .from('#c-right-leaf', { x: 100, y: 100, rotation: 20, scale: 0.8 }, 0);

    // Animate menu items on scroll
    gsap.fromTo('.menu-item', 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95 
      }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.list',
          start: 'top 80%',
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate section headers
    gsap.fromTo('.section-header',
      {
        opacity: 0,
        y: -30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '#cocktails',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Get Mojitos category
  const mojitoCategory = menuCategories.find(cat => cat.category === 'MOJITOS');
  const mojitos = mojitoCategory ? mojitoCategory.items : [];
  const popularMojitos = mojitos.filter(item => !item.name.includes('Signature'));
  const signatureMojitos = mojitos.filter(item => item.name.includes('Signature'));

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2 className="section-header">Most Popular Mojitos</h2>
          <ul>
            {popularMojitos.map(({ name, price }, index) => (
              <li key={name} className="menu-item" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  {/* You can add description here if available */}
                  {/* <p>Fresh and refreshing classic mojito</p> */}
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2 className="section-header">Our Signature Mojitos</h2>
          <ul>
            {signatureMojitos.map(({ name, price }, index) => (
              <li key={name} className="menu-item" style={{ '--delay': `${(index + popularMojitos.length) * 0.1}s` }}>
                <div className="me-28">
                  <h3>{name}</h3>
                  {/* You can add description here if available */}
                  {/* <p>Expertly crafted signature blend</p> */}
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;