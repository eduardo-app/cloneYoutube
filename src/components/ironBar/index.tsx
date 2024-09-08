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
import { useState } from "react";

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

const [scroll, setCount] = useState(0);

  const increment = () => {
    setCount(scroll + 400);
  };
  const decrement = () => {
    setCount(scroll - 400);
  };
  document.getElementById("IronBar")?.scroll({ left: scroll, behavior: "smooth" });


  return (
    <Container id="IronBar">
      <ArrowContainerL scroll={scroll} onClick={decrement}>
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
      <ArrowContainerR scroll={scroll} onClick={increment}>
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
