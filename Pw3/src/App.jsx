import { useState } from 'react'
import './App.css'
import CardBooks from './components/CardBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardBooks
      titulo='Mia Tharifa'
      autor='Haddad Fernando'
      />

<CardBooks
      titulo='Os Cinquentas Tons de Cinza'
      autor='Prudence Edwart'
      />

<CardBooks
      titulo='Meu Taxado Favorito'
      autor='Fernando Haddad'
      />

      
    </>
  )
}

export default App
