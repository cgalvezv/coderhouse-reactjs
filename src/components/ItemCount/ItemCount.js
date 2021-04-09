import React, { useState }  from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const addItem = () => {
        setCount(count + 1);
      };
    
      const removeItem = () => {
        setCount(count - 1);
      };

    return (
        <div className="container">
            <div className="w-100 flex-column align-items-strech">
                <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center">
                    <button disabled={count <= 0} className="btn btn-light" type="button" onClick={removeItem}>-</button>
                    <div>{count}</div>
                    <button disabled={count >= stock} className="btn btn-light" type="button" onClick={addItem}>+</button>
                </div>
                <button disabled={count <= 0} className="btn btn-info w-75" type="button" onClick={ () => onAdd(count) }>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount
