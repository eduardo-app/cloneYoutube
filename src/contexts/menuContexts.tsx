import { createContext, ReactNode, useState } from "react";



interface StateContextType {
    menuState: boolean;
    turnMenu: () => void;
}

const defaultState = {
    menuState: true,
    turnMenu: () => { },
};

export const MenuContext = createContext<StateContextType>(defaultState);

//export const MenuContext = createContext();

export const MenuStateProvider = ({ children }: { children: ReactNode }) => {
    const [menuState, setMenu] = useState(true);

    const turnMenu = () => {
        setMenu(prevMenu => !prevMenu);
      };

    return (
        <MenuContext.Provider value={{ menuState, turnMenu }}>
            {children}
        </MenuContext.Provider>
    )
}