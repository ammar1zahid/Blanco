'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import menuCategories from '../../constants/Blanco';

const Menu = () => {
  const contentRef = useRef();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);

  const items = menuCategories[currentCategory].items;
  const totalItems = items.length;

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo('.item img', { opacity: 0, xPercent: -100 }, {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
    gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
      yPercent: 0,
      opacity: 1,
      ease: 'power1.inOut',
    });
    gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
      yPercent: 0,
      opacity: 1,
      ease: 'power1.inOut',
    });
  }, [currentCategory, currentItem]);

  const goToItem = (idx) => {
    const index = (idx + totalItems) % totalItems;
    setCurrentItem(index);
  };

  const current = items[currentItem];
  const prev = items[(currentItem - 1 + totalItems) % totalItems];
  const next = items[(currentItem + 1) % totalItems];

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <h2 id="menu-heading"  className="sr-only" style={{color:'white'}}>Our Menu</h2>

      {/* Category Tabs */}
      <nav className="category-tabs" aria-label="Category Navigation">
        {menuCategories.map((cat, idx) => {
          const active = idx === currentCategory;
          return (
            <button
              key={cat.category}
              className={`${active ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
              onClick={() => {
                setCurrentCategory(idx);
                setCurrentItem(0);
              }}
            >
              {cat.category}
            </button>
          );
        })}
      </nav>

      {/* Item Tabs */}
      <nav className="cocktail-tabs mt-4" aria-label="Item Navigation">
        {items.map((item, idx) => {
          const isActive = idx === currentItem;
          return (
            <button
              key={item.name}
              className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
              onClick={() => goToItem(idx)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows my-4 flex justify-between">
          <button onClick={() => goToItem(currentItem - 1)} className="flex items-center">
            <span>{prev.name}</span>
            <img src="/images/right-arrow.png" alt="previous" className="ml-2" />
          </button>

          <button onClick={() => goToItem(currentItem + 1)} className="flex items-center">
            <span>{next.name}</span>
            <img src="/images/left-arrow.png" alt="next" className="ml-2" />
          </button>
        </div>

        <div className="item flex justify-center mb-6">
          <img src={current.image} alt={current.name} className="object-contain" />
        </div>

        <div className="recipe text-center">
          <div ref={contentRef} className="info mb-2">
            <p>Recipe for:</p>
            <p id="title" className="text-2xl font-bold">{current.name}</p>
          </div>
          <div className="details">
            <h2 className="text-xl font-semibold mb-1">{current.title}</h2>
            <p className="text-base">{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
