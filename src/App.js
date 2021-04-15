import { useTranslation } from "react-i18next";
import ContactsList from "./components/ContactsList";
import Container from "./components/Container";
import Footer from "./components/Footer";
import LanguageSelector from "./components/LanguageSelector";
import Section from "./components/Section";

const App = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguageSelector />
      <Section>
        <h1>{t("Hi 👋")}</h1>
        <h2>{t("welcome to my website!")}</h2>
      </Section>
      <Section>
        <h2 dangerouslySetInnerHTML={{ __html: t("I am Filippo Finke, I come from Ticino") }}></h2>
      </Section>
      <Section>
        <h2>{t("I am a developer and computer security enthusiast")}</h2>
      </Section>
      <Section>
        <h2>{t("I often use")}</h2>
        <br />
        <div className="box">
          <h2>
            JavaScript
            <br />
            Java
            <br />
            SQL
            <br />
            Node
            <br />
            C++
            <br />
            C#
            <br />
            PHP
          </h2>
        </div>
      </Section>
      <Section>
        <h2>{t("to create")}</h2>
        <br />
        <div className="box">
          <h2 dangerouslySetInnerHTML={{ __html: t("stuff") }}></h2>
        </div>
        <br />
        <h2>{t("and whatever I can think of")}</h2>
      </Section>
      <Section>
        <h2 style={{ position: "absolute", top: "20px" }}>{t("My contacts")}</h2>
        <ContactsList />
        <Footer />
      </Section>
    </Container>
  );
};

export default App;
