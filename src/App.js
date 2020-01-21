import React from 'react';
import Button from './Button';
import Form from './Form';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Form />
        {/* <Button text="Envoyer" /> */}
      </div>
    );
  }
}

export default App;
