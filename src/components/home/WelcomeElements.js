import styled from 'styled-components'



export const WelcomeContainer = styled.div`
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    background: #FBF8FF;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const WelcomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #FBF8FF;
`

export const WelcomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const WelcomeH1 = styled.h1`
    font-family: "Thasadith", sans-serif;
    font-style: normal;
    font-weight: 100;
    color: #4931A2;
    font-size: 3.3125rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 45px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const WelcomeH2 = styled.h2`
    font-family: "Sarabun", sans-serif;
    font-weight: 100;
    /* margin-top: 72px; */
    color: #9E7FE7;
    font-size: 31px;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`