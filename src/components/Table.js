import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestDataAction } from '../actions/requestDataAction';
import Row from './Row.js';
import Header from './Header.js';
import './table.css';

class Table extends Component {
    static propTypes = {
        body: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
        isError: PropTypes.bool
    }
    static defaultProps = {
        body: [],
        columns: [],
        isError: false
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(requestDataAction('BOlga'));
    }
    render() {
        const data = this.props.body;
        const columns = this.props.columns;
        const isError = this.props.isError;
        const isHeaderExists = (!isError) && (columns.length > 0);
        const isDataExists = (!isError) && (data.length > 0);
        const emptyText = isError ? 'Запрос данных вернул ошибку' : '(нет данных)';
        const resultTemplate = isDataExists ? data.map(function (item, index) {
            return (<Row key={item.id} data={item} columns={columns} />)
        }) : <div className="Table_empty">{emptyText}</div>;
        const headerTemplate = isHeaderExists ? <Header data={columns.map((col) => col.header)} /> :
            (isDataExists ? <Header data={Object.keys(data[0])} /> : null);

        return (
            { isDataExists } ? (
                <table className="table">
                    <thead>{headerTemplate}</thead>
                    <tbody>{resultTemplate}</tbody>
                </table>
            ) : { resultTemplate }
        );
    }
}

function mapStateToProps(state) {
    const { requestDataReducer } = state;
    const data = requestDataReducer.data || { body: [], columns: [] };
    const errRequest = requestDataReducer.isError || false
    return {
        body: data.body,
        columns: data.columns,
        isError: errRequest
    }
}


export default connect(mapStateToProps)(Table);