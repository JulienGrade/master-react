import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <button className="btn btn-primary">
                {this.props.text? (
                    this.props.text
                ) : (
                    'Texte par défaut du bouton'
                )}
            </button>
        );
    }
}

export default Button;