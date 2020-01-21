import React from 'react';
import Button from './Button';
import Form from './Form';
import FormContact from './FormContact';
import Calculator from './calculator/Calculator';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Form />
        {/* <Button text="Envoyer" /> */}
        <FormContact />
        <Calculator />
      </div>
    );
  }
}

export default App;
