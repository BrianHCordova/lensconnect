import Cards from "../../pages/Browse/card";
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
    const handleUpload = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append("multipleFiles", file[i])
        }
        console.log(formData)

        API.postMutlipleImages(formData, props.userId)
        alert('image has been posted!')
        setFile('')
        setAttach(false)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        // console.log(Array.from(e.dataTransfer.files))
        setFile(e.dataTransfer.files)
    }

    useEffect(() => {
        if (!image) {
            return
        }
        API.getImages().then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [file])

    // HTML
    return (
        <div className="image-section">
            <div className=" image-container">
                <div className="individual-image-container">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 image-position">
                        {image.map((img) => {
                            console.log(img)
                            console.log(props.userId)
                            if (img.UserId === props.userId) {
                                return <Cards image={img.imageUrl} title={img.image} />
                            }

                            else {
                                return
                            }


                        })}
                    </div>
                </div>
                <div className="addPhotoBtn-Container">
                    {!attach ? (
                        <div className="addPhotoBtn">

                            <button onClick={showAttach} >Add photos</button>
                        </div>
                    ) : (!file ? (
                        <>
                            <div
                                className="dropzone"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <h1>Drag and Drop Files to Upload</h1>
                                <h1>Or</h1>

                                <input
                                    onChange={e => setFile(e.target.files)}
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    hidden
                                    ref={inputRef}
                                    id="file-upload"
                                    name="multipleFiles"
                                />

                                <button
                                    className="select-files"
                                    onClick={() => inputRef.current.click()}
                                >
                                    Select Files
                                </button>

                            </div>

                            <div className="addPhotoBtn">
                                <button onClick={showAttach} >Close</button>

                            </div>

                        </>) :
                        (
                            <>
                                <div
                                    className="dropzone"
                                >
                                    <ul>
                                        {Array.from(file).map((file, i) => <li key={i}>{file.name}</li>)}
                                    </ul>
                                    <div className="flex">
                                        <button onClick={() => setFile(null)} className="cancel-upload">Cancel</button>
                                        <form onSubmit={handleUpload}>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                hidden
                                                ref={inputRef}
                                                onChange={async e => setFile(e.target.files)}
                                                id="file-upload"
                                                name="multipleFiles"
                                            />
                                            <button type="submit" className="upload-files">Upload</button>
                                        </form>

                                        <button
                                            className="select-files"
                                            onClick={() => inputRef.current.click()}
                                        >
                                            Select Files
                                        </button>
                                    </div>
                                </div>
                                <div className="addPhotoBtn">
                                    <button onClick={showAttach}>Close</button>

                                </div>

                            </>)
                    )}

                </div>


            </div>
        </div>

    );
}

// Exports the UserImages component
export default UserImages;