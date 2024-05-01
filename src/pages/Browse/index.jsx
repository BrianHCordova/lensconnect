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

    // const getImages = async () => {
    //     return await fetch(`http://localhost:3000/api/image`, {
    //         method: "GET"
    //     }).then((res)=> {
    //         return res.json()
    //     })
    // }

    useEffect(() => {
        if (!image) {
            return
        }
        API.getImages().then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [filename])

    // const division = Math.floor(image.length/4)    8/4 = 2   division=2
    // const firstCol = []
    // for (let i=0; i<division; i++ ) { firstCol.push(image[i]) }
    // const secondCol = []
    // for (let i=division(2); i<division*2(4); i++ ) { secondCol.push(image[i])}
    // const thirdCol = []
    // for (let i=division*2; i<division*3; i++ ) { secondCol.push(image[i])}



    // HTML
    return (
        <>
            <h1>BROWSE</h1>
            {/* testing route for uploading single image */}
            <form onSubmit={postImage}>
                <input 
                    name="image" 
                    onChange={e => { 
                        setFile(e.target.files[0])
                        setFilename(e.target.files[0].image)
                    }} 
                    type="file" 
                    accept="image/*" 
                    multiple value={filename}/>
                <input type="submit" value="submit" />
            </form>
            {/* each card is imported as passed imaged and title props, these are just... placeholders */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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