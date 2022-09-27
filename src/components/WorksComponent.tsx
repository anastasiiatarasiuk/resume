import React from 'react';

interface IWork {
  id: string;
  name: string;
  description: string;
}

interface IWorksComponentProps {
  title: string;
  list: IWork[];
}

const WORKS: IWork[] = [];

for (let index = 0; index < new Array(3).length; index += 1) {
  WORKS.push({
    id: `${index}`,
    name: `work${index + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque minus alias in officiis quidem nostrum! Reiciendis natus molestias suscipit?',
  });
}

const WorksComponent: React.FC<IWorksComponentProps> = ({ title, list }) => {
  return (
    <div className="works">
      <h4 className="works-title title">{title}</h4>
      <ul className="works-list">
        {list.map(({ id, name, description }) => {
          return (
            <li className="works-item" key={id}>
              <h5 className="works-item_title subtitle">{name}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WorksComponent;
