import "./App.css"
import TypingAnimation from './Components/TypingAnimation';
import Nav from "./Components/Nav";
import Button from "./Components/Button";
import Text from "./Components/Text";
import MiniContact from "./Components/MiniContact";
import AboutMe from "./Components/AboutMe";
import Hobbies from "./Components/Hobbies";
import Contact from "./Components/Contact";
import { DrawingData } from "./Images/DrawingsData"
function App() {
  return (
    <main>
      <Nav ></Nav>
      <section className="typingAnimationWrapper" id="Inicio">
        <TypingAnimation></TypingAnimation>
        <Text></Text>
        <MiniContact></MiniContact>
        <Button text="Infomación" idNew="#AboutMe"></Button>
      </section>
      <section id="AboutMe" className="AboutMe">
        <AboutMe></AboutMe>
      </section>
      <section className="Hobbies" id="Hobbies">
        <Hobbies></Hobbies>
      </section>
      <section id="Images" className="imageSection">
        <div className="imagesContainer">
          {DrawingData.map((elem) => {
            return (
              <div className="imageContainer">
                <img src={elem.image} className="imageElem" alt="drawing made by Urtats Berrocal" />
              </div>
            )
          })}
        </div>
      </section>
      <section id="Contact" className="Contact">
        <Contact></Contact>
      </section>
    </main>

  );
}

export default App;
