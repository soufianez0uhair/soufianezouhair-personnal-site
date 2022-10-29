import LoadingCircle from '../assets/loadingcircle.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={LoadingCircle} alt="loader gif" className="loader__gif" />
        </div>
    )
}

export default Loader;