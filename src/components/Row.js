import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell.js';

class Row extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired
    }
    defaultProps = {
        data: {}
    }
    render() {
        const item = this.props.data;
        let resultTemplate = Object.keys(item).map(function (tkey, index) {
            if (tkey === "id")
                return null;
            return <Cell key={item.ID + tkey} value={item[tkey]} />
        });

        return (
            <tr className="row">
                {resultTemplate}
            </tr>
        );
    }
}

export default Row;