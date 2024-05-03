import React, { useRef, useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import Cards from '../../pages/Browse/card';

export default function PhotographerCard(props) {
  const carouselRef = useRef(null);
  const profileUrl = '/profile/' + props.userId
  const [image, setImage] = useState([])
  const [refresh, setRefresh] = useState(true)
  const [profilePic, setProfilePic] = useState([])
  const [exist, setExist] = useState(false)

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
    console.log(props)
    if (!image) {
      return
    }
    API.getImages().then((data) => {
      // console.log(data)
      setImage(data)
    })

    if (props.userId) {
      API.getSingleUserImages(props.userId).then((data) => {
        console.log(data)
        if(data[0]?.id!=null) {
          setExist(true)
        }
        const pfp = data.filter((dat) => (dat.isProfilePic))

        setProfilePic(pfp[(pfp.length - 1)])
        console.log(profilePic)
      })
    }
  }, [props.userId])

  return (
    <div className='featured-component'>
      {/* Existing card component */}
      <div className="card lg:card-side bg-zinc-900 shadow-md shadow-black duration-200 ease-in-out rounded-b-none flex flex-row">
        <figure className="profile-pic-container w-1/4">
          <img className="h-auto" src={profilePic?.imageUrl ? profilePic.imageUrl : '/defaultProfile.png'} alt="Album" className="rounded-[1rem]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">@{props.username}</h2>
          <div className="flex flex-wrap">
            <p className='text-2xl font-bold w-1/4 text-right card-header'>Rating:</p>
            <p className="w-3/4 card-content">{(props.avgRate !== 0) ? props.avgRate : 'No ratings yet'}</p>
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
            <p className="w-3/4 card-content">{props.spec?.map((sp) => { return sp.specialty + ', ' })}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={profileUrl}>
              <button className="btn text-white bg-cyan-800 hover:bg-cyan-500 duration-200 ease-in-out">View Profile</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="carousel-container relative text-center bg-zinc-800 rounded-b-[1rem] shadow-md shadow-black duration-200 ease-in-out">
        <div className="carousel " ref={carouselRef}>
          {/* Carousel items here */}
          {image.map((img) => {
            // console.log(img)
            // console.log(props.userId)
            if (img.UserId === props.userId) {
              
              
              return <div className="carousel-item h-full self-center" key={img.id}>

                <img src={img.imageUrl} alt={img.image} />


              </div>

            }

            else {
              return
            }


          })}

        </div>
        {exist? (<><div className="carousel-navigation m-0-5 absolute top-[43%]">
            <button className="ml-3 btn text-white bg-gray-900/50 hover:bg-gray-700/60 duration-200 ease-in-out mr-5 shadow-black shadow-md" onClick={scrollLeft}>{"<"}</button>
          </div>
          <div className="carousel-navigation m-0-5 absolute top-[43%] right-0">
            <button className="mr-3 btn text-white bg-gray-900/50 hover:bg-gray-700/60 duration-200 ease-in-out shadow-black shadow-md" onClick={scrollRight}>{">"}</button>
          </div></>):( <></>)}
          
        
        {/* Navigation buttons */}
        {/* <div className="carousel-navigation m-0-5">
          <button className="btn  text-white bg-cyan-800 hover:bg-cyan-500 duration-200 ease-in-out mr-5 shadow-black shadow-md" onClick={scrollLeft}>{"<"}</button>
          <button className="btn  text-white bg-cyan-800 hover:bg-cyan-500 duration-200 ease-in-out shadow-black shadow-md" onClick={scrollRight}>{">"}</button>
        </div> */}
      </div>
    </div>
  );
}  
