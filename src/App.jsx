import { useState } from 'react'
import './App.css'
import Header from './Tela Inicial/Header/Header';
import ShowImgInicial from './Tela Inicial/Imagem-Inicial/imgInicial'; // Caminho ajustado
import Resumo from './Tela Inicial/Resumo/Resumo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ShowImgInicial />
      <Resumo />
    </>
  )
}

export default App
