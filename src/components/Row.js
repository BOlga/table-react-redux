import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.js';

class Row extends Component {
   static propTypes={
        data: PropTypes.shape({
            title: PropTypes.string,
            count: PropTypes.number
        })
   }
   defaultProps={
       data:{
           title:'(нет)',
           count:0
       }
   }
    render() {
        const item = this.props.data;
        let resultTemplate = null;
        if (item) {
            resultTemplate = Object.keys(item).map(function(tkey, index) {
                if(tkey=="id")
                    return;
                return (                
                        <Cell key={item.ID + tkey } value={item[tkey]} />
                    );
                });
  } 
        return (
          <tr className="row">
            {resultTemplate}
          </tr>
      );
    }
}



export default Row;