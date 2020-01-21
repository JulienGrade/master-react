import React from 'react';

class FormContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mail: '',
            subject: "",
            message: '',
        };
    }
    isvalidForm = () => {
        let isValid = true;
        
        if (!RegExp('^[a-z0-9-_]+@[a-z0-9-_]+\\.[a-z]+$').test(this.state.mail)) {
            isValid = false;
          }
        if(this.state.subject.length < 4){
            isValid = false;
        }
        if(this.state.message.length < 3){
            isValid = false;
        }
        return isValid;
    }
    isvalidMessage = ()=> {
        let isValid= true;
        if(this.state.message && this.state.message.length < 3){
            isValid= false;
        }
        return isValid;
    }



    handleChange= (event)=> {
        console.log(event.target.value);
        // On met a jour le state avec ce que vient de taper l'utilisateur
        // [variale]: value où [variable] est le contenu de la variable et non varibale
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // On peut mettre une requete ajax pour envoyer un mail
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Keep in touch</h1>
                    <label>User Mail</label>
                    <input placeholder="Saisissez votre email" name="mail" type="mail" className="form-control" value={this.state.mail} onChange={this.handleChange}/>
                    <label>Subject</label>
                    <select name="subject" className="form-control" value={this.state.subject} onChange={this.handleChange}>
                        <option value="">Select a subject</option>
                        <option value="demande">Demande</option>
                        <option value="contact">Contact</option>
                        <option value="information">Information</option>
                    </select>
                    <label>Message</label>
                    <textarea placeholder="Saisissez votre message" name="message" className="form-control" value={this.state.message} onChange={this.handleChange}></textarea>
                    {!this.isvalidMessage()&& (
                        <div class="text-danger">Votre message est trop court</div>
                    )}
                    <button type="submit" name="submit" className="btn btn-primary mt-4" disabled={!this.isvalidForm()}>Envoyer</button>
                    {this.state.mail.length > 0 &&  <h2>Email saisi : {this.state.mail}</h2>}
                    {this.state.mail.length > 0 &&  <h2>Sujet choisi : {this.state.subject}</h2>}
                    {this.state.mail.length >= 3 &&  <h2>Message saisi : {this.state.message}</h2>}
                </form>
            </div>
            
        );
    }
}
export default FormContact;