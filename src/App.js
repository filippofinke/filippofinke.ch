import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return <h1>{t("hello")}</h1>;
};

export default App;
