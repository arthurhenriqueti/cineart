import "../styles/ListMovies.css";

export function ListMovies(props) {
    return (
        <div className="ListMovies-items">
            <div>
                <img src={props.item.avatar} />
            </div>
            <div>{props.item.titulo}</div>
        </div>
    );
}
