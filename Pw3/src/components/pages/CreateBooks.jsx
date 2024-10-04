import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name]: event.target.value});
        console.log(book)
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createBook(book);
    }
    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createBook(book) {

        // console.log(JSON.stringify(book))

        fetch('http://localhost:5000/inserirLivro', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(book)
        })
            .then(
                (resp) => resp.json()
            )
            .then(
                (data) => {
                    console.log(data);
                    //navigate('/', { state: 'LIVRO CADASTRADO COM SUCESSO!' });
                }
            )
            .catch(
                (err) => { console.log(err) }
            )
    }
    const [categorias, setCategorias] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/listagemCateorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Acess-Controll-Allow-Origin': '*',
                'Acess-Controll-Allow-Headers': '*',
            }
        }).then(
            (response) =>
                response.json()
        ).then(
            (data) => {
                console.log('DATA: ' + data.data[0].nome_categoria)
                setCategorias(data.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }, []);

    return (


        <section className={style.create_books_container}>
            <form onSubmit={submit}>
                <Input
                    type='text'
                    name='nome_livro'
                    placeHolder='Digite o nome do livro'
                    text='Título do livro'
                    handlerChangeBook={handlerChangeBook}
                />
                <Input
                    type='text'
                    name='autor_livro'
                    placeHolder='Digite o nome do autor'
                    text='Autor do livro'
                    handlerChangeBook={handlerChangeBook}
                />
                <Input
                    type='text'
                    name='descricao_livro'
                    placeHolder='Digite a descrição do livro'
                    text='Descrição do livro'
                    handlerChangeBook={handlerChangeBook}
                />

                <Select
                    name='Categoria'
                    text='Escolha a categoria do livro'
                    options={categorias}
                />

                <Button
                    rotulo='Cadastrar Livro'
                />
            </form>
        </section>
    )
}

export default CreateBooks  