import { Hooks } from "./Hooks";


export const HeaderLoco = () => {
    let nombre = 'Fernando Schwalb';

    const handleClick = ( e ) => {

        const name = e.target.getAttribute('name');

        if ( name === "Primary" ) {
            alert('Hola! Soy el botón Primary')
        }

    };

    const handleChange = ( e ) => {

        console.log( e.target.value );

    };

    return (
        <div className="p-2">
            <h1>Hola Perris, mi nombre es { nombre }</h1>
            <button 
                className="btn btn-outline-primary my-3" 
                name="Primary" 
                onClick={ handleClick }
            >Pinchame</button>
            <input 
                type="text" 
                className="form-control form-control-lg"
                placeholder="Input here..." 
                onChange={ handleChange }
            />
            <Hooks />
        </div>
    );
};
