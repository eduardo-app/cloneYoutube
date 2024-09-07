import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 56px;
    background-color: #fff;
    padding: 0% 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    z-index: 99;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string, backgroundColor?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 45px;
    margin: ${({ margin }) => margin? margin : 0 };
    background-color: ${({backgroundColor}) => backgroundColor? backgroundColor : '#0000' };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: #bbbb;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
`;

export const SearchInputContainer = styled.div`
    display: flex;
    width: 30vh;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    width: 70px;
    border-radius: 0 40px 40px 0;
    height: 40px;
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SearchIcon = styled.img`
    width: 20px;
`;

export const HeaderButtons = styled.div`
    display: flex;
    justify-content: right;
`;