import React, { useState } from "react";
function Formulaire({ajoutProfil}){
    const [nom , setNom] = useState('');
    const [age , setAge] = useState('');
    const [profession , setProfession] = useState('');
    const [image , setImage] = useState('');

    const  handSubmit = (event)=>{
        event.preventDefault();
        // create object profil with form's values
        const newProfil = {nom , age , profession , image};
        // call the function ajoutprofil with props to update the list in App
        ajoutProfil(newProfil);
        //reset the value
        setNom(''); 
        setAge('');
        setProfession('');
        setImage('');
    }
    return(
<form onSubmit={handSubmit} id="forml">
    <h1>List profil</h1>
    <label>Nom</label>
    <input id="inputCards" type="text" value={nom} onChange={(e)=>setNom(e.target.value)}></input>
    <label>Age</label>
    <input id="inputCard" type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
    <label>profession</label>
    <input id="inputCards" type="text" value={profession} onChange={(e) =>setProfession(e.target.value)}></input>
    <label>ImgUrL</label>
    <input id="inputCards" type="text" value={image} onChange={(e)=>setImage(e.target.value)}></input>

        <button type="submit" className="btnAjouter">Ajouter Un Profil</button>
</form>

    );  
}
export default Formulaire;