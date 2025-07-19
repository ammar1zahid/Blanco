import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import menuCategories from '../../constants/Blanco';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    parallaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100 })
      .from('#c-right-leaf', { x: 100, y: 100 });
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
          <h2>Most popular Mojitos:</h2>
          <ul>
            {popularMojitos.map(({ name, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Our Signature Mojitos:</h2>
          <ul>
            {signatureMojitos.map(({ name, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
