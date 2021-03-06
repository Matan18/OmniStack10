import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './componentes/DevItem'
import DevForm from './componentes/DevForm'


function App() {
  const[devs, setDevs]=useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data)
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data)
    setDevs([...devs, response.data]);
  }
  async function handleDeleteDev(e){
    await api.delete(`/destroy/${e.dev.github_username}`)
    const response = await api.get('/devs');
    setDevs(response.data)
  }
  return(
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev}/>
    </aside>
    <main>
      <ul>
        {devs.map(dev=>(
          <DevItem key ={dev._id} dev={dev} onClickCapture={handleDeleteDev}/>
        ))}
      </ul>
    </main>
  </div>
  )
}

export default App;




// Componente: bloco isolado de html, css e js onde não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)