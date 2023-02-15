import './Input.css';
import Button from '../Button/Button';
import data from '../../memesData';
import React from 'react';


export default function Input() {

    const [currentMeme, setCurrentMeme] = React.useState({
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/1bij.jpg"
    }); 
    
    const [allMemeImages, setAllMemeImages] = React.useState(data.data.memes);
    function logRandMeme(){
        const randMeme = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
        console.log(randMeme.url);
        setCurrentMeme(prevCurrentMeme => {
            return {
                ...prevCurrentMeme,
                img: randMeme.url
            }
        });
        console.log(currentMeme.img);
    }
    
    return (
        <div className='input'>
            <input placeholder='Top Text'/>
            <input placeholder='Bottom Text'/>
            <div className='btn' onClick={logRandMeme}>
                <Button />
            </div>
            <img className="meme" src={currentMeme.img}/>
        </div>
    ) 
}
