import React from 'react';
import './slideshow.scss';
import Climb1 from '../../../assets/images/climb1.jpg';
import Climb2 from '../../../assets/images/climb2.jpg';
import Climb3 from '../../../assets/images/climb3.jpg';
import Climb4 from '../../../assets/images/climb4.jpg';
import Climb5 from '../../../assets/images/climb5.jpg';

var slideIndex = 0;
var loaded = false;
showSlides();

window.onload = function(){
  loaded = true;
  showSlides();
}

function showSlides() {
  if(loaded === true){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
}

function slideshow() {
  return (
    <div className="container">
      
      <div className="mySlides fade">
        <img src={Climb1} alt="climb" className="container"/>
      </div>
      <div className="mySlides fade">
        <img src={Climb2} alt="climb" className="container"/>
      </div>
      <div className="mySlides fade">
        <img src={Climb3} alt="climb" className="container"/>
      </div>
      <div className="mySlides fade">
        <img src={Climb4} alt="climb" className="container"/>
      </div>
      <div className="mySlides fade">
        <img src={Climb5} alt="climb" className="container"/>
      </div>

      <div className="text">
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div>

    </div>
  );
}

export default slideshow;