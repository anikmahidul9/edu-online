
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import CardBody from '../Card/CardBody';

const Category = () => {
    const categories = useLoaderData();

    useTitle("Category");
    return (
     
            <div className='card-container'>
                {
                    categories.map(item=><CardBody
                    key={item._id}
                    item={item}
                    ></CardBody>)
                }
            </div>
        
    );
};

export default Category;