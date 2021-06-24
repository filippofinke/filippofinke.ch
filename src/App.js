import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactsList from "./components/ContactsList";
import Container from "./components/Container";
import Footer from "./components/Footer";
import LanguageSelector from "./components/LanguageSelector";
import ProjectsList from "./components/ProjectsList";
import Section from "./components/Section";

const App = () => {
	const { t } = useTranslation();

	let [hasScrolled, setHasScrolled] = useState(false);

	return (
		<Container onScroll={() => setHasScrolled(true)}>
			<LanguageSelector />
			<Section>
				<h1>{t("Hi 👋")}</h1>
				<h2>{t("welcome to my website!")}</h2>
				{!hasScrolled && <img className="scrolldown" alt="Scroll down" src="/assets/scrolldown.png" />}
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
				<div className="title">
					<h2>{t("These are some projects")}</h2>
				</div>
				<ProjectsList />
				<div className="projects-button">
					<h2>
						<a
							className="button"
							href="https://github.com/filippofinke?tab=repositories"
							target="_blank"
							rel="noreferrer"
						>
							{t("Show all")}
						</a>
					</h2>
				</div>
			</Section>
			<Section>
				<h2 className="title">{t("My contacts")}</h2>
				<ContactsList />
				<Footer />
			</Section>
		</Container>
	);
};

export default App;
