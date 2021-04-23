import React, { useState }  from 'react';
import {  
    Container,
    Button
} from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const addItem = () => {
        setCount(count + 1);
      };
    
      const removeItem = () => {
        setCount(count - 1);
      };

    return (
        <Container>
            <div className="w-100 flex-column align-items-strech">
                <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center">
                    <Button variant="light" disabled={count <= 0} onClick={removeItem}>-</Button>
                    <div>{count}</div>
                    <Button variant="light" disabled={ count >= stock } onClick={addItem}>+</Button>
                </div>
                <Button variant="info" className="w-75" disabled={count <= 0} onClick={ () => onAdd(count) }>
                    Agregar al carrito
                </Button>
            </div>
        </Container>
    )
}

export default ItemCount
