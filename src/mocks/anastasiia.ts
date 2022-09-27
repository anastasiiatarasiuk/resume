import { IData } from '../types';
const data: IData = {
  fio: 'Tarasiuk Anastasiia',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique repellendus rerum quia iste est itaque ut, libero maxime voluptatibus ullam eum enim. Quia, eos optio aliquid voluptate iste deserunt natus eius voluptas doloribus debitis illo quis adipisci quam dolore nam laboriosam mollitia dolor. Perferendis molestias iure maxime, corporis unde quia.',
  photo_link: 'a3702ce6fa1078964310790f66c59bb4.jpj',
  skils: [
    {
      title: 'Hard skils',
      list: ['html', 'css', 'js', 'React'],
    },
    {
      title: 'Soft skils',
      list: ['Agile', 'Scrum'],
    },
  ],

  projects: {
    title: 'Projects',
    list: [
      {
        id: '0',
        name: 'Resume-v1',
        link: 'www.google.com',
      },
      {
        id: '1',
        name: 'Resume-v2',
        link: 'www.google.com',
      },
      {
        id: '2',
        name: 'Resume-v3',
        link: 'www.google.com',
      },
      {
        id: '3',
        name: 'Resume-v4',
        link: 'www.google.com',
      },
      {
        id: '4',
        name: 'Resume-v5',
        link: 'www.google.com',
      },
    ],
  },

  works: {
    title: 'Works',
    list: [
      {
        id: '0',
        name: 'work1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque minus alias in officiis quidem nostrum! Reiciendis natus molestias suscipit?',
      },
      {
        id: '1',
        name: 'work2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque minus alias in officiis quidem nostrum! Reiciendis natus molestias suscipit?',
      },
      {
        id: '2',
        name: 'work3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque minus alias in officiis quidem nostrum! Reiciendis natus molestias suscipit?',
      },
    ],
  },
};
export default data;
