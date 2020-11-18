import React from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';


const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}

const TableHeader = ({ fields }) => (
  <thead>
    <tr>
    {
      fields.map( field => <th key={ field }>{ field }</th>)
    }
    </tr>
  </thead>
);

const TableBody = ({ data }) => (
  <tbody>
    {
      Object.keys(data).map(
        datum =>
          <tr>
          {
            Object.keys(data[datum]).map(
              field => <td>{data[datum][field]}</td>
            )
          }
          </tr>
      )
    }
  </tbody>
);

const TestApp = () => (
  <table>
    <TableHeader fields={ Object.keys(defaultData[Object.keys(defaultData)[0]]) } />
    <TableBody data={defaultData} />
  </table>
);

export default TestApp;

// render(<App />, document.getElementById('root'));
