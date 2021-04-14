import { useTranslation } from "react-i18next";
import Container from "./components/Container";
import LanguageSelector from "./components/LanguageSelector";
import Section from "./components/Section";

const App = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguageSelector />
      <Section>
        <h1>{t("hello")}</h1>
      </Section>
    </Container>
  );
};

export default App;
