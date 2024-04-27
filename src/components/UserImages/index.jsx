import Card from "../../pages/Browse/card";
import API from "../../utils/API";
import { useEffect, useState, useRef } from 'react'
import './style.css'





function UserImages(props) {

    const [file, setFile] = useState()
    const [image, setImage] = useState([])
    const [attach, setAttach] = useState(false)
    const inputRef = useRef()

    const showAttach = () => {
        attach === false ? (
            setAttach(true)
        ) : (
            setAttach(false)
        )
    }
    const postImage = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", file)

        API.postImage(formData)
        alert('image has been posted!')
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        // console.log(e)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        console.log(e)
    }

    useEffect(() => {
        if (!image) {
            return
        }
        API.getImages().then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [])

    // HTML
    return (
        <div className="image-section">
            <div className=" image-container">
                <div className="individual-image-container">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {image.map((img) => {
                            img.UserId === props.userId ? (
                                <Card image={img.imageUrl} title={img.image} />
                            ) : (
                                <div>
                                    <h3>Click add photos below!</h3>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="addPhotoBtn-Container">
                    {!attach ? (
                        <div className="addPhotoBtn">

                            <button onClick={showAttach} >Add photos</button>
                        </div>
                    ) : (
                    <>
                        <div
                            className="dropzone"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <h1>Drag and Drop Files to Upload</h1>
                            <h1>Or</h1>
                            {/* <label for="file-upload" type="submit" value="submit">
                                <button className="select-files">
                                    Select Files
                                </button>
                            </label> */}
                            <input
                                onChange={e => setFile(e.target.files)}
                                type="file"
                                multiple
                                accept="image/*"
                                hidden
                                ref={inputRef}
                                id="file-upload"
                            />
                            <button className="select-files" onClick={() => inputRef.current.click()}>Select Files </button>
                        </div>
                        <form onSubmit={postImage}>

                            {/*                             
                            <input onChange={e => setFile(e.target.files[0])} type="file" hidden accept="image/*" id="file-upload" /> */}

                            <div className="addPhotoBtn">
                                <button onClick={showAttach} >Add photos</button>

                            </div>
                        </form>
                    </>
                    )}

                </div>


            </div>
        </div>

    );
}

// Exports the UserImages component
export default UserImages;