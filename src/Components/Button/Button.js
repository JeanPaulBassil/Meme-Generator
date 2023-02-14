import './Button.css';
import Image from '../../Media/download.png';

export default function Button(){
    return (
        <div className='block-center button'>
                <h4 className='white button-title'>Get a new meme image</h4>
                <img className='framed-pic' src={Image} alt='framed picture'/>
        </div>
    )
}