import React, { useRef } from 'react';

const featured = [
  {
    userimage: 'https://source.unsplash.com/random',
    username: 'Eric Lee',
    rating: '5',
    about: "As a full stack developer, I thrive in the dynamic world of technology, where coding and problem-solving are my daily bread and butter. Yet, beyond the lines of code and the intricacies of software development lies a unique passion that sets me apart: my love for capturing the beauty of feet through photography. It may seem like an unexpected juxtaposition, but for me, it's a harmonious blend of my technical expertise and creative expression. Through my lens, I aim to showcase the elegance and diversity of feet, each pair telling a story of its own.",
    servelocation: 'San Francisco, CA',
    specialties: "Full Stack Development, Photography",
  }
];

export default function FeaturedPro() {
  const user = featured[0];
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust this value to scroll the desired amount
        behavior: 'smooth',
      });
    }
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
    <div className='featured-component lg:w-3/4 mx-auto'>
      {/* Existing card component */}
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-b-none">
        <figure className="h-full w-full">
          <img className="h-auto" src={user.userimage} alt="Album"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{user.username}</h2>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Rating:</p>
            <p className="w-3/4">{user.rating}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>About Me:</p>
            <p className="w-3/4">{user.about}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Service Location:</p>
            <p className="w-3/4">{user.servelocation}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4'>Specialties:</p>
            <p className="w-3/4">{user.specialties}</p>
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
