import { Container } from 'react-bootstrap';
import { Treeview } from './components/treeview';

const data = [
  {
    name: 'Directory 01',
    children: [
      {
        name: 'Subdirectory 01',
        children: [
          {
            name: 'File 01.pdf',
          },
        ],
      },
      {
        name: 'Subdirectory 02',
        children: [
          {
            name: 'File 01.docx',
          },
        ],
      },
      {
        name: 'Subdirectory 03',
        children: [
          {
            name: 'File 01.img',
          },
        ],
      },
    ],
  },
  {
    name: 'Directory 02',
    children: [
      {
        name: 'Subdirectory 01',
        children: [
          {
            name: 'File 01.png',
          },
        ],
      },
      {
        name: 'Subdirectory 02',
        children: [
          {
            name: 'File 01.bmp',
          },
        ],
      },
      {
        name: 'Subdirectory 03',
        children: [
          {
            name: 'File 01.xls',
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <Container
      className="d-flex flex-column align-items-center mt-5"
      style={{ height: '100vh' }}
    >
      <Treeview data={data}>
        <Treeview.Search />
        <Treeview.Nodes />
      </Treeview>
    </Container>
  );
}

export default App;
