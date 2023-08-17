import React from 'react'
import { Color } from 'three'

function Playground({arr}) {
    var array = [];
    var size = (30/arr.length)
    arr.map((val,key)=>{
        array.push(<div key={key} className='bar' style={{width:`${(100-(0.16*arr.length))/arr.length}vw`,height:`${(val/10)}%`,fontSize:`${size}rem`,backgroundColor:'orange'}}>{val}</div>);
    });
  
  return (
    <div className='playground'>
        {array}
    </div>
  )
}

export default Playground
