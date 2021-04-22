import React from 'react'
import { useParams, Link } from 'react-router-dom';
import logoSuccesfully from '../assets/img/tick.png'
import './index.css'

export const LoadingPage = () => {
    return (
        <div className="overlay_loading-page">
            <div className="text-center">
                <div className="spinner-grow text-success"role="status"></div>
            </div>
        </div>
    )
}

export const ResultPage = ({ titleText, buttonText, redirectPath, useSuccessfullyIcon = false}) => {
    const { orderId } = useParams()
    
    const hasOrderID = () => orderId !== undefined;

    return (
        <div className="container text-center">
            <div className="content-wrappper_result-page">
                { useSuccessfullyIcon && <img className="img-responsive logo-size_result-page" src={logoSuccesfully} alt="Successfully Icon" /> }
                <h1 className="display-4">{titleText}</h1>
                {
                    hasOrderID() && <p className="lead">
                        El código identificador de la orden generada para esta compra es <b>{orderId}</b>. <br/> Gracias por preferirnos
                    </p>
                }
                <br></br>
                <Link className="btn btn-primary" to={redirectPath}>{buttonText}</Link>
            </div>
        </div>
    )
}


