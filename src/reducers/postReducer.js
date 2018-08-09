import { FETCH_POSTS } from '../actions/types';

const initialState = {
    pokemon: {
        id: "",
        name: "Not Found",
        image: "https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG",
        height: "",
        weight: "",
        // type: [],
        // abilities: [{
        //     url: "",
        //     name: ""
        // }]
    }
}

const getPokemon = (data) => {
    const newState = {...initialState};
    newState.id = data.id;
    newState.name = data.name;
    newState.image = data.sprites.front_default;
    newState.height = data.height;
    newState.weight = data.weight;
    // data.types.map((t, i) => {
    //     return newState.type.push(t.type.name);
    // });
    // data.abilities.map((a, i) => {
    //     return newState.abilities[i] = a.ability;
    // });
    return newState;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                pokemon: getPokemon(action.payload)
            }
        default: return state;
    }
}