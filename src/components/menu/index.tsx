import { MenuItem } from "./styles";
import { Container } from "./styles";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContexts";



const items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function Menu() {
    const { menuState, turnMenu } = useContext(MenuContext);
    return (
        <Container menuState={menuState}>
            {items.map(() => (
                <MenuItem>
                    Início
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;