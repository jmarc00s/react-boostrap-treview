import React from 'react';
import {
  faChevronRight,
  faChevronDown,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Treeview.module.css';
import classNames from 'classnames';

const TreeviewContext = React.createContext();

const useTreeview = () => React.useContext(TreeviewContext);

const Treeview = ({ children, data }) => {
  const [openedNodes, setOpenedNodes] = React.useState([]);

  return (
    <TreeviewContext.Provider value={{ openedNodes, data, setOpenedNodes }}>
      {children}
    </TreeviewContext.Provider>
  );
};

function Nodes() {
  const { data } = useTreeview();

  return (
    <div className="p-2 border" style={{ width: '100%', overflow: 'auto' }}>
      {data.map((node, idx) => (
        <Node key={idx} node={node} />
      ))}
    </div>
  );
}

function Node({ node }) {
  const { openedNodes, setOpenedNodes } = useTreeview();

  const isOpened = React.useMemo(
    () => openedNodes?.some((opened) => opened.name === node.name),
    [openedNodes.length]
  );

  function handleNodeClick() {
    if (!node.children) {
      return;
    }

    if (isOpened) {
      setOpenedNodes([
        ...openedNodes.filter((opened) => opened.name !== node.name),
      ]);
      return;
    }

    setOpenedNodes([...openedNodes, node]);
  }

  return (
    <>
      <div
        className={classNames('px-2 py-4 border-bottom', styles.node)}
        onClick={handleNodeClick}
      >
        {!isOpened && node.children?.length && (
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        )}

        {isOpened && (
          <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
        )}

        {!node.children?.length && (
          <FontAwesomeIcon className={styles.icon} icon={faFile} />
        )}
        <span className={styles['node-name']}>{node.name}</span>
      </div>

      {isOpened && (
        <div>
          {node.children?.map((child, idx) => (
            <div className="ms-3" key={idx}>
              <Node node={child} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Search() {
  const [value, setValue] = React.useState('');
  return (
    <input
      value={value}
      onChange={({ target }) => setValue(target.value)}
      className="form-control"
      placeholder="Pesquisar"
    />
  );
}

Treeview.Nodes = Nodes;
Treeview.Search = Search;

export default Treeview;
