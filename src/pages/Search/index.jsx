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
        const username = event.target.username.value.toLowerCase();
        const specialty = event.target.specialty.value.toLowerCase();
        //if no value is entered in the search fields, an alert will appear
        if (!servelocation && !username && !specialty) {
            alert("Please fill out the field");
        }
    }

    useEffect(() => {
        if (!photographers) {
            return
        }
        API.getPhotographers().then((data) => {
            setPhotographers(data)
            console.log(data)
        })

    }, [])
    // HTML
    return (
        <>
            <div className="search-container">

                <div className="container mx-auto mb-5 lg:w-2/3 md:w-3/4 w-[90%]" >

                    <div className="text-3xl my-4">Search for photographers!</div>
                    <form className="flex flex-row search-bar-input" onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Username, location, or specialties!" onChange={(e) => setSearch(e.target.value)} className="lg:w-1/3 sm:w-full md: w-full" />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </div>

                <div className="container mx-auto mb-5 lg:w-2/3 md:w-3/4 w-[90%]">
                    {photographers?.filter((photographer) => {
                        const serveloc = photographer.ServeLocations.map((loc) => (loc.location) ).join(';')
                        const spec = photographer.Specialties.map((spec) => (spec.specialty) ).join(';')
                       
                        return search.toLowerCase() === ''
                            ? photographer 
                            : (photographer.username.toLowerCase().includes(search) || 
                            serveloc.toLowerCase().includes(search) || 
                            spec.toLowerCase().includes(search))

                    }).map((photographer) => {
                        return <>
                            <PhotographerCard
                                key={photographer.id}
                                avgRate={photographer.averageRating}
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