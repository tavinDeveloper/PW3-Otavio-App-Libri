import React from "react";
import Style from './Home.module.css'

const Home = () => {
    return (
        <div className={Style.home_container}>
            <section>
                <h1>Bem Vindo ao <span>LIBRI</span></h1>
                <p>Sua plataforma web de gestão de livros.</p>
                <img src="./book_home.jpg"></img>
            </section>
        </div>
    )
}

export default Home;