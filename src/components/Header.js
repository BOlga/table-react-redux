import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    static defaultProps = {
        data: []
    }
    render() {
        const data = this.props.data;
        let resultTemplate = '';
        if (data) {
            resultTemplate = data.map(function (item, index) {
                return (
                    <th key={'th' + index}>{item}</th>
                );
            });

            return (
                <tr className="header">
                    {resultTemplate}
                </tr>
            );
        }
    }
}

export default Header;