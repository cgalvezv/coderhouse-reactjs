import React from 'react'
import { 
    HomeBanner,
    HomeRandomItem
} from '../../utils';
import { 
    Container
} from 'react-bootstrap';

const HomeContainer = () => {
    return (
        <div>
            <HomeBanner />
            <Container>
                <HomeRandomItem textAlign="left"/>
                <HomeRandomItem textAlign="right"/>
                <HomeRandomItem textAlign="left" isFinalRandomItem={true}/>
            </Container>
        </div>
    )
}

export default HomeContainer
