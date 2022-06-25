import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <header>
            <div className="header-area">
                <div className="header-left">
                    CINE<span>ART</span>
                </div>
                <div className="header-right">
                    <Link to="/movies" className="btn-movies">
                        Filmes
                    </Link>
                </div>
            </div>
        </header>
    );
}
