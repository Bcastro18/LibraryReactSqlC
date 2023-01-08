import axios from 'axios';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function AddLib(){
    
    const nameLibrary = useRef("");
    const city = useRef("");
    const navigate = useNavigate();
    const country = useRef("");

    function addApi(){

        var payload =
        {
            "nameLib": nameLibrary.current.value,
            "city": city.current.value,
            "country": country.current.value
        }
        axios.post("https:localhost:7103/api/LibraryB",payload)
        .then((Response) =>{
            navigate("/");

        });
    }
    return( 
    <>
        <legend>Add a new Library</legend>
        <Form>
        <Form.Group className="mb-3" controlId="formLibraryName">
            <Form.Label>Library Name</Form.Label>
            <Form.Control as="textarea" rows={3} ref={nameLibrary}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLibraryCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" ref={city}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formLibraryCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" ref={country}/>
        </Form.Group>
        
        <Button variant="primary" type="button" onClick={addApi}>
            Adicionar
        </Button>
        </Form>
    </>
);

}

export default AddLib;