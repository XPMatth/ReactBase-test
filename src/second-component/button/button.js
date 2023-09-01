import React from "react";
import './button.css'

const Button = ({ children, label }) => {
    return (
        <div className="butt">
            {children}
        </div>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button;