import { useState } from 'react'
import './App.css'
import CardBooks from './components/CardBooks'
import capa1 from './assets/livros/cavernas_aco.jpg'
import capa2 from './assets/livros/correntes_espaco.jpg'
import capa3 from './assets/livros/fundacao_imperio.jpg'

function App() {


  return (
    <>
      <CardBooks
      titulo='Mia Tharifa'
      autor='Haddad Fernando'
      imagem = {capa1}
      />

{/* <CardBooks
      titulo='Os Cinquentas Tons de Cinza'
      autor='Prudence Edwart'
      imagem={capa2}
      />

<CardBooks
      titulo='Meu Taxado Favorito'
      autor='Fernando Haddad'
      imagem={capa3}
      /> */}

      
    </>
  )
}

export default App
