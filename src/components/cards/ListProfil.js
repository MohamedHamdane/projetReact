import CartProfil from "./CateImage";
import React from "react";
import './App.css';
function ListProfil({profils , supprimerProfil}){
    // const Profils =[
    //     {
    //         nom : 'mohamed',
    //         age : 21,
    //         profession : 'developpeur',
    //         image : "patata.jpeg"
    //     }
        
    // ]
    return(
        <div className="d-flex flex-wrap justify-content-center" >
            {profils.map((profil , index ) => (
                <>

                
                    <div className="card-container">
                    <CartProfil
                        key={index}
                        nom={profil.nom}
                        age={profil.age}
                        profession={profil.profession}
                        image={profil.image}
                    />
                    <button onClick={() => supprimerProfil(index)} id="btnSupp">
                        Supprimer
                    </button>
                    </div>


                </>
            ))}

        </div>
    );
}
export default ListProfil;