import {
    ButtonContainer,
    ButtonIcon,
    Container,
    LogoContainer,
    SearchButton,
    SearchContainer,
    SearchIcon,
    SearchInput,
    SearchInputContainer
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Search from '../../assets/search.png'
import Mic from '../../assets/microfone-gravador.png'
import Logo from '../../assets/YouTube-Logo.png';

function Header() {
    return (
    <Container>
        <LogoContainer>
            <ButtonContainer>
                <ButtonIcon alt="" src={HamburguerIcon}/>
            </ButtonContainer>
            <img
                style={{ cursor: 'pointer', width: '100px' }}
                alt=""
                src={Logo}
            />
        </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
                <SearchInput placeholder="Pesquisar"/>
            </SearchInputContainer>
            <SearchButton>
                <SearchIcon alt="" src={Search}/>
            </SearchButton>
            <ButtonContainer>
                <ButtonIcon alt="" src={Mic}/>
            </ButtonContainer>
        </SearchContainer>
    </Container>
    )
}

export default Header;