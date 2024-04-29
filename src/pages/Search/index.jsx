import Card from "../../pages/Browse/card";
import API from "../../utils/API";
import { useEffect, useState, useRef } from 'react'
import './style.css'
import FeaturedPro from "../../components/FeaturedPro";

function Search() {
    const [photographers, setPhotographers] = useState([])


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

    const getPhotographers = async () => {
        await fetch('http://localhost:3000/api/searchusers').then(res=>res.json())
            .then(data => {
                setPhotographers(data)
            })
        }

    

    useEffect(() => {
        getPhotographers()
        console.log(photographers)

    }, [])
    // HTML
    return (
        <>
        <div className="container mx-auto mb-5" >

            <div className="text-3xl my-4">Search for photographers!</div>
            <form className="flex flex-row search-bar-input" onSubmit={handleSubmit}>
                <input type="text" name="zipCode" placeholder="Zip Code" />
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="specialty" placeholder="Specialty" />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>

        <div className="container mx-auto mb-5">
            <FeaturedPro />
        </div>
        </>
    );
}

// Exports the Search page
export default Search;