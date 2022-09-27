import React from 'react';

interface ISkilItem {
  title: string;
  list: string[];
}

// const SKILS: ISkilItem[] = [
//   { title: 'Hard skils', list: ['html', 'css', 'js', 'React'] },
//   { title: 'Soft skils', list: ['Agile', 'Scrum'] },
// ];

const SkilComponent: React.FC<ISkilItem> = ({ title, list }) => {
  return (
    <div className="skils">
      <h3 className="skils-title title">{title}</h3>
      <ul className="skils-list">
        {list.map((item) => (
          <li className="skils-item subtitle" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkilComponent;
