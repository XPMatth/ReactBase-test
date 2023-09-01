import Button from "../button/button"

const sayAlert = (label) => {
 alert(`A label desse botão é: ${Button.defaultProps.label}`)
}

const ButtonChange = () => {
    return (
        <div>
            <Button>
                <button onClick={sayAlert}>clique aqui</button>
            </Button>
        </div>
    )
}


export default ButtonChange