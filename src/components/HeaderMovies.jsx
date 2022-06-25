import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../styles/global.css";

export function HeaderMovies() {
    return (
        <header>
            <div className="header-area">
                <div className="header-left">
                    CINE<span>ART</span>
                </div>
                <div className="header-right">
                    <Link to="/" className="btn-movies">
                        Início
                    </Link>
                </div>
            </div>
        </header>
    );
}
