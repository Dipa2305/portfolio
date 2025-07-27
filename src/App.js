// // import React from 'react';
// // import { Container } from '@mui/material';
// // import Header from './components/Header';
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';

// // function App() {
// //   return (
// //     <Container maxWidth="md">
// //       <Header />
// //       <About />
// //       <Projects />
// //       <Contact />
// //       <Footer />
// //     </Container>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Skills from './components/Skills';

// function App() {
//   return (
//     <>
//       <Header />
//       <About />
//       {/* <Skills /> */}
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';
import { scrollSpy } from 'react-scroll';
import Education from './components/Education';

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
  scrollSpy.update();
}, []);

  return (
    <div className="app">
      {/* <Navbar toggleSidebar={() => setOpen(!open)} />
      <div className="main">
        <Sidebar open={open} />
        <div className={`content ${open ? 'shift' : ''}`}> */}
      <Home />
      <Sidebar
        open={isSidebarOpen}
        onOpen={() => setSidebarOpen(true)}
        onClose={() => setSidebarOpen(false)}
      />
      <About />
      <Education/>
       <Skills />
       <Experience />
       <Projects />
       <Achievements />
       <Contact />
      {/* <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact /> */}
      {/* </div>
      </div> */}
    </div>
  );
}

export default App;
