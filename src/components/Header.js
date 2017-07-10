import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.js';

class Header extends Component {
    static propTypes={
        data: PropTypes.array.isRequired
    }

    static defaultProps={
        data:[]
    }

    render() {
        const data = this.props.data;
        let resultTemplate = '';
        if (data) {
            resultTemplate =data.map(function(item, index) {
                return (                
                        <Cell key={'hc' + index} value={item} />
                    );
                });
        return (
          <th className="header">
            {resultTemplate}
          </th>
      );
    }
}
}


export default Header;