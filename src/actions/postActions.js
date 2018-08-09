import { FETCH_POSTS } from './types';

var timeout = null;

export const fetchPosts = (pokeId) => dispatch => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if (pokeId !== '' && !isNaN(parseInt(pokeId, 0))) {
            fetch('https://pokeapi.co/api/v2/pokemon/'+ pokeId)
                .then(response => response.json())
                .then(data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))

                // .then(data => this.getPokemon(data))
                // .catch(error => this.errorHandler());
        } else {
            console.log("not today");
        }
    }, 500);
}