import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Project from "../components/Project";
import { selectAllProjects, getStatusProjects, getErrorProjects, fetchProjects } from "../redux/projectsSlice";

const Projects = () => {
    const dispatch = useDispatch();

    const projects = useSelector(selectAllProjects);
    const projectsStatus = useSelector(getStatusProjects);
    const projectsError = useSelector(getErrorProjects);

    useEffect(() => {
        if(projectsStatus === 'idle') {
            dispatch(fetchProjects());
        }
    }, [projectsStatus, dispatch]);

    let projectsEl = '';
    if(projectsStatus === 'loading') {
        projectsEl = <Loader />
    } else if(projectsStatus === 'succeeded') {
        projectsEl = projects.map(project => (
            <Project project={project} key={project._id} />
        ))
    } else if(projectsStatus === 'failed') {
        projectsEl = projectsError;
    }

    return (
        <div className="projectsPage">
            <h1 className="projectsPage__title"> <span>P</span> <span>R</span> <span>O</span> <span>J</span> <span>E</span> <span>C</span> <span>T</span> <span>S</span></h1>
            <div className="projectsPage__projects">
                {
                    projectsEl
                }
            </div>
        </div>
    )
}

export default Projects;