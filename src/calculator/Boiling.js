import React from 'react';

class Boiling extends React.Component{
    render(){
        if(this.props.celsius >= 100){
            return <p>L'eau va bouillir !</p>
        }
        return <p>L'eau ne va pas bouillir...</p>
    }
}
export default Boiling;