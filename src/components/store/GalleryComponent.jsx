function GalleryComponent(props){
    return (
        <li key={props.title} className="caroussel-element transform transition duration-200 ease-in-out hover:scale-105">
            <a href={props.title} className="hover:underline">
                <img
                    className="max-h-20"
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