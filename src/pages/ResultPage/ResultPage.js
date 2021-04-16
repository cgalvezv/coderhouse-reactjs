import React from 'react';
import { Link } from 'react-router-dom';
import logoSuccesfully from '../../assets/img/tick.png'
import './ResultPage.css';

const ResultPage = ({ titleText, buttonText, redirectPath, useSuccessfullyIcon = false}) => {
    return (
        <div className="container text-center">
            <div className="content_wrappper">
                { useSuccessfullyIcon && <img className="img-responsive logo_size" src={logoSuccesfully} alt="Successfully Icon" /> }
                <h1 className="display-4">{titleText}</h1>
                <br></br>
                <Link className="btn btn-primary" to={redirectPath}>{buttonText}</Link>
            </div>
        </div>
)
}

export default ResultPage
