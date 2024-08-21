import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 5%;
    background-color: #fff;
    padding: 0% 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 45px;
    
    margin: 0 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 30vh;
    height: 35px;
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
    height: 35px;
    border-radius: 0 40px 40px 0;
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