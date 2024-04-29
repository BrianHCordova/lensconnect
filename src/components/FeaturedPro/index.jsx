import React, { useRef } from 'react';

const featured = [
  {
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
    <div className='featured-component'>
      {/* Existing card component */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{user.username}</h2>
          <p>Rating: {user.rating}</p>
          <p>About Me: {user.about}</p>
          <p>Service Location: {user.servelocation}</p>
          <p>Specialties: {user.specialties}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">To My Page</button>
          </div>
        </div>
      </div>
        
      {/* Carousel */}
      <div className="carousel-container relative text-center">
        <div className="carousel rounded-box" ref={carouselRef}>
          {/* Carousel items here */}
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
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
        </div>

        {/* Navigation buttons */}
        <div className="carousel-navigation m-0-5">
  <button className="btn btn-primary mr-5" onClick={scrollLeft}>{"<"}</button>
  <button className="btn btn-primary" onClick={scrollRight}>{">"}</button>
</div>
      </div>
    </div>
  );
}
