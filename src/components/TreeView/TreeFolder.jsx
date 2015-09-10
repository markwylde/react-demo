import React from 'react';
import _ from 'lodash';

import { TreeItem } from './TreeItem';

export class TreeFolder extends React.Component {

  render() {
    var treeItems = [];
    _.each(this.props.data, (item, idx) => {
      treeItems.push(<TreeItem key={idx} onOpenItem={this.props.onOpenItem} data={item} />);
    });

    return (
      <ul className='tree-view__folder'>
          {treeItems}
      </ul>
    );
  }

}
