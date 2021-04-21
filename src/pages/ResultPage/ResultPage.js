import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoSuccesfully from '../../assets/img/tick.png'
import './ResultPage.css';

const ResultPage = ({ titleText, buttonText, redirectPath, useSuccessfullyIcon = false}) => {
    const { orderId } = useParams()
    
    const hasOrderID = () => orderId !== undefined;

    return (
        <div className="container text-center">
            <div className="content_wrappper">
                { useSuccessfullyIcon && <img className="img-responsive logo_size" src={logoSuccesfully} alt="Successfully Icon" /> }
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

export default ResultPage
