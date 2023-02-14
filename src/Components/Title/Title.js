import './Title.css';
import Troll from '../../Media/Troll Face.png';

export default function Title(){
    return (
        <div className='title'>
            <img className='troll-face' src={Troll} alt='troll face'/>
            <h3 className='title-name inline'>Meme Generator</h3>
        </div>
    )
}