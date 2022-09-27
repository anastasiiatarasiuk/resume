import React from 'react';

import { IData } from './types';
import mockData from './mocks/anastasiia';
import { SkilComponent, ProjectsComponent, WorksComponent } from './components';
const App: React.FC = () => {
  const [data, setData] = React.useState<IData | null>(null);
  React.useEffect(() => {
    const getData = async (): Promise<IData> => {
      return mockData;
    };
    getData().then((data) => {
      setData(data);
    });
  }, []);
  if (!data) return null;

  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="photo">
            <img src={data.photo_link} alt="a3702ce6fa1078964310790f66c59bb4.jpj" />
          </div>
          {data.skils.map(({ title, list }) => (
            <SkilComponent key={title} title={title} list={list} />
          ))}
        </section>
        <section className="content">
          <h1 className="fio">{data.fio}</h1>
          <p className="description">{data.description}</p>
          <ProjectsComponent title={data.projects.title} list={data.projects.list} />
          <WorksComponent title={data.works.title} list={data.works.list} />
        </section>
      </main>
    </div>
  );
};
export default App;
