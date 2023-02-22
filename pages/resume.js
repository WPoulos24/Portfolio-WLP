import Section from "../components/Section";
import Article from "../components/Article";
import ResumeEmbed from "../components/ResumeEmbed";

function Resume() {
  return (
    <Article>
      <Section title="Resume">
        <div className="invisible">
          <p className="text-justify">
            William Poulos is a software developer and freelancer working in the
            United States.
          </p>
        </div>
        <div>
          <ResumeEmbed />
        </div>
      </Section>
    </Article>
  );
}

export default Resume;
