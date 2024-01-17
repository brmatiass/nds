import React from 'react'
import { ContentContainer } from './Style'

const Content = ( props ) => {
    return (
        <ContentContainer sidebar={props.showMenu}>
            { props.children }
        </ContentContainer>
    )
}

export default Content
