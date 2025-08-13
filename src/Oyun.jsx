import React from 'react'

function Oyun({oyun}) {
    const {id,name,description,price,link,image} = oyun
    return (
        <div className ='oyun'>
            <div>
                <img src={image}/>
                <h1 className="yazilar">{name}</h1>
                <h3 className= 'aciklama'>{description}</h3>
                <h4>{price}</h4>
                <a href={link}>Satın almak için</a>
            </div>
        </div>
    )
}

export default Oyun
