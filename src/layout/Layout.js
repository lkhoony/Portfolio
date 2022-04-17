import React, {useState} from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Contents } from './LayoutStyles'

export const Layout = ({children}) => {

    const [isShown, setIsShown] = useState(false);

    const toggleHeader = () => {
        setIsShown(!isShown);
    }
    
    return (
        <Container>
            <Header isShown={isShown} toggleHeader={toggleHeader}/>
            <Contents isShown={isShown}>{children}</Contents>
            {/*<Footer/>*/}
        </Container>
    )
}
