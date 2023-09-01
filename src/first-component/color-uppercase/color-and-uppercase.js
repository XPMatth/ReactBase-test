import React from "react";
import './color-and-uppercase.css'

const UpperColor = ({children, paragraphColor, theTextTransform}) => {
    return (
        <div className="Upper" style={{color: paragraphColor}}>
            <div style={{textTransform: theTextTransform }}>
            {children}
            </div>
        </div>
    )
}

UpperColor.defaultProps = {
    paragraphColor: 'hsl(354, 80%, 45%)',
    theTextTransform: 'uppercase'
}

export default UpperColor;