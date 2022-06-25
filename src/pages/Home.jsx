import { Header } from "../components/Header";
import "../styles/global.css";
import "./Home.css";

export function Home() {
    return (
        <>
            <Header />
            <main className="main-home">
                <section className="main-area">
                    <div className="main-title">
                        <h1>Confira aqui os lançamentos.</h1>
                    </div>
                    <div className="main-subtitle">
                        <h2>Informe seu email para receber atualizações!</h2>
                    </div>
                    <div className="main-input-area">
                        <div>
                            <input
                                type="text"
                                placeholder=" nome@email.com.br"
                            />
                        </div>
                        <div>
                            <a href="#" className="btn-submit">
                                <span>Enviar</span>
                                <i className="ri-arrow-right-s-line"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
