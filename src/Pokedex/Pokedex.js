import React, { Component } from 'react';
import './Pokedex.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Pokemon from './Pokemon';


const Input = (props) => {
	return (
		<input type="number" maxLength="3" className="form-control" placeholder="POKEDEX #" onInput={props.inputed}/>
	);
}

class Pokedex extends Component {

	renderInput = () => {
		return <Input inputed={(event) => this.onInput(event)}/>
	}

	onInput(event) {
		this.props.fetchPosts(event.target.value);
	}

	errorHandler = () => {
		this.setState({
			id: "",
			name: "Not Found",
			image: "https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG",
			height: "",
			weight: "",
			type: [],
			abilities: [{
				url: "",
				name: ""
			}]
		});
	}

	render() {
		return (
			<div className="container">
				{this.renderInput()}
				
				<Pokemon 
					id={this.props.pokemon.id}
					name={this.props.pokemon.name}
					image={this.props.pokemon.image}
					height={this.props.pokemon.height}
					weight={this.props.pokemon.weight}/>
					{/* abilities={this.props.pokemon.abilities}
					type={this.props.pokemon.type} */}
			</div>
		);
	}
}

Pokedex.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	pokemon: PropTypes.object
}

const mapStateToProps = state => ({
	pokemon: state.posts.pokemon
})

export default connect(mapStateToProps, { fetchPosts })(Pokedex);
