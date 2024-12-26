import './App.css';
import ListProfil from './ListProfil';
import './App.css'
import Formulaire from './Formulaire';
import { useState } from 'react';
function App(){
  const [profils , setProfil]= useState([
    
  ]);
  const ajoutProfil=(profil)=>{
    const newProfils = [...profils , profil];
    setProfil(newProfils);
  };

  const supprimerProfil = (index) => {
    const newProfil = profils.filter((profil , i) => i !== index);
    setProfil(newProfil);
  }
  return(
    <div className='container'>
      {/* <h1 className='text-center my-4'>LISTE DES PROFILS</h1> */}
      {/* <ListProfil/> */} 
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <h1>Liste des profiles</h1> */}
      <Formulaire ajoutProfil={ajoutProfil}/>
      <ListProfil profils={profils} supprimerProfil={supprimerProfil}/>
      </div>
  );
}
export default App;
