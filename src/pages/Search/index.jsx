import Card from "../../pages/Browse/card";
import API from "../../utils/API";
import { useEffect, useState, useRef } from 'react'
import './style.css'
import PhotographerCard from "../../components/PhotographerCard";

function Search() {
    const [photographers, setPhotographers] = useState([])
    const [search, setSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const servelocation = event.target.servelocation.value.toLowerCase();
        const city = event.target.city.value.toLowerCase();
        const specialty = event.target.specialty.value.toLowerCase();
        //if no value is entered in the search fields, an alert will appear
        if (!servelocation && !city && !specialty) {
            alert("Please fill in at least one field");
        }
    }

    useEffect( () => {
        if(!photographers) {
            return
        }
        API.getPhotographers().then((data)=> {
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
                        <input type="text" name="servelocation" placeholder="Location" />
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

                        <PhotographerCard
                        
                        
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