import React, { Component } from 'react';

class Ability extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "", //name
            description: "", //flavor_text_entries[2] -> flavor_text (english)
            effect: "", //effect_entries
        }
        this.fetchRequest();
    }

    fetchRequest = () => {
        fetch('http://pokeapi.co/api/v2/ability/'+ this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.getAbility(data))
            .catch(error => this.errorHandler());
    }
    
    getAbility = (data) => {
        const newState = {...this.state};
        newState.name = data.name;
        newState.description = data.flavor_text_entries[2].flavor_text;
        newState.effect = data.effect_entries[0].effect;
        this.setState(newState);
        console.log(this.state);
    }

    errorHandler = () => {
        this.setState({name: "Error!!!"});
    }

	render() {
        return (
            <div className="container">
                <h1>{this.state.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p><strong>Description:</strong> {this.state.description}</p>   
                    </div>
                    <div className="col-md-6">
                    <p><strong>Effect:</strong> {this.state.effect}</p>   
                    </div>
                </div>
                <a href="/">Voltar</a>
            </div>
        )
    }
}

export default Ability;
