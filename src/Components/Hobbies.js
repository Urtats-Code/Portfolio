import "../ComponentCss/Hobbies.css"
import HobbieA from "./HobbieA";
import Button from "./Button";
import HobbieB from "./HobbieB";
const Hobbies = () => {
    return (
        <section>
            <h1> .hobbies()</h1>
            <p className="pHobbies"> Además de la programación, me gusta disfrutar de mi tiempo libre realizando diferentes actividades.Una de las más destacables sería la de dibujo artístico en la que llevo más de 4 años. Si te interesa haciendo click aquí puedes disfrutas de algunos de mis dibujos: </p>
            <HobbieA text="imagenes" link="#Images"></HobbieA>
            <p className="pHobbies"> Siempre me ha gustado la mecanografía asi que regularmente practico y mejoro día tras día. Aquí mi perfil de monkeytype por si quereis echarle un ojo:</p>
            <HobbieB text="Perfíl" link="https://monkeytype.com/profile/Urtats"></HobbieB>
            <p className="pHobbies"> Asimismo, me gusta la cocina y la gastronomía, trato de aprender cosas nuevas cada vez que puedo. Además, procuro mantenerme saludable y por eso práctico calistenia en mi día a día. Por otro lado, llevo haciendo fotos y disfrutando de la fotografia desde que conseguí mi primera cámara. Por último, añado que, siempre que puedo, hago escapadas al monte para hacer diferentes rutas. </p>
            <div className="buttonContainer">
                <Button text="Atras" idNew="#AboutMe"></Button>
            </div>
        </section>
    )
}

export default Hobbies;