import React from 'react';
import { TreeFolder } from './TreeFolder';

export default class TreeItem extends React.Component {

  render() {

    var children;

    if (this.props.data.nodes) {
      children = (<TreeFolder onOpenItem={this.props.onOpenItem} data={this.props.data.nodes} />);
    }

    return (
      <li className='tree-view__item' onClick={this.props.onOpenItem.bind(null, this.props.data)}>
        <i className={this.props.data.icon}></i>
            <span className='label'>{this.props.data.title}</span>
          {children}
      </li>
    );
  }

}
