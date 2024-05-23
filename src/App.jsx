import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


function App() {
     
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Product Gallery' title='Product details'/>
        <Campus />
        <Title subTitle='Testimonials' title='what our Client Says'/>
         <Testimonials/>
         <Title subTitle='Contact us' title='Get in Touch'/>
         <Contact />
         <Footer />
      </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App