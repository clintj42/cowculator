import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <img className="cow" src="./cow.jpeg" alt="cow" />
      <div className="calculator-container">
        <div className="display-container">
          <div className="display"></div>
          <div className="number-operator-container">
            <div className="numbers-container">
              <div>
                <Button>Clear</Button>
              </div>
              <div>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
              </div>
              <div>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
              </div>
              <div>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
              </div>
              <div>
                <Button>0</Button>
                <Button>.</Button>
              </div>
            </div>
            <div className="operators-container">
              <Button>+</Button>
              <Button>-</Button>
              <Button>*</Button>
              <Button>/</Button>
              <Button>=</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
