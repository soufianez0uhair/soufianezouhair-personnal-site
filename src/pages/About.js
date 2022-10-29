import Alkhawarizmi from '../assets/alkhawarizmi.jpg';
import ElonMuskCover from '../assets/elonmuskposter.jpg';
import TyrionLannister from '../assets/tyrionlannister.jpg';

const About = () => {
    return (
        <div className="about">
            <img src={Alkhawarizmi} alt="alkhawarizmi cover" className="about__img about__img--alkhawarizmi" />
            <img src={TyrionLannister} alt="tyrion lannister cover" className="about__img about__img--tyrion" />
            <img src={ElonMuskCover} alt="elon musk magazine cover" className="about__img about__img--elon" />
            <h2 className="about__text">I'm a FullStack Developer, I use MERN stack to fulfill your technical needs and build the app of your <span>dream</span>.</h2>
        </div>
    )
}

export default About;