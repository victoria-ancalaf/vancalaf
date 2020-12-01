import React from 'react'

const Welcome = () => {
    return (
        <WelcomeContainer>
            <WelcomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </WelcomeBg>
        </WelcomeContainer>
    )
}

export default Welcome
