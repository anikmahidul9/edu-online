import ReactPDF from '@react-pdf/renderer';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaPrint, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const CardDetails = () => {
    const details = useLoaderData();
 
    useTitle('Corse-Detail');
    return (
        <Card>
        <Card.Img style={{height:'400px'}} variant="top" src={details.picture} />
        <Card.Body>
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>
          by {details.name}
        </Card.Text>
          <Card.Text>
         {details.about}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
      <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <FaStar className='text-warning me-2'></FaStar>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{details.rating}</span>
                </div>
                <div className='d-flex'>
                    <FaPrint  className='me-4'></FaPrint>
                    <FaEye className='me-2'></FaEye>
                    <span>{details.review}</span>
                </div>
      </Card.Footer>
      </Card>
    );
};

export default CardDetails;