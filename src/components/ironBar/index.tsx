import { useNavigate } from "react-router-dom";
import {
  ArrowBox,
  ArrowGradientL,
  ArrowGradientR,
  ButtonContainer,
  ButtonIcon,
  ChipContainer,
  ChipTag,
  Container,
} from "./styles";
import Arrow from "../../assets/arrow-icon.png";
import { ArrowContainerL, ArrowContainerR } from "./styles";

const chips = [
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
  { name: "Tudo", link: "/" },
  { name: "Jogos", link: "/" },
  { name: "Música", link: "/" },
];

function IronBar() {
  const navigate = useNavigate();

  const GoToL = () => {
    document.getElementById("IronBar")?.scroll(-200, 0);
  };

  const GoToR = () => {
    document.getElementById("IronBar")?.scroll(+200, 0);
  };


  const teste = document.getElementById("IronBar")?.scrollWidth

  return (
    <Container id="IronBar">
      <ArrowContainerL onClick={GoToL}>
        <ArrowBox>
          <ButtonContainer>
            <ButtonIcon style={{ transform: "scaleX(-1)" }} src={Arrow} />
          </ButtonContainer>
        </ArrowBox>
        <ArrowGradientL />
      </ArrowContainerL>
      <ChipContainer>
        {chips.map((chip) => (
          <ChipTag onClick={() => navigate(chip.link)}>
            <span>{chip.name}</span>
          </ChipTag>
        ))}
      </ChipContainer>
      <ArrowContainerR onClick={GoToR}>
        <ArrowGradientR />
        <ArrowBox>
          <ButtonContainer>
            <ButtonIcon src={Arrow} />
          </ButtonContainer>
        </ArrowBox>
      </ArrowContainerR>
    </Container>
  );
}

export default IronBar;
