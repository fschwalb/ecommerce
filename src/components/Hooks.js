import { useState } from "react";


export const Hooks = () => {

    const [ cuenta, setCuenta ] = useState(0);

    const handleClick = () => {

        setCuenta( cuenta +1 );

    };

    return (
        <>
            { 
                cuenta === 0
                    ? ( <h2>Arranquemos que me quiero dormir!</h2> )
                    : ( 
                        <div>
                            { 
                                cuenta > 1 
                                    ? ( <h2>Contamos { cuenta } Ovejitas</h2> ) 
                                    : ( <h2>Contamos { cuenta } Ovejita</h2> ) 
                            }
                        </div>
                    )
            }
            
            <button 
                className="btn btn-success my-3"
                onClick={ handleClick }
            >Ovejita +1</button>
        </>
    );
};
