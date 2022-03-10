import React from 'react';

const Treeview = ({ children }) => {
  return (
    <div>
      Treeview
      {children}
    </div>
  );
};

function Node() {
  return <div>TreeviewNode</div>;
}

Treeview.Node = Node;

export default Treeview;
