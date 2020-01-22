import React from 'react';
import './styles.css';

function DevItem({dev, onClickCapture}){
  async function handleSubmit(dev){
    await onClickCapture({
      dev
    });
  }
    return (

        <li className="dev-item">
          <header>
            <img src={dev.avatar_url} alt= {dev.name}/>
            <div className="user-info">
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')}</span>
            </div>
            <button className="botao-excluir" onClickCapture={(e)=>handleSubmit(dev)}>x</button>
          </header>
        <p>{dev.bio}</p>
          <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}
export default DevItem;

