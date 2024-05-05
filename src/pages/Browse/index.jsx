import { useEffect, useState } from 'react'
import Cards from './card';
import API from '../../utils/API';
import "./style.css"
import { useParams } from 'react-router-dom'

function Browse(props) {

    const [file, setFile] = useState()
    const [image, setImage] = useState([])
    const params = useParams()
    const [filename, setFilename] = useState()


    const postImage = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", file)
        // formData.append("userId", props.userId)

        console.log("=======================================")
        console.log(file)
        await console.log(formData)

        API.postImage(formData, props.userId)
        alert('image has been posted!')
        setFilename('')
    }

    const handleSubmit = () => {
        // To be written once tags are implemented
    }

    useEffect(() => {
        if (!image) {
            return
        }
        API.getImages().then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [filename])


    return (
        <>
            <div className="mx-auto mb-5 lg:w-2/3 md:w-3/4 w-[90%]" >

                <div className="text-3xl my-4">Search for photos by tags!</div>
                <form className="flex flex-row search-bar-input" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Food, Space, family" onChange={(e) => setSearch(e.target.value)} className="lg:w-1/3 sm:w-full md: w-full" />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-[1rem] mx-[1rem]">
                <div className="flex flex-col gap-4">

                    {image.map((img) => {
                        if (img.column === 1) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId} />
                            )
                        } else { }
                    })}

                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if (img.column === 2) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId} />
                            )
                        } else { }
                    })}

                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if (img.column === 3) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId} />
                            )
                        } else { }
                    })}

                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if (img.column === 4) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId} />
                            )
                        } else { }
                    })}

                </div>


            </div>



        </>


    );
}

// Exports the Browse page
export default Browse;