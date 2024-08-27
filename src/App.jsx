import { useState } from 'react'
import './App.css'
import Header from './Tela Inicial/Header/Header';
import ShowImgInicial from './Tela Inicial/Imagem-Inicial/imgInicial';
import Resumo from './Tela Inicial/Resumo/Resumo';
import NossosEspacos from './Tela-Nossos-Espacos/Nossos-Espacos/Nossos-Espacos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ShowImgInicial />
      <Resumo />
      <NossosEspacos />
    </>
  )
}

export default App
