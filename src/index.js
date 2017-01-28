import React from 'react';
import { render } from 'react-dom';
import TreeList from './js/TreeList';

import { DATA } from './sample-data/tree-data-nested';

const COLUMNS = [{
  title: 'ID',
  field: 'id',
  type: 'number',
  width: 100,
  expand: true,
  isNested: true
}, {
  title: 'First Name',
  field: 'firstName',
  type: 'string',
  expand: true,
  columnParentField: 'id'
}, {
  title: 'Last Name',
  field: 'lastName',
  type: 'string',
  columnParentField: 'id'
}, {
  title: 'Employee ID',
  field: 'employeeId',
  type: 'number',
  class: 'red',
  isNested: true,
  formatter: function(value) {
    if (value) {
      return 'EMPID' + value;
    }
  }
}, {
  title: 'Joined on',
  field: 'joinedOn',
  type: 'date',
  format: 'dd/mm/yyyy',
  columnParentField: 'employeeId'
}];

const OPTIONS = {
  height: 350,
  minimumColWidth: 100,
  expandAll: true,
  disableSort: true
};

class App extends React.Component {
  render() {
    return (
      <TreeList
      data={DATA}
      columns={COLUMNS}
      options={OPTIONS}
      id={'id'}
      parentId={'parentId'}
      columnParentField={'columnParentField'}></TreeList>
      );
  }
}

render(<App/>, document.getElementById('app'));
