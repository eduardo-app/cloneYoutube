import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const ImageBanner = styled.img`
    width: 100%;
    height: 210px;
    border-radius: 20px;
    background-color: darkgray;
    object-fit: cover;
`
export const TitleContainer = styled.div`
    width: 100%;
    padding-top: 10px;
    display: flex;
`

export const ChannelImage = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const VideoTitle = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`