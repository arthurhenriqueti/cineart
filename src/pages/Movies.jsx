import { useState, useEffect } from "react";
import { HeaderMovies } from "../components/HeaderMovies";
import { ListMovies } from "../components/ListMovies";
import { Loader } from "../components/Loader";
import axios from "axios";
import "../styles/global.css";
import "./Movies.css";

const baseURL = "https://api.b7web.com.br/cinema/";

export function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMovies();
    }, []);

    async function loadMovies() {
        setLoading(true);
        const response = await axios.get(baseURL);
        setMovies(response.data);
        setLoading(false);
    }

    return (
        <>
            <HeaderMovies />
            <main className="main-movies">
                <section className="main-movies-area">
                    <div className="main-movies-title">
                        <h1>Lançamentos</h1>
                    </div>
                    {loading ? (
                        <div className="main-movies-loader">
                            <div>
                                <Loader />
                            </div>
                        </div>
                    ) : (
                        <div className="main-movies-releases">
                            {movies.map((item, index) => {
                                return <ListMovies item={item} key={index} />;
                            })}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
