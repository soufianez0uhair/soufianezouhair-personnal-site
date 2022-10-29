import {AiOutlineArrowRight} from 'react-icons/ai';

const Project = ({project}) => {
    return (
        <div className="project">
            <img src={project.imgDesktop} alt={project.title + ' desktop image'} className="project__img" />
            <div className="project__details">
                <h2 className="project__title">{project.title}</h2>
                <p className="project__description">{project.description}</p>
                <div className="project__links">
                    <a href={project.github} className="project__link">Source Code <AiOutlineArrowRight className="icon icon--arrow" /></a>
                    <a href={project.demo} className="project__link">Live Demo <AiOutlineArrowRight className="icon icon--arrow" /></a>
                </div>
            </div>
        </div>
    )
}

export default Project;