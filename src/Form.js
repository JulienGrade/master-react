import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: '', firstname: '',skill: ''};
    }
    handleChange= (event)=> {
        console.log(event.target.value);
        // On met a jour le state avec ce que vient de taper l'utilisateur
        // [variale]: value où [variable] est le contenu de la variable et non varibale
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();

        alert('Name: ' + this.state.name)
    }
    render(){
        return(
            <form>
                <h1>Formulaires en React :</h1>
                <label className="mt-5">Nom</label>
                <input name="name" type="text" value={this.state.name}
                onChange={this.handleChange}
                className="form-control" 
                />
                <label>Prenom</label>
                <textarea name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control"></textarea>
                <label>Skill</label>
                <select name="skill" value={this.state.skill} onChange={this.handleChange} className="form-control">
                    <option value=""></option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                </select>
                <button className="btn btn-primary mt-4">Envoyer</button>
                {this.state.name.length > 0 &&  <h2>Bonjour {this.state.name}</h2>}
            </form>
        );
    }
}
export default Form;