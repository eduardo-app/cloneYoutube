import { ButtonIcon, Container, MenuItem } from "./styles";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContexts";
import HomeIcon from "../../assets/home.png"
import LiberyIcon from "../../assets/libary.png"
import HistoryIcon from "../../assets/clock-back.png"
import Bell from '../../assets/sino.png';
import { useNavigate } from "react-router-dom";



const items = [{name: 'Início', link: '/'},{name: 'Biblioteca', link: '/libary'},{name: 'Histórico', link: '/history'}]

function Menu() {
    const navigate = useNavigate()
    const { menuState } = useContext(MenuContext);
    return (
        <Container menuState={menuState}>
            {items.map((item) => (
                <MenuItem menuState={menuState} onClick={() => navigate(item.link)}>
                    <ButtonIcon menuState={menuState} alt="" src={(item.name === "Início")
                        ? HomeIcon
                        : (item.name === "Biblioteca")
                        ? LiberyIcon
                        : (item.name === "Histórico")
                        ? HistoryIcon
                        : Bell} >
                    </ButtonIcon>
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;