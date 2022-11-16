import "../ComponentCss/AboutMe.css"
import Button from "./Button";

const AboutMe = () => {
    return (
        <section>
            <h1>.aboutMe()</h1>
            <p className="pAboutMe">
                Soy una persona puntual  y motivada que puede trabajar en un entorno ajetreado y producir altos estándares de trabajo. Soy un excelente trabajador en equipo y soy capaz de recibir instrucciones de todos los niveles y construir buenas relaciones de trabajo con todos los compañeros. Soy flexible, confiable y  responsable.
            </p>
            <p className="pAboutMe">
                En cuanto a formación académica refiere, tengo amplia experiencia en los <span className="highLight"> lenguages de programacion</span>: Java, JavaScript, HTML5 , CSS. También con los <span className="highLight"> frameworks</span>: ReactJS, SASS, LESS. Además, en cuanto a <span className="highLight"> estudios técnicos </span>se refiere, ahora mismo me encuentro cursando el segundo año de ingeniería informática. Por último, tengo <span className="highLight"> estudios relacionados</span>  con el diseño, arte y composición. ( <span className="highLight"> Experiencia demostrable en todo lo previamente mencionado</span> ).
            </p>
            <p className="pAboutMe">
                En cuanto a formación lingüistica se refiere, hablo los siguiente <span className="highLight">idiomas</span> : Español (Nativo), Euskera (Nativo), Ingles (C1), Chino (Aprendiendo).
            </p>
            <div className="buttonContainer">
                <Button text="Atras" idNew="#Inicio"></Button>
                <Button text="Continuar" idNew="#Hobbies"></Button>
            </div>
        </section>

    )
}

export default AboutMe;