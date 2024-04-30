import Card from "../../pages/Browse/card";
import API from "../../utils/API";
import { useEffect, useState, useRef } from 'react'
import './style.css'
import FeaturedPro from "../../components/FeaturedPro";

function Search() {
    const [photographers, setPhotographers] = useState([])
    const [hide, setHide] = useState(false)
    const [search, setSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const zipCode = event.target.zipCode.value.toLowerCase();
        const city = event.target.city.value.toLowerCase();
        const specialty = event.target.specialty.value.toLowerCase();
        //if no value is entered in the search fields, an alert will appear
        if (!zipCode && !city && !specialty) {
            alert("Please fill in at least one field");
        }
    }
  

    const searchUsers = (e) => {
        // console.log(e.target.value)
        // const value = e.target.value.toLowerCase()
        // for (const photographer of photographers) {
        //     const serveLoc = photographer.ServeLocations
        //     const specialties = photographer.Specialties

        //     const isVisible =
        //         photographer.username.toLowerCase().includes(value) 
        //         // serveLoc?.map((loc)=> {loc.location.toLowerCase().includes(value)}) ||
        //         // specialties?.map((spec)=> {spec.specialty.toLowerCase().includes(value)}) 
            
        //     !isVisible ? photographer.match = false : photographer.match = true
            
        //     console.log(photographer)
        // }
    }




    useEffect( () => {
        if(!photographers) {
            return
        }
        fetch('http://localhost:3000/api/searchusers').then(res=>res.json()).then((data)=> {
            setPhotographers(data)
        })

    }, [])
    // HTML
    return (
        <>
            <div className="search-container">

                <div className="container mx-auto mb-5 w-2/3 " >

                    <div className="text-3xl my-4">Search for photographers!</div>
                    <form className="flex flex-row search-bar-input" onSubmit={handleSubmit}>
                        <input type="text" name="zipCode" placeholder="Zip Code" />
                        <input type="text" name="city" placeholder="City" onChange={(e) => setSearch(e.target.value)} />
                        <input type="text" name="specialty" placeholder="Specialty" />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </div>

                <div className="container mx-auto mb-5 w-2/3">
                    {photographers?.filter((photographer)=> {
                        return search.toLowerCase() === '' 
                        ? photographer
                        : photographer.username.toLowerCase().includes(search)
                        
                    }).map((photographer) => {
                        return <>

                        <FeaturedPro
                        
                        
                        username={photographer.username}
                        bio={photographer.biography}
                        userId={photographer.id}
                        serveloc={photographer.ServeLocations}
                        spec={photographer.Specialties}
                        />
                        </>
                        
                    })}
                </div>
            </div>
        </>
    );
}

// Exports the Search page
export default Search;