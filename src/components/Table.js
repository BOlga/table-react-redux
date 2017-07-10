import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {requestDataAction} from '../actions/requestDataAction';
import { REQUEST_DATA, REQUEST_SUCCESS } from '../constants/actionNames'
import Row from './Row.js';
import Header from './Header.js';
import './table.css';

class Table extends Component {
    static propTypes =  {
        body:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }
    static defaultProps = {
        body:[],
        columns:[]
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(requestDataAction());
    }
   
    render() {
        const data = this.props.body;
        const columns = this.props.columns;
        const isHeaderExists = columns.length>0;
        const isDataExists= data.length > 0;
        const resultTemplate = isDataExists ? data.map(function(item, index) {
            return ( <Row  key={item.id} data={item}/>)
}) : <div className="Table_empty">(нет данных)</div>;
       const headerTemplate = isHeaderExists ? <Header data={columns.map((col) => col.header)}/> : 
(isDataExists?<Header data={Object.keys(data[0])}/> :null);
       
        return (
          <table className="table">
            {headerTemplate}
            {resultTemplate}
          </table>
        );
    }
}

function mapStateToProps (state) {
     const {requestDataReducer} = state;
     const data = requestDataReducer.data || {body:[],columns:[]};
     console.log(data);
     return {
        body: data.body,
        columns: data.columns,
     }
 }

 

export default connect(mapStateToProps)(Table);