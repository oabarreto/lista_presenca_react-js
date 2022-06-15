import React, { useState, useEffect } from 'react';
import './styles.css';

import Card from '../../components/Card';

function Home() {

  const [listName, setlistName] = useState('');
  const [presentUsers, setPresentUsers] = useState([]);
  const [appUser, setAppUser] = useState({
    name:"",
    avatar:"",
  })

  function createUserId() {
    return Math.floor(Math.random() * 9999);
  }

  function addUser() {
    const newPresentUser = {
      name: listName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      id: createUserId(),
    };

    setPresentUsers(prevState => [...prevState, newPresentUser]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/oabarreto')
    .then(response => response.json())
    .then(data => {
      setAppUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, []);

  return (
   <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <div className="status">
          <strong>Hi, {appUser.name}!</strong>
          <small>online</small>
          </div>
          <img src={appUser.avatar} alt="Foto de Perfil" />
        </div>
      </header>

      <input type="text" placeholder="Digite o nome..." onChange={event => setlistName(event.target.value)} />
      <button type="button" onClick={addUser}>Adicionar</button>

      {
        presentUsers.map((pUser) => <Card key={pUser.id} id={pUser.id} name={pUser.name} time={pUser.time} />)
      }

   </div>
  )
}

export default Home;
