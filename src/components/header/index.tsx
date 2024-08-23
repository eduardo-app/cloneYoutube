import {
    ButtonContainer,
    ButtonIcon,
    Container,
    HeaderButtons,
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
import CameraIcon from '../../assets/video.png';
import Bell from '../../assets/sino.png';

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin="0 10px 0 0">
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <SearchIcon alt="" src={Search} />
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px" backgroundColor="#f0f0f0">
                    <ButtonIcon alt="" src={Mic} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={CameraIcon} />
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={Bell} />
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">E
                </ButtonContainer>
            </HeaderButtons>

        </Container>
    )
}

export default Header;