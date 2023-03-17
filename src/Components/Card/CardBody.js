import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardBody = ({item}) => {
   const {title,rating,review,name,picture,_id}=item;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '190px' }} variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          by {name}
        </Card.Text>
        <Button className="mx-auto d-block" variant="primary" > <Link className='text-decoration-none text-light' to={'/course/'+_id}>Get this course</Link></Button>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
      <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <FaStar className='text-warning me-2'></FaStar>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{review}</span>
                </div>
      </Card.Footer>
    </Card>
    );
};

export default CardBody;