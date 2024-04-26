import { useState } from 'react'
import Card from './card';
import API from '../../utils/API';

function Browse() {

    const [file, setFile] = useState()

    const postImage = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", file)

        API.postImage(formData)
        alert('image has been posted!')
    }

    const getImages = async () => {
        await fetch(`http://localhost:3000/api/image`, {
            method: "GET"
        })
    }
    
    // HTML
    return (
        <>
            <h1>BROWSE</h1>
            <form onSubmit={postImage}>
                <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*" />
                <input type="submit" value="submit" />
            </form>
            {/* each card is imported as passed imaged and title props, these are just... placeholders */}
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
        </>

    );
}

// Exports the Browse page
export default Browse;