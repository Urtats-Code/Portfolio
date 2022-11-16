import "../ComponentCss/Nav.css"


setTimeout(() => {
    let nav = document.getElementId("nav");
    if (window.scrollY > nav.scrollHeight) {
        nav.classList("scrolled")
    }
}, 5)


const Nav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><a className="navElement" href="#Inicio"> .inicio()</a></li>
                <li><a className="navElement" href="#AboutMe"> .aboutMe()</a></li>
                <li><a className="navElement" href="#Hobbies"> .hobbies()</a></li>
                {/* <li><a className="navElement" href="#Contact"> .contacto()</a></li> */}
            </ul>
        </nav>
    )
}

export default Nav;