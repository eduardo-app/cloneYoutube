import VideoComponent from "../../components/videoComponent";
import { Container, VideosContainer } from "./styles";
import { MenuContext } from "../../contexts/menuContexts";
import { useContext } from "react";
import IronBar from "../../components/ironBar";

function Home() {
  const { menuState } = useContext(MenuContext);
  return (
    <Container>
      <IronBar></IronBar>
      <VideosContainer menuState={menuState}>
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
      </VideosContainer>
    </Container>
  );
}

export default Home;
