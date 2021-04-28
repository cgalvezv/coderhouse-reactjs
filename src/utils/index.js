import React from 'react';
import { 
    Link,
    useParams,
    useHistory
} from 'react-router-dom';
import logoSuccesfully from '../assets/img/tick.png';
import errorSuccesfully from '../assets/img/error.png';
import backArrow from '../assets/img/back_arrow.png';
import './index.css';
import {  
    Button,
    Image
} from 'react-bootstrap';


export const LoadingPage = () => {
    return (
        <div className="overlay_loading-page">
            <div className="text-center">
                <div className="spinner-grow text-success"role="status"></div>
            </div>
        </div>
    )
}

export const ResultPage = ({ titleText, buttonText, redirectPath, useSuccessfullyIcon = false, useErrorIcon = false}) => {
    const { orderId } = useParams()
    
    const hasOrderID = () => orderId !== undefined;

    const useContentIcon = useSuccessfullyIcon || useErrorIcon;

    const logoContent = useSuccessfullyIcon && !useErrorIcon ? logoSuccesfully : errorSuccesfully;

    return (
        <div className="container text-center">
            <div className="content-wrappper_result-page">
                { useContentIcon && <img className="img-responsive logo-size_result-page" src={logoContent} alt="Content Icon" /> }
                <h1 className="display-4">{titleText}</h1>
                {
                    hasOrderID() && <p className="lead">
                        El código identificador de la orden generada para esta compra es <b>{orderId}</b>. <br/> Gracias por preferirnos
                    </p>
                }
                <br></br>
                { buttonText && <Link className="btn btn-primary" to={redirectPath}>{buttonText}</Link> }
            </div>
        </div>
    )
}

export const GoBackButton = () => {

    const history = useHistory()
    
    return (
        <Button variant="primary" onClick={() => history.goBack()} className="plain_go-back-button">
            <Image src={backArrow} className="img-responsive plain_go-back-img" alt="Go back arrow"/>
        </Button>
    )
}


