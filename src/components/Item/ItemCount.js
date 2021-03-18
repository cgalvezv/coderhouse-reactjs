import React, { useState }  from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const addItem = () => {
        setCount(count + 1);
      };
    
      const removeItem = () => {
        setCount(count - 1);
      };

    return (
        <div className="w-25 flex-column align-items-strech">
            <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center">
                <button disabled={count <= 0} className="btn btn-light" type="button" onClick={removeItem}>-</button>
                <div>{count}</div>
                <button disabled={count >= stock} className="btn btn-light" type="button" onClick={addItem}>+</button>
            </div>
            <button disabled={count <= 0} className="btn btn-info w-75" type="button" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
