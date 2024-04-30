import React, { useRef, useState } from 'react';
import './style.css'


export default function FeaturedPro(props) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust this value to scroll the desired amount
        behavior: 'smooth',
      });
    }
    console.log(props)
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust this value to scroll the desired amount
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='featured-component'>
      {/* Existing card component */}
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-b-none">
        <figure className="profile-pic-container">
          <img className="h-auto" src="https://source.unsplash.com/random" alt="Album"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{props.username}</h2>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Rating:</p>
            <p className="w-3/4">4</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>About Me:</p>
            <p className="w-3/4">{props.bio}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Service Location:</p>
            <p className="w-3/4">{props.serveloc.map((loc)=> {return loc.location})}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Specialties:</p>
            <p className="w-3/4">{props.spec.map((sp)=> {return sp.Specialty})}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn text-white bg-emerald-700 hover:bg-emerald-500 duration-200 ease-in-out">To My Page</button>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="carousel-container relative text-center">
        <div className="carousel rounded-b-lg" ref={carouselRef}>
          {/* Carousel items here */}
          <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
        </div>

          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
          </div> 
          {/* Add more carousel items here */}
        </div>
        {/* Navigation buttons */}
        <div className="carousel-navigation m-0-5">
          <button className="btn  text-white bg-emerald-700 hover:bg-emerald-500 duration-200 ease-in-out mr-5" onClick={scrollLeft}>{"<"}</button>
          <button className="btn  text-white bg-emerald-700 hover:bg-emerald-500 duration-200 ease-in-out" onClick={scrollRight}>{">"}</button>
        </div>
      </div>
    </div>
  );
}  
