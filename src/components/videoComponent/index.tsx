import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  TitleContainer,
  VideoTitle,
} from "./styles";

function VideoComponent() {
  return (
    <Container>
      <ImageBanner src="https://th.bing.com/th/id/OIP._HQm34W3CnxWsIRe8n0XmAHaE8?rs=1&pid=ImgDetMain" />

      <TitleContainer>
        <ChannelImage>EP</ChannelImage>
        <TextContainer>
          <VideoTitle>This gonna be mine</VideoTitle>
          <TextCard>Eduardo Pereira</TextCard>
          <TextCard>2.2 mil de visualizações - há 2 horas atrás</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
