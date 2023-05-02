import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import about from './images/about.png';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
     <Header />
     <Feature />
     <About image={about} title='Recycling for a Green Tomorrow' button='Book Quote'/>
    <Contact />
    </div>
  );
}

export default App;
