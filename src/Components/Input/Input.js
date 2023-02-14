import './Input.css';
import Button from '../Button/Button';
import data from '../../memesData';
import React from 'react';


export default function Input() {

    const [currentURL, changeURL] = React.useState(""); 
    
    
    function logRandMeme(){
        const memes = data.data.memes;
        const randMeme = memes[Math.floor(Math.random() * memes.length)];
        changeURL(randMeme.url);
    }
    
    return (
        <div className='input'>
            <input />
            <input />
            <div className='btn' onClick={logRandMeme}>
                <Button />
            </div>
            <img className="meme" src={currentURL}/>
        </div>
    ) 
}
