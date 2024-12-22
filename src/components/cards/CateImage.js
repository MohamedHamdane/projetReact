import './App.css';
import React from 'react';
function CartProfil({nom , age , profession , image}){
    const afficherNom = ()=> {
        alert(`vous avez selectionne : ${nom}`)
    }                                                                                   

    return(
        
        <div className="card" style={{width : '18rem' , margin : '1rem'}}>
            <img src={image} className="card-img-top" alt={nom}></img>
            <div className="card-body" >
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">Age : {age}</p>
                <p className="card-text">profession : {profession}</p>
                <button className='btn btn-primary' onClick={afficherNom} id='btnVoir'>Voir plus</button>
            </div>
        </div>
    );
}
export default CartProfil;