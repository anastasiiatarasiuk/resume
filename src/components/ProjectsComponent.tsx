import React from 'react';
interface IProject {
  id: string;
  name: string;
  link: string;
}

interface IProjectsComponentProps {
  title: string;
  list: IProject[];
}

const PROJECTS: IProject[] = [];

for (let index = 0; index < new Array(5).length; index += 1) {
  PROJECTS.push({ id: `${index}`, name: `Resume-v${index + 1}`, link: 'www.google.com' });
}

const ProjectsComponent: React.FC<IProjectsComponentProps> = ({ title, list }) => {
  return (
    <div className="projects">
      <h4 className="projects-title title">{title}</h4>
      <ul className="projects-list">
        {list.map(({ id, name, link }) => {
          return (
            <li className="projects-item" key={id}>
              <span className="projects-item_title subtitle">{name}</span>
              <div className="dotted" />
              <span className="projects-item_link subtitle">
                <a href={`//${link}`}>link</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProjectsComponent;
