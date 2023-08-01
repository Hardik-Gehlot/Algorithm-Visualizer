import Button from "./Button.js";
import { useNavigate } from "react-router-dom";

export function useGotoDocs() {
  const navigate = useNavigate();
  const gotoDocs = () => {
    navigate("/algorithms");
  };
  return gotoDocs;
}

export function useGotoPlayground() {
  const navigate = useNavigate();
  const gotoplayground = () => {
    navigate("/playground");
  };
  return gotoplayground;
}

function Home() {
  const gotodocs = useGotoDocs();
  const gotoplayground = useGotoPlayground();
  
  return (
    <div className="home-container">
      <div className="welcome-container">
        Welcome To <br></br>
        <span>Algo Visualizer</span><br></br>
        <Button text={"Playground"} onClick={gotoplayground}></Button><br></br>
        <Button text={"Read Docs"} onClick={gotodocs}></Button>
      </div>
      <div className="about-container">
        Here you visualize how algorithms works.
      </div>
    </div>
  )
}

export default Home;
