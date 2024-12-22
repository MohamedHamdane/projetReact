// // Home.js
// import React, { useEffect } from 'react';
// import './Aboutme.css'; // Assuming you have a corresponding CSS file

// const Aboutme = () => {
//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('header nav a');

//     const handleScroll = () => {
//       sections.forEach((sec) => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//           navLinks.forEach((link) => {
//             link.classList.remove('active');
//             const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
//             if (activeLink) activeLink.classList.add('active');
//           });
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="home" id="home">
//       <div className="home-content">
//         <h1>
//           Hi, It&apos;s <span>Mohammed</span>
//         </h1>
//         <h3 className="text-animation">
//           I&apos;m a <span></span>
//         </h3>
//         <p>
//           pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
//           ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
//           pppppppppppppppppp
//         </p>

//         <div className="social-icons">
//           <a href="#">
//             <i className="bx bxl-linkedin"></i>
//           </a>
//           <a href="#">
//             <i className="bx bxl-github"></i>
//           </a>
//           <a href="#">
//             <i className="bx bxl-instagram"></i>
//           </a>
//           <a href="#">
//             <i className="bx bxl-twitter"></i>
//           </a>
//         </div>
//         <div className="btn-group">
//           <a href="#" className="btn">
//             Hire
//           </a>
//           <a href="#contact" className="btn">
//             Contact
//           </a>
//         </div>
//       </div>
//       <div className="home-img">
//         <img src="ps4.jpg" alt="home" />
//       </div>
//     </section>
//   );
// };

// export default Aboutme;







import React, { useEffect } from 'react';
import './Aboutme.css';
import 'boxicons/css/boxicons.min.css';

const Aboutme = () => {
  useEffect(() => {
    const section = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.home-content');

    window.onscroll = () => {
      section.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove('active');
            document
              .querySelector(`.home-content a[href*=${height}]`)
              .classList.add('active');
          });
        }
      });
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>HAMDANE MOHAMED</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p id='p'>
        I am a second-year intern in Web Development (full-stack web option) at the Institute
        Specialized in Applied Technology from Tangier, I have a solid background in computer science,
        particularly in web development and database management. Passionate about
        new technologies, I am constantly striving to expand my technical skills while
        addressing concrete challenges.
        My goal is to actively contribute to innovative projects while
        by consolidating my expertise in web development.
        </p>

        <div className="social-icons">
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="btn-group">
          <a href="#" className="btn2">
            Hire
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>

      {/* <div className="home-img">
        <img src="logo.png" alt="home" />
      </div> */}
    </section>
  );
};

export default Aboutme;
