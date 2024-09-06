import React from "react";
import style from './CreateBooks.module.css'
import Input from "../forms/Input"
import Select from "../forms/Select"
import Button from "../forms/Button"

const CreateBooks = () => {
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
        />

        <Button
          rotulo="Cadastrar Livro"
        />

    </section>
  )
}


export default CreateBooks