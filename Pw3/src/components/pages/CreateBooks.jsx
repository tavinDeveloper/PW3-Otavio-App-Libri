import React from "react";
import { useState, useEffect } from "react";
import style from './CreateBooks.module.css'
import Input from "../forms/Input"
import Select from "../forms/Select"
import Button from "../forms/Button"

const CreateBooks = () => {

const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/listagemCateorias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Headers': '*',

      }
    }).then(
      (resp) => 
        // console.log('Running' + resp)
        resp.json()
      
    ).then(
      (data) =>{
        console.log('DATA: ' + data.data[3].nome_categoria)
        setCategorias(data.data)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  },[]);

  return (
    <section className={style.create_book_container}>
      <h1>CADASTRO DE LIVROS</h1>

      <Input
        type='text'
        name='txt_livro'
        text='Título do Livro:'
        placeHolder='Digite o nome do seu livro aqui' />

      <Input
        type='text'
        name='txt_autor'
        text='Nome do autor:'
        placeHolder='Digite o nome do autor' />

      <Input
        type='text'
        name='txt_descricao_livro'
        text='Descrição do Livro'
        placeHolder='Descricao do livro' />

      <Select
        name='Categoria'
        text='Escolha uma categoria'
        options={categorias}
      />

      <Button
        rotulo="Cadastrar Livro"
      />

    </section>
  )
}


export default CreateBooks