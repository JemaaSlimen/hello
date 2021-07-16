
import React from 'react';
import omage from "./omage.jpg";
import magee from "./magee.jpg";
import video from './video.mp4';
import './style.css';
function Social (){
    return (

<div> 
<div style={{border:"solid (1px) black",maxWidth:"100vw"}}>

<h1 class="title red">5adija </h1>

<img src= {omage.jpg} alt ="omage"/>

<img src="/magee.jpg" alt = "magee"/>

</div>

<video  className='videoTag' autoPlay loop muted>

<source src={video.mp4} type="video/mp4"/>

</video>  

</div>

    );
}

export default Social;