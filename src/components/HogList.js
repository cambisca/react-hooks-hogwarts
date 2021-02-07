import React, {useState} from "react"
import HogTile from "./HogTile"

function HogList({hoggies}){

    let allHogs = hoggies.map((hog) => {
        <HogTile name={hog.name} weight={hog.weight} specialty={hog.specialty} greased={hog.greased} medal={hog["highest medal achieved"]}/>
    })
       

    return (
        <div>
            {allHogs}
        </div>
        
    )
}


export default HogList; 