import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation('main');
  return <div>{t("Главная")}</div>;
};

export default MainPage;
