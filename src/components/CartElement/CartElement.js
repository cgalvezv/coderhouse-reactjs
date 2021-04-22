import React from 'react'

const CartElement = ({ element, removeElement }) => {
    return (
        <div className="col-md-12">
            <div className="card mb-3 card-cart">
                <div className="row g-0">
                    <div className="col">
                        <button type="button" className="btn btn-ligth" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eliminar item" onClick={() => removeElement(element.item?.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <img src={element.item?.imgUrl} className="img-fluid" alt={element.item?.title} />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{ element.item?.title }</h5>
                            <p className="card-text text-muted">{ element.item?.subtitle }</p>
                            <p className="card-text">
                                <small className="text-muted">Precio Unitario: $ {element.item?.price}</small>
                                <br></br>
                                <small className="text-muted">Cantidad: {element.quantity}</small>
                            </p>
                            <p className="card-text">$ { element.item?.price *  element.quantity }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartElement
