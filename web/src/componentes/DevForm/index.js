<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import './styles.css'

function DevForm({onSubmit}){
  const[github_username, setUsername]=useState('');
  const[techs, setTechs]=useState('');
  const[latitude, setLatitude]=useState('');
  const[longitude, setLongitude]=useState('');
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const{latitude, longitude}=position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      console.log(position);
    },(err)=>{
      console.log(err);
    }, {
      timeout:30000,
    });
  }, []);

    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setUsername('');
        setTechs('');
        
    }
    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required
          value={github_username}
          onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required value={techs}
          onChange={e=>setTechs(e.target.value)}/>
        </div>
        <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input type = "number" name="latitude" id="latitude" required value ={latitude}
          onChange={e =>setLatitude(e.target.value)}/>
        </div><div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type = "number" name="longitude" id="longitude" required value={longitude}
          onChange={e=>setLongitude(e.target.value)}/>
        </div>
        </div>
        <button type="submit"> Salvar</button>
      </form>
    )
}
=======
import React, {useState, useEffect} from 'react';
import './styles.css'

function DevForm({onSubmit}){
  const[github_username, setUsername]=useState('');
  const[techs, setTechs]=useState('');
  const[latitude, setLatitude]=useState('');
  const[longitude, setLongitude]=useState('');
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const{latitude, longitude}=position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    },(err)=>{
    }, {
      timeout:30000,
    });
  }, []);

  async function handleSubmit(e){
      e.preventDefault();
      await onSubmit({
          github_username,
          techs,
          latitude,
          longitude,
      });

      setUsername('');
      setTechs('');
      
  }
  return(
      <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input name="github_username" id="github_username" required
        value={github_username}
        onChange={e=>setUsername(e.target.value)}/>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" required value={techs}
        onChange={e=>setTechs(e.target.value)}/>
      </div>
      <div className="input-group">
      <div className="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input type = "number" name="latitude" id="latitude" required value ={latitude}
        onChange={e =>setLatitude(e.target.value)}/>
      </div>
      <div className="input-block">
        <label htmlFor="longitude">Longitude</label>
        <input type = "number" name="longitude" id="longitude" required value={longitude}
        onChange={e=>setLongitude(e.target.value)}/>
      </div>
      </div>
      <button type="submit"> Salvar</button>
    </form>
  )
}
>>>>>>> 3725d650198039c62d6c0b3b66155515247bc1ca
export default DevForm;