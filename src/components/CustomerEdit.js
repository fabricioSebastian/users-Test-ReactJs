import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, dni, age }) => {
return(
        <div>
            <h2>Edicion del cliente</h2>
            <h3>Nombre: {name} / DNI: {dni} / Edad: {age}</h3>
        </div>

    );
}

CustomersList.propTypes = {
    dni: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
}

export default CustomerEdit;