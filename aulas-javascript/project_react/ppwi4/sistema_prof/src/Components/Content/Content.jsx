import React from 'react'
import { ContentContainer } from './Style'

const Content = ( props ) => {
    return (
        <ContentContainer>
            { props.children }
        </ContentContainer>
    )
}

export default Content
