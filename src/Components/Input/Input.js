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

    console.log(currentMeme);
    const [allMemeImages, setAllMemeImages] = React.useState(data.data.memes);

    function logRandMeme(event){
        const {name, value, type} = event.target;
        setCurrentMeme(prevCurrentMeme => {
            const randMemeURL = allMemeImages[Math.floor(Math.random() * allMemeImages.length)]
            return {
                ...prevCurrentMeme,
                [name] : type === 'submit' ? randMemeURL.url : value
            }
        });
    }
    
    return (
        <div className='input'>
            <input type="text" value={currentMeme.topText} name="topText" placeholder='Top Text' onChange={logRandMeme}/>
            <input type="text" value={currentMeme.bottomText} name="bottomText" placeholder='Bottom Text' onChange={logRandMeme}/>
            <div className='btn' >
                <Button handleClick={logRandMeme}/>
            </div>
            <img className="meme" src={currentMeme.img}/>
        </div>
    ) 
}
