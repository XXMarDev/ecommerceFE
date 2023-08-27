import { useState } from 'react'
import '../styles/ecommerce.css'


function Ecommerce() {

    const [object, setObject] = useState([
        {
            titolo: 'Gaming accessories',
            descrizione: 'Confortevole.',
            prezzo: 24.99,
            recensioni: 2,
            immagine: 'gaming.jpg'
        },
        {
            titolo: 'Electronics',
            descrizione: 'Veloce.',
            prezzo: 24.99,
            recensioni: 4,
            immagine: 'eletronics.jpg'
        },
        {
            titolo: 'Toys',
            descrizione: 'Beautiful.',
            prezzo: 24.99,
            recensioni: 3,
            immagine: 'toys.jpg'
        },
        {
            titolo: 'School accessories',
            descrizione: 'Wow.',
            prezzo: 24.99,
            recensioni: 1,
            immagine: 'school.jpg'
        },
    ])


    return (
        <div>
            <div className='nav'>
                <div>
                    <input type="search" className='search' placeholder='Search Amazon' />

                    <button className='enter'>Enter</button>

                    <div className='logACC'>
                        <p><a href="/accedi" className='log'>Accedi</a></p>
                        <p>
                            <a href="/registrati" className='log'>Registrati</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='contdescAmazon'>
                <p className='descAmazon'>You are on amazon.com. You can also shop on Amazon Italy for millions of products with fast local delivery.</p>
            </div>
            <div className='containerObject'>
                    {
                        object.map(elemento => (
                            <div className="object1">
                                
                                <h1 className='titoloObject'>{elemento.titolo}</h1>
                                
                                <div className='flex justify-around'>
                                <img src={require("../photos/" + elemento.immagine)} alt="" width={360}/>
                                </div>
                                <p className='descObject'>{elemento.descrizione}</p>
                                <p className='prezzo'>${elemento.prezzo}</p>
                                <p className='recensioni'>{elemento.recensioni}/5</p>
                                <div className='containerButton'>
                                <button className='buyObject'>
                        Buy now
                    </button>
                                </div>
                            </div>
                        ))
                    }
                 
                
            </div>
        </div>
    )

}

export default Ecommerce