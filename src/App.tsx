import React from 'react';
interface ISkilsItem {
  title: string;
  list: string[];
}
const Skils: ISkilsItem[] = [
  { title: 'Hard skils', list: ['html', 'css', 'js', 'React'] },
  { title: 'Soft skils', list: ['Agile', 'Scrum'] },
];
// () => {};
const SkilsComponent: React.FC<ISkilsItem> = ({ title, list }) => {
  return (
    <div className="skils">
      <h3 className="skils-title">{title}</h3>
      <ul className="skils-list">
        {list.map((item) => {
          return (
            <li key={item} className="skils-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
interface IProject {
  id: string;
  name: string;
  link: string;
}
const PROJECTS: IProject[] = [
  {
    id: '1',
    name: 'Resume',
    link: 'www.google.com',
  },
];
interface IProjectsComponentProps {
  title: string;
  list: { id: string; name: string; link: string }[];
}
const ProjectsComponent: React.FC<IProjectsComponentProps> = ({ title, list }) => {
  return (
    <div className="projects">
      <h4 className="projects-title">{title}</h4>
      <ul className="projects-list">
        {list.map(({ id, name, link }) => {
          return (
            <li className="projects-item" key={id}>
              <span className="projects-item_title">{name}</span>
              <div className="dotted" />
              <span className="projects-item_link">
                <a href={`//${link}`}>link</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
interface IWorks {
  id: string;
  name: string;
}
const WORKS: IWorks[] = [
  { id: '1', name: 'Works' },
  { id: '2', name: 'Works 2' },
];
interface IWorksComponentProps {
  title: string;
  list: { id: string; name: string }[];
}
const WorksComponent: React.FC<IWorksComponentProps> = ({ title, list }) => {
  return (
    <div>
      <h4 className="works-title">{title}</h4>
      <ul className="work-list">
        {list.map(({ id, name }) => {
          return (
            <li className="works-item" key={id}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  //   <script>
  //   const openBtn = document.getElementById("JS_OPEN_MODAL");
  //   const closeBtn = document.getElementById("JS_CLOSE_MODAL");
  //   const modalWrap = document.getElementById("JS_MODAL");

  //   const toggleModal = () => {
  //     modalWrap.classList.toggle("hide-modal");
  //   };

  //   openBtn.onclick = toggleModal;
  //   closeBtn.onclick = toggleModal;
  // </script>
  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="photo">
            <img
              src="/img/a3702ce6fa1078964310790f66c59bb4.jpg"
              alt="a3702ce6fa1078964310790f66c59bb4.jpj"
            />
          </div>
          {/* <div className="skils">
            <h3 className="skils-title">Skils</h3>
            <ul className="skils-list">
              <li className="skils-item">Lorem, ipsum dolor.</li>
              <li className="skils-item">Lorem ipsum, dolor.</li>
            </ul>
          </div>  */}
          {Skils.map(({ title, list }) => {
            return <SkilsComponent key={title} title={title} list={list} />;
          })}
        </section>
        <section className="content">
          <h1>
            <b>
              <em>Tarasiuk Anastasiia</em>
            </b>
          </h1>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odio culpa recusandae
            praesentium commodi labore cupiditate dolor reiciendis explicabo non? Ipsum eligendi a
            dolor vel dolorum dolorem harum officiis odit.
          </div>
          <div>
            <ProjectsComponent title={'Projects'} list={PROJECTS} />
          </div>
          <WorksComponent title={'Works'} list={WORKS} />
          {/* <div>
            <h4 className="works-title">History work</h4>
            <ul className="work-lists">
              <li className="works-item">Lorem, ipsum dolor.</li>
            </ul>
          </div> */}
          <button id="JS_OPEN_MODAL" type="button">
            open modal
          </button>
        </section>
      </main>

      {/* <div id="JS_MODAL" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">first modal</div>
            <div id="JS_CLOSE_MODAL">x</div>
          </div>
          <div style={{ width: 600 }} />
        </div>
      </div> */}
    </div>
  );
};

export default App;
