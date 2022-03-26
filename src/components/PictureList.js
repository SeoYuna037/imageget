import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components'

const PictureList = () => {
    const [photo, setPhoto]=useState("");
    const ClientID=process.env.REACT_APP_API_KEY;
    const [result, setResult]=useState([]);

    const handleChange=(e)=>{
        setPhoto(e.target.value);
    }
    const handleSubmit=(e)=>{
        const baseUrl="https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+ClientID;
        axios.get(baseUrl)
        .then((response)=>{
            setResult(response.data.results);
        })
    }
    return (
        <Image>
            <ImageSearch>
                <h1>이미지를 검색하세요</h1>
                <input onChange={handleChange} type="text" name='photo' placeholder='Search...' />
                <button onClick={handleSubmit} type='submit'>검색</button>
            </ImageSearch>
            <ImageSearchResult>
                {result.map((photo)=>(
                    <div>
                        <ImageInfo>
                            <img src={photo.urls.small}/>
                            <ImageHover>
                                <div className='user-info'>
                                    <img src={photo.user.profile_image.medium}
                                    alt={photo.user.first_name + " " + photo.user.last_name}/>
                                    {photo.user.first_name + " " + photo.user.last_name}
                                </div>
                                <div className='desc'>{photo.description}</div>
                                <div className='like'>like {photo.likes}</div>
                                <a href={photo.links.download} target="_blank">Download</a>
                                
                            </ImageHover>
                        </ImageInfo>
                    </div>
                ))}
            </ImageSearchResult>
        </Image>
        
    )
}

export default PictureList

const Image = styled.div`
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageSearch = styled.div`
    text-align: center;
    padding: 1rem;
    background-color: #477BFF;
    height: 500px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: #fff;
    h1{
        font-size: 3rem;
    }
    input[type='text']{
        width: 400px;
        font-size: 2rem;
        padding: 1rem;
        border: none;
        outline: none;
        border-radius: 20px;
        margin-top: 1rem;
    }
    button{
        width: 400px;
        height: 50px;
        font-size: 1.5rem;
        background-color: #fff;
        border: none;
        border-radius: 20px;
        transition: 0.3s;
        :hover{
            background-color: #A4BEFF;
            color: #fff;
            border: 1px solid #fff;
        }
    }
`
const ImageSearchResult = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    img{
        width: 350px;
        height: 350px;
        object-fit: cover;
    }
`
const ImageInfo = styled.div`
    margin: 1rem;
    width: 700px;
    height: 350px;
    display: flex;
    background-color: #fff;
    border: 1px solid #477BFF;
    position: relative;
`
const ImageHover = styled.div`
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    .user-info{
        font-weight: 600;
        font-size: 1.1rem;
    }
    .user-info img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .desc{
        width: 300px;
        color: #555;
    }
    .like{
        border-radius: 20px;
        border: 1px solid #477BFF;
        background-color: #477BFF;
        color: #fff;
        margin: 1rem;
    }
    a{
        border: 1px solid #477BFF;
        padding: 0 6rem;
        color: #477BFF;
        border-radius: 20px;
        transition: 0.5s;
        :hover{
            background-color: #477BFF;
            color: #fff;
        }
    }
`