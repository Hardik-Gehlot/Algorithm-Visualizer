import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <div className="welcome-container">
        Welcome To <br></br>
        <span>Algo Visualizer</span><br></br>
        <button className="btn" onClick={()=>{navigate("/searching")}}>Searching</button><br></br>
        <button className="btn" onClick={()=>{navigate("sorting")}}>Sorting</button>
      </div>
      <div className="about-container">
        Here you visualize how algorithms works.
      </div>
    </div>
  )
}

export default Home;