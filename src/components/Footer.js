import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      &copy; Copyright {new Date().getFullYear()}, Filippo Finke
      <br />
      {t("Made in")} 🇨🇭
    </div>
  );
};

export default Footer;
