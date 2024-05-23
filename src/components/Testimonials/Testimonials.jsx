import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'


const Testimonials = ()=> {
    
    const slider = useRef();
    let tx = 0;

 const slideForward =()=>{
     if(tx > -50){
        tx -=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
 }   
 const slideBackward =()=>{
    if(tx < 0){
        tx +=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
 }  


  return (
    <div className='Testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>NewYork, USA</span>
                            </div>
                        </div>
                        <p>AroPharma professionalism, efficiency, and commitment to quality have exceeded our expectations. We wholeheartedly endorse them as a reliable and high-quality vendor for healthcare service providers.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Smith Jackson</h3>
                                <span>Los Angeles, USA</span>
                            </div>
                        </div>
                        <p>Thank you again for your professionalism and your hard work in finding us the best talent for our company. We are always impressed in AroPharma capability and customer service in everything your team does for us.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Mukesh Goyal</h3>
                                <span>Haryana, India</span>
                            </div>
                        </div>
                        <p>The team at AroPharma does an admirable job of getting the bulk of orders completed prior to closing the books! Thanks a lot!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Rahul kumar</h3>
                                <span>Delhi, INDIA</span>
                            </div>
                        </div>
                        <p>Your team has done a good job.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials