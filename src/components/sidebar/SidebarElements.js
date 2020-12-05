import styled from 'styled-components'
import { FaTimes, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside`
    display: grid;
    align-items: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #9E7FE7;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #FBF8FF;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #FBF8FF;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
` 

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sarabun", sans-serif;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #FBF8FF;
    cursor: pointer;

    &:hover {
        transition: 0.2 ease-in-out;
    }
`

export const SidebarBtn = styled.div`
    display: flex;
    justify-content: center;
`

export const LinkedinIcon = styled(ImLinkedin)`
    color: #FBF8FF;
`

export const GithubIcon = styled(FaGithubSquare)`
    color: #FBF8FF;
`