import { Hijo } from "../Hijo/Hijo";

export const Padre = (props) => {

    const {nombre, apellido} = props;

    return (
        <div>
            <h2>Padre: {nombre} {apellido}</h2>
            <Hijo nombre="Rodrigo" apellido={apellido}/>
        </div>
    );
};