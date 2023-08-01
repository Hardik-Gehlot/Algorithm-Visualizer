import React, { useEffect, useState } from 'react'

export default function SecondDiv({arr}) {
    var array = [];
    arr.map((val,key)=>{
        array.push(<div key={key} className='bar' style={{width:`${(80-(0.16*arr.length))/arr.length}vw`,height:`${val/10}vh`}}>{val}</div>);
    });
  
  return (
    <div className='right'>
        {array}
    </div>
  )
}