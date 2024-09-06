import styled from "styled-components";


export const Container = styled.header<{menuState: boolean}>`
    width: ${({ menuState }) => menuState? '250px' : '100px' };
    height: 100vh;
    box-sizing: border-box;
    padding: 0 12px 0 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    row-gap: ${({ menuState }) => menuState? '0' : '10px' };
    position: sticky;
    top: 56px;
`;

export const MenuItem = styled.div<{menuState: boolean}>`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: ${({ menuState }) => menuState? 'row' : 'column' };
    justify-content: ${({ menuState }) => menuState? 'any' : 'center' };
    align-items: center;
    font-size: ${({ menuState }) => menuState? '16px' : '10px' };

    &:hover {
        background-color: #e1e1e1;
    }
`

export const ButtonIcon = styled.img<{menuState: boolean}>`
    width: 20px;
    margin: ${({ menuState }) => menuState? '0 10px' : '0' };
`;

export const DivLine = styled.div<{menuState: boolean}>`
    display: ${({menuState}) => menuState? 'block' : 'none'};
    width: 80%;
    height: 2px;
    margin: 5px 0 5px 0;
    background-color: #e1e1e1;
`