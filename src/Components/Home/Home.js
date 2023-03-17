import React, { useEffect, useState } from 'react';
import CardBody from '../Card/CardBody';
import './Home.css'


const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1 className=' mx-4 mt-2 text-left text-uppercase font-weight-bolder text-primary'>Learn new skills online with excilent educator</h1>
            <h4 className='text-center'>The world's largest selection of courses</h4>
            <div className="card-container">
                {
                    courses.map(item=><CardBody key={item._id}
                     item={item}
                    ></CardBody>)
                }
            </div>
        </div>
    );
};

export default Home;