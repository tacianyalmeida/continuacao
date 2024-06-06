import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ControleLimpeza from "./ControleDeLimpeza"
import Header from "./Header"
import Home from "./Home"
import Planilha from "./Planilha"
import Login from "./Login"



const App = ()=>{
    const [list, setLista ] = useState ([])

    function handleSaveDados(dado){
        let novaLista = [...list]
        novaLista.push(dado)
        setLista(novaLista)
    }
    return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        
        <Route  path="/" element={<Home/>}/>
        <Route  path="/ControleLimpeza" element={<ControleLimpeza saveDados={handleSaveDados}/>} />
        <Route  path="/Planilha" element={<Planilha list={list} />}/>
    </Routes>
    </BrowserRouter>

    )
}
export default App;