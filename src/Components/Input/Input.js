import './Input.css';
import Button from '../Button/Button';
import React from 'react';


export default function Input() {

    const [currentMeme, setCurrentMeme] = React.useState({
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/1bij.jpg"
    });
    
    React.useEffect( _ => {
        console.log("use ");
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, [])

    const [allMemes, setAllMemes] = React.useState([]);

    console.log("rendered");
    function logRandMeme(event){
        const {name, value, type} = event.target;
        setCurrentMeme(prevCurrentMeme => {
            const randMemeURL = allMemes[Math.floor(Math.random() * allMemes.length)]
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
            <div className='output'>
                <img className="meme" src={currentMeme.img}/>
                <p className='topText imgtext'>{currentMeme.topText.toUpperCase()}</p>
                <p className='bottomText imgtext'>{currentMeme.bottomText.toUpperCase()}</p>
            </div>
        </div>
    ) 
}
