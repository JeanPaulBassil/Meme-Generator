import './MemeGen.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';

export default function MemeGen(){
    return (
        <div className="meme-gen">
            <Header />
            <Body />
        </div>
    )
}