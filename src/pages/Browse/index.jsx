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

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-[1rem]">
                <div className="flex flex-col gap-4">

                    {image.map((img) => {
                        if(img.column===1) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId}/>
                            )
                        } else {}
                    })}
                   
                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if(img.column===2) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId}/>
                            )
                        } else {}
                    })}
                   
                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if(img.column===3) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId}/>
                            )
                        } else {}
                    })}
                   
                </div>
                <div className="flex flex-col gap-4">
                    {image.map((img) => {
                        if(img.column===4) {
                            return (
                                <Cards key={img.id} imgId={img.id} image={img.imageUrl} title={img.image} userId={img.UserId} username={img.User.username} loggedInUser={props.userId}/>
                            )
                        } else {}
                    })}
                   
                </div>
                   

            </div>



        </>


    );
}

// Exports the Browse page
export default Browse;