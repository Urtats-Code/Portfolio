import "../ComponentCss/Button.css"

const Button = ({ ...props }) => {
    return (
        <a className="button" href={props.idNew}>{props.text}</a>
    )
}

export default Button; 