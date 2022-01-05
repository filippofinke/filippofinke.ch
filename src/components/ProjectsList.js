import "./ProjectsList.css";
import { ReactComponent as LoadingBars } from "./LoadingBars.svg";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const ProjectsList = () => {
  let { t } = useTranslation();

  const projectsQuery = useQuery(
    "projects",
    async () => {
      let response = await fetch(
        "https://api.github.com/users/filippofinke/starred?per_page=1000"
      );
      let repos = await response.json();
      repos = repos
        .filter((repo) => {
          return repo.owner.login === "filippofinke";
        })
        .sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
      return repos;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="projects">
      {projectsQuery.isLoading && <LoadingBars />}
      {projectsQuery.isSuccess &&
        projectsQuery.data.map((p) => {
          return (
            <div className="project" key={p.id}>
              <h3>
                {p.name}
                <span className="language">{p.language}</span>
              </h3>
              <br />
              <p>{p.description || t("No description")}</p>
              <br />
              <a
                className="button"
                href={p.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {t("Open")}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectsList;
