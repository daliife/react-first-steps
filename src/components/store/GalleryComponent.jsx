function GalleryComponent(props){
    return (
        <li className="caroussel-element transform transition duration-200 ease-in-out hover:scale-105">
            <a href={props.link} target="_blank" rel="noreferrer" className="hover:underline flex items-center flex-col">
                <img
                    className="max-h-10 h-32"
                    src={props.url}
                    alt={props.title}
                />
                <p className="mt-2 text-center font-medium text-sm">
                    {props.title}
                </p>
            </a>
        </li>
    )
}
export default GalleryComponent;