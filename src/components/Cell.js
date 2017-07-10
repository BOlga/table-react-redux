import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
    static propTypes={
        value:PropTypes.any.isRequired
    }
    static defaultProps={
        value: '',
        type: 'string'
    }
    render() {
        const value = convertValue(this.props.value, this.props.type);

        return (
          <td className="cell">
           {value}
          </td>          
      );
    }
}

function convertValue(value, type){
    return value.toString(); 
}


export default Cell;