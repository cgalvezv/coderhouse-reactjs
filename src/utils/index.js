import React, { useEffect, useState } from 'react';
import { 
    Link,
    useParams,
    useHistory
} from 'react-router-dom';
import { getItems } from '../services';
import logoSuccesfully from '../assets/img/tick.png';
import errorSuccesfully from '../assets/img/error.png';
import backArrow from '../assets/img/back_arrow.png';
import bannerOne from '../assets/img/banner/banner-1.jpg';
import bannerTwo from '../assets/img/banner/banner-2.jpg';
import banneFour from '../assets/img/banner/banner-4.jpg';
import './index.css';
import { 
    Carousel,
    Col,
    Button,
    Image,
    Row
} from 'react-bootstrap';

const bannerInfoArray = [
    {
        id: 'banner_one',
        title: 'Deportes Apalta',
        subtitle: 'La mejor tienda deportiva de la zona',
        img: banneFour
    },
    {
        id: 'banner_two',
        title: 'Tenemos todo en deporte',
        subtitle: 'Manejamos todo tipo de ropa e implementos deportivos',
        img: bannerTwo
    },
    {
        id: 'banner_three',
        title: 'Además te vestimos',
        subtitle: 'Manejamos tenidas de diferentes estilos',
        img: bannerOne
    },
]

export const HomeBanner = () => {
    return (
        <Carousel fade>
            {
                bannerInfoArray.map(item => 
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img_home-banner"
                            src={item.img}
                            alt={item.id}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}

export const HomeRandomItem = ({ textAlign = 'left', isFinalRandomItem=false}) => {
    const [randomItem, setRandomItem] = useState({})
    useEffect(() => {
        getItems().get()
            .then(querySnapshot => {
                if (querySnapshot.size === 0) return;
                const randomIndex = Math.floor(Math.random() * querySnapshot.size);
                const newRandomItem = { id: querySnapshot.docs[randomIndex].id, ...querySnapshot.docs[randomIndex].data()}
                console.log('newRandomItem', newRandomItem)
                setRandomItem(newRandomItem);
            })
    }, [])

    return (
        <div>
            <hr className="divider_home-random-item"/>
            <Row>
                {
                    textAlign === 'left' &&
                        <Col md="7" className={`text-${textAlign}`}>
                            <h2 className="heading-home_random_item">{randomItem?.title || 'Cargando...'}</h2>
                            <p className="lead">{randomItem?.description || ''}</p>
                        </Col>
                }
                <Col md="5">
                    <Image src={randomItem?.imgUrl} alt={randomItem?.title} fluid thumbnail className="item-detail_img"/>
                </Col>
                {
                    textAlign === 'right' &&
                        <Col md="7" className={`text-${textAlign}`}>
                            <h2 className="heading-home_random_item">{randomItem?.title || 'Cargando...'}</h2>
                            <p className="lead">{randomItem?.description || ''}</p>
                        </Col>
                }
            </Row>
            {
                isFinalRandomItem &&
                    <hr className="divider_home-random-item"/>
            }
        </div>
    )
}


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


