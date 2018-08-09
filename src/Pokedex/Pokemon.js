import React from 'react';

const AbilityLink = (props) => {
    return (
        <div>
            <a href={props.url}>{props.name}</a>
        </div>
    );
}

const pokemon = (props) => {

    let showAbilities = () => {
        /*  a "url" passada em "props.abilities"
            é uma url que vem da API, aqui eu separo o ID que vem
            na string dessa URL para passar como parâmetro e pegar em
            Ability.js */
		// return props.abilities.map((a, i) => {
        //     const url = '/ability/'+a.url.split("/")[6];
		// 	return <AbilityLink key={i} url={url} name={a.name} />
        // });
    }
    
    return (
        <div className="row">
            <div className="col-md-4 main">
                <div className="pokeimg">
                    <img alt="pokemon" src={props.image} />
                </div>
                <h1>{props.name}</h1>
            </div>
            <div className="col-md-8">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>PokeDex</th>
                            <td>{props.id}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>{props.height}</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{props.weight}</td>
                        </tr>
                        {/* <tr>
                            <th>Type</th>
                            <td>{props.type.toString()}</td>
                        </tr>
                        <tr>
                            <th>Abilities</th>
                            <td>{showAbilities()}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default pokemon;