import React, {useState} from "react"

const images = {
    Babe: babe,
    Porkchop: porkchop,
    Cherub: cherub,
    "Piggy smalls": piggy_smalls,
  };

function HogTile({name, weight, specialty, greased, medal}){

    return (
        <div>
            <img src={name}></img>
        </div>
    )
}

export default HogTile;