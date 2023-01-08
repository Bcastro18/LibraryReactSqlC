import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AllTotal(){
    //biblioteca AXIOS
    const [libraryB, setLibraryB] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:7103/api/LibraryB")
        .then((response)=>{
            setLibraryB((existingData)=>{
              return response.data;
        });
    });
    
    },[])
    return (             
            <Row xs={1} md={3} className="g-4 mt-1">
            {
            libraryB.map((lb) => (
            <Col key={lb.id}>
                <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{lb.nameLib}</Card.Title>
                    <Card.Text>
                        <b>City: </b>{lb.city}                    
                    </Card.Text>
                    <Card.Text>
                        <b>Country: </b>{lb.country}                    
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );

}

export default AllTotal;