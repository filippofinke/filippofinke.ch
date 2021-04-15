import { useEffect, useState } from "react";
import "./ProjectsList.css";
import { ReactComponent as LoadingBars } from "./LoadingBars.svg";
import { useTranslation } from "react-i18next";

const ProjectsList = () => {
  let { t } = useTranslation();
  let [projects, setProjects] = useState(null);

  const getProjects = () => {
    return new Promise(async (resolve, reject) => {
      let response = await fetch("https://api.github.com/users/filippofinke/starred?per_page=1000");
      let repos = await response.json();
      repos = repos
        .filter((repo) => {
          return repo.owner.login === "filippofinke";
        })
        .sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
      resolve(repos);
    });
  };

  useEffect(() => {
    getProjects().then((p) => setProjects(p));
  }, []);

  return (
    <div className="projects">
      {!projects && <LoadingBars />}
      {projects &&
        projects.map((p) => {
          return (
            <div className="project" key={p.id}>
              <h3>
                {p.name}
                <span className="language">{p.language}</span>
              </h3>
              <br />
              <p>{p.description || t("No description")}</p>
              <br />
              <a className="button" href={p.html_url} target="_blank" rel="noreferrer">
                {t("Open")}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectsList;
