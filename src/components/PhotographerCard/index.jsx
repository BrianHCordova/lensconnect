import React, { useRef, useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Cards from '../../pages/Browse/card';

export default function PhotographerCard(props) {
  const carouselRef = useRef(null);
  const profileUrl = '/profile/' + props.userId
  const [image, setImage] = useState([])
  const [refresh, setRefresh] = useState(true)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust this value to scroll the desired amount
        behavior: 'smooth',
      });
    }
    // console.log(props)
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust this value to scroll the desired amount
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!image) {
      return
    }
    API.getImages().then((data) => {
      // console.log(data)
      setImage(data)
    })
  }, [refresh])

  return (
    <div className='featured-component'>
      {/* Existing card component */}
      <div className="card lg:card-side bg-zinc-900 shadow-xl rounded-b-none">
        <figure className="profile-pic-container">
          <img className="h-auto" src="https://source.unsplash.com/random" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">@{props.username}</h2>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4 text-right card-header'>Rating:</p>
            <p className="w-3/4 card-content">4</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4 text-right card-header'>About Me:</p>
            <p className="w-3/4 card-content">{props.bio}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4 text-right card-header'>Service Location:</p>
            <p className="w-3/4 card-content">{props.serveloc?.map((loc) => { return loc.location + ', ' })}</p>
          </div>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4 text-right card-header'>Specialties:</p>
            <p className="w-3/4 card-content">{props.spec?.map((sp) => { return sp.specialty + ', '})}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={profileUrl}>
              <button className="btn text-white bg-emerald-700 hover:bg-emerald-500 duration-200 ease-in-out">To My Page</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="carousel-container relative text-center">
        <div className="carousel rounded-b-lg" ref={carouselRef}>
          {/* Carousel items here */}
          {image.map((img) => {
            // console.log(img)
            // console.log(props.userId)
            if (img.UserId === props.userId) {
              return <>
                <div className="carousel-item">
                  <img src={img.imageUrl} alt={img.image} />
                </div>
              </>
            }

            else {
              return
            }


          })}
          
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
