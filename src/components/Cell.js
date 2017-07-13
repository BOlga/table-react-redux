import React, { Component } from 'react';
import { COLUMN_DATA_STRING, COLUMN_DATA_LINK, COLUMN_DATA_NUM } from '../constants/dataType';
import PropTypes from 'prop-types';

class Cell extends Component {
    static propTypes = {
        value: PropTypes.shape({
            value: PropTypes.shape.isRequired,
            type: PropTypes.string.isRequired
        })
    }
    static defaultProps = {
        value: { value: '', type: COLUMN_DATA_STRING }
    }
    render() {
        const cellValue = convertValue(this.props.value.value, this.props.value.type);

        return (
            <td className="cell">
                {cellValue}
            </td>
        );
    }
}

function convertValue(value, type) {
    let result = value;
    if (type === COLUMN_DATA_LINK)
        result = <a href='{result}'> {result}</a>;

    return result;
}

export default Cell;