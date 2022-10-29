import MiyamotoPoster from '../assets/miyamotomusashi.jpg';
import MiyamotoPoster2 from '../assets/miyamotomusashi2.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home__imgs">
                <img src={MiyamotoPoster} alt="miyamoto musashi poster" className="image" />
                <img src={MiyamotoPoster2} alt="miyamoto musashi poster" className="image2" />
            </div>
            <h1 className="home__text">
                <span className="home__text__name">SOUFIANE <br /> ZOUHAIR</span> 
            </h1>
        </div>
    )
}

export default Home;