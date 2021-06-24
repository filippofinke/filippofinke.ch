import i18n from "i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
	let languages = ["it", "de", "fr", "en"];

	return (
		<div className="language-selector">
			<ul>
				{languages.map((l) => {
					return (
						<li
							key={l}
							onClick={() => {
								i18n.changeLanguage(l);
							}}
							className={(i18n.language ?? "en") === l ? "active" : ""}
						>
							{l.toUpperCase()}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LanguageSelector;
