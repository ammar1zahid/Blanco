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
    // Enhanced animations with stagger effects
    const tl = gsap.timeline();
    
    tl.fromTo('#title', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.item img', 
      { opacity: 0, scale: 0.8, rotationY: 180 }, 
      { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: 'back.out(1.7)' }, 
      '-=0.4'
    )
    .fromTo('.details h2', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.6'
    )
    .fromTo('.details p', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    )
    .fromTo('.price-badge', 
      { opacity: 0, scale: 0 }, 
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 
      '-=0.2'
    );

  }, [currentCategory, currentItem]);

  const goToItem = (idx) => {
    const index = (idx + totalItems) % totalItems;
    setCurrentItem(index);
  };

  const handleCategoryChange = (idx) => {
    setCurrentCategory(idx);
    setCurrentItem(0);
  };

  const current = items[currentItem];
  const prev = items[(currentItem - 1 + totalItems) % totalItems];
  const next = items[(currentItem + 1) % totalItems];

  return (
    <section id="menu">
      {/* Background Elements */}
      <img 
        id="m-left-leaf" 
        src="/images/left-leaf.png" 
        alt="Decorative leaf" 
        loading="lazy"
      />
      <img 
        id="m-right-leaf" 
        src="/images/right-leaf.png" 
        alt="Decorative leaf" 
        loading="lazy"
      />

      {/* Main Menu Heading */}
      <div className="text-center mb-12">
        <h1 className="menu-heading">Our Menu</h1>
        <div className="w-24 h-1 bg-yellow mx-auto rounded-full"></div>
      </div>

      {/* Category Navigation */}
      <div className="category-tabs">
        {menuCategories.map((cat, idx) => {
          const isActive = idx === currentCategory;
          return (
            <button
              key={cat.category}
              className={`category-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleCategoryChange(idx)}
              aria-label={`View ${cat.category} category`}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Item Navigation Tabs */}
      <div className="cocktail-tabs">
        {items.map((item, idx) => {
          const isActive = idx === currentItem;
          return (
            <button
              key={`${item.name}-${idx}`}
              className={`item-tab ${isActive ? 'active' : ''}`}
              onClick={() => goToItem(idx)}
              aria-label={`View ${item.name}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="content" ref={contentRef}>
        {/* Navigation Arrows */}
        <div className="arrows">
          <button
            onClick={() => goToItem(currentItem - 1)}
            className="nav-button prev-button group"
            aria-label={`Previous item: ${prev.name}`}
          >
            <div className="arrow-icon md:hidden">‹</div>
            <div className="hidden md:flex items-center gap-3">
              <span>‹</span>
              <div className="text-left">
                <div className="text-sm opacity-60">Previous</div>
                <div className="font-medium">{prev.name}</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => goToItem(currentItem + 1)}
            className="nav-button next-button group"
            aria-label={`Next item: ${next.name}`}
          >
            <div className="arrow-icon md:hidden">›</div>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm opacity-60">Next</div>
                <div className="font-medium">{next.name}</div>
              </div>
              <span>›</span>
            </div>
          </button>
        </div>

        {/* Current Item Display */}
        <div className="cocktail item">
          <img
            src={current.image}
            alt={current.title}
            loading="lazy"
            className="menu-item-image"
          />
        </div>

        {/* Item Details */}
        <div className="recipe">
          <div className="info">
            <div className="mb-4">
              <div className="text-sm text-yellow/80 uppercase tracking-wider mb-2">
                Now Serving
              </div>
              <h2 id="title" className="item-name">
                {current.name}
              </h2>
              <div className="price-badge">
                Rs. {current.price.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="details">
            <div className="description-label">About This Item</div>
            <h2 className="item-title">{current.title}</h2>
            <p className="item-description">{current.description}</p>
            
            {/* Additional Info */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/20">
              <div className="text-sm text-white/60">
                Category: <span className="text-yellow">{menuCategories[currentCategory].category}</span>
              </div>
              <div className="text-sm text-white/60">
                Item {currentItem + 1} of {totalItems}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Progress Indicator */}
      <div className="flex justify-center mt-12 gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToItem(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentItem 
                ? 'bg-yellow w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;