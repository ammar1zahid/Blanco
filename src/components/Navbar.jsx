// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react'

// import { navLinks } from '../../constants/index.js'

// import './Navbar.css'; // ✅ add this


// const Navbar = () => {
//  useGSAP(() => {
// 	const navTween = gsap.timeline({
// 	 scrollTrigger: {
// 		trigger: 'nav',
// 		start: 'bottom top'
// 	 }
// 	});
	
// 	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
// 	 backgroundColor: '#00000050',
// 	 backgroundFilter: 'blur(10px)',
// 	 duration: 1,
// 	 ease: 'power1.inOut'
// 	});
//  })
 
//  return (
// 	<nav>
// 	 <div>
// 		<a href="#home" className="flex items-center gap-2">
// 		 {/* <img src="/Assets2/png/font.png" alt="logo" />*/}
// 		   <img
//       		src="/Assets2/png/font.png"
//       		alt="Blanco Logo"
//       		className="logo h-20 w-auto ml-6 object-contain"
//     		/>
// 		 {/* <p >BLANCO</p> */}
// 		</a>
		
// 		<ul>
// 		 {navLinks.map((link) => (
// 			<li key={link.id}>
// 			 <a href={`#${link.id}`}>{link.title}</a>
// 			</li>
// 		 ))}
// 		</ul>
// 	 </div>
// 	</nav>
//  )
// }
// export default Navbar






// TEST BELOW:

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index.js';
import './Navbar.css';

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });

    navTween.fromTo(
      'nav',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      }
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo-link">
          <img
            src="/Assets2/png/font.png"
            alt="Blanco Logo"
            className="logo"
          />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

