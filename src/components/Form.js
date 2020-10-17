import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap'; 

const Form = ({ city, handleChange, handleClick }) => {
    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Ciudad</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={city} onChange={handleChange} />
            <InputGroup.Append>
                <Button variant="primary" onClick={handleClick}>Clima</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default Form;