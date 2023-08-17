import React from 'react'
function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="controls">
        <div className="speed">
          <p>Speed: <span id="speedValue">5</span></p>
          <input id="speedSlider" type="range" min="1" max="10" step="1" defaultValue="5" onInput={props.speedRange} />
        </div>
        <div className="size">
          <p>Size: <span id="sizeValue">20</span></p>
          <input id="sizeSlider" type="range" min="5" max="100" step="1" defaultValue="20" onInput={props.sizeRange} />
        </div>
        <div className="generate">
          <button type="button" className='btn-primary' onClick={props.generateNewArray}>Generate Array</button>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder='Number to Search (0)' id='searchNumber'/>
      </div>
      <ul className="algorithms">
        <li className="algo" onClick={props.linearSearch}>Linear Search</li>
        <li className="algo" onClick={props.binarySearch}>Binary Search</li>
      </ul>
      <div id="isRunning" style={{display: "none"}}>false</div>
    </div>
  )
}

export default Navbar
