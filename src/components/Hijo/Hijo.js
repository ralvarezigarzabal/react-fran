import { Nieto } from "../Nieto/Nieto";

export const Hijo = (props) => {

    const {nombre, apellido} = props;

    return (
        <div>
            <h3>Hijo: {nombre} {apellido}</h3>
            <Nieto nombre="Mateo" apellido={apellido}/>
        </div>
    );
};