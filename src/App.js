import { Button, Typography } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="box">
        <div className="inner-box">
          <Typography variant="h4" style={{ color: "white" }}>
            Welcome to the Round 2
          </Typography>
          <Typography style={{ color: "white" }}>
            Please select your branch and proceed to the round 2
          </Typography>
          <div>
            <a href="https://extendedforms.io/form/9338bbc7-f1c0-4501-8d9b-779e50a55f7a/login">
              <Button className="btn" variant="contained" color="primary">
                CSE
              </Button>
            </a>
          </div>
          <div>
            <a href="https://extendedforms.io/form/9337dc03-292e-4549-9017-cd755983ce3a/login">
              <Button className="btn" variant="contained" color="secondary">
                Mechanical
              </Button>
            </a>
          </div>
          <div>
            <a href="https://extendedforms.io/form/9337b3e7-1b1b-489d-9fb5-c45bda30f46c/login">
              <Button className="btn btn-info" variant="contained">
                Electrical
              </Button>
            </a>
          </div>
          <div>
            <a href="https://extendedforms.io/form/9337c589-5367-454d-9ee8-b3be7bc13cfa/login">
              <Button className="btn btn-success" variant="contained">
                ECE
              </Button>
            </a>
          </div>
          <div>
            <a href="https://extendedforms.io/form/9337a0c8-a1e0-4561-aeae-e6ee8c5d0a62/login">
              <Button className="btn btn-warning" variant="contained">
                Civil
              </Button>
            </a>
          </div>
        </div>
      </div>
      <footer>Created By Prashant Bansal</footer>
    </div>
  );
}

export default App;
