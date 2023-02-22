import Section from "../components/Section";
import CardItem from "../components/CardItem";
import Article from "../components/Article";
import ChatifyThumbnail from "../public/thumbnail/chatifythumb.PNG";
import LoggenThumbnail from "../public/thumbnail/LoggenThumbnail.PNG";
function Work() {
  return (
    <Article>
      <Section title="Projects">
        <CardItem title="Chatify" thumbnail={ChatifyThumbnail} id="chatify">
          Full featured social music discovery app with real-time typing built
          in.
        </CardItem>
        <CardItem
          title="Log Template Generator"
          thumbnail={LoggenThumbnail}
          id="logGenerator"
        >
          A Generator for Log Templates used at my Surveillance Job.
        </CardItem>
      </Section>
    </Article>
  );
}

export default Work;
