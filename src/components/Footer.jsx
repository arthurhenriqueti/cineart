import "./Footer.css";

export function Footer() {
    return (
        <footer>
            <div>Desenvolvido por Arthur Henrique</div>
            <div className="socials">
                <a
                    href="https://www.linkedin.com/in/arthurhenriqueti/"
                    target="_blank"
                >
                    <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://github.com/arthurhenriqueti" target="_blank">
                    <i className="ri-github-fill"></i>
                </a>
            </div>
        </footer>
    );
}
