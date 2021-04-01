import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { dateFormatterFromAWS } from '../../services/converters';

class CustomTable extends Component {

    priceFormatter(cell, row){
        if (row.price) {
          return (
            <span>
              <strong style={ { color: 'red' } }>$ { cell } </strong>
            </span>
          );
        }
      
        return (
          <span>{ cell }</span>
        );
      }

    boolFormatter(cell, row){
        // console.log('row: ', row)
        // console.log('cell: ', cell)
        if (row.enabled && row.enabled === 'true') {
          return (
            <span>
              <strong style={ { color: 'green' } }> Enabled </strong>
            </span>
          );
        }
      
        return (
          <span><strong style={ { color: 'red' } }> Disabled </strong></span>
        );
      }

    dateFormatter(cell, row){
        if (row.updatedAt) {
            console.log(dateFormatterFromAWS(cell, 'toGMTString') )
            // const date = new Date(cell)
          return (
            <span>
              <strong >{ dateFormatterFromAWS(cell, 'toGMTString') } </strong>
            </span>
          );
        }
      
        return (
          <span>$ { cell } </span>
        );
      }



    rowStyle(row, rowIndex){
        const style = {}
        if(rowIndex % 2 === 0) {
            style.backgroundColor = 'grey'
        } else {
            style.backgroundColor = 'white'
        }
        return style;
    }

    render() {
        // const products = [{id:10, name:'foo', price:1} ];
        // const data = [{id:10, name:'foo', price:1} ]; // this.props.data
        const data =  this.props.data
        const { SearchBar } = Search;
        const rowStyle = (row, rowIndex) => {
            const style = {}
            if(rowIndex % 2 === 0) {
                style.backgroundColor = '#F2F2F2'
            } else {
                style.backgroundColor = '#FFFFFF'
            }
            return style;
        }

        const columns = [{
           dataField: 'id',
           text: 'Product ID',
           sort: true,
           editable: false
        }, {
            dataField: 'catalog.name',
            text: 'Catalog',
            sort: true,
            editable: false
        },{
            dataField: 'brand.name',
            text: 'Brand',
            sort: true,
            editable: false
        },{
            dataField: 'description',
            text: 'Description',
            sort: true,
            editable: false
        },{
            dataField: 'price',
            text: 'Price',
            sort: true,
            editable: false,
            formatter: this.priceFormatter
        },{
            dataField: 'stock',
            text: 'Stock',
            sort: true,
            editable: false
        }, {
            dataField: 'updatedAt',
            text: 'Updated',
            sort: true,
            editable: false,
            formatter: this.dateFormatter
        }, {
            dataField: 'enabled',
            text: 'Active',
            sort: true,
            formatter: this.boolFormatter,
            editor: {
                type: Type.SELECT,
                options:[
                    {
                        value: false,
                        label: 'Disabled'
                    },
                    {
                        value: true,
                        label: 'Enabled'
                    }
                ]
            }
        }];

        const expandRow = {
            renderer: row => (
              <div>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
              </div>
            )
          };



    
        return (
            <ToolkitProvider
                keyField="id"
                data={ data }
                columns={ columns }
                search
                >
            {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          pagination={ paginationFactory() }
          expandRow={ expandRow }
          rowStyle={rowStyle}
          bootstrap4={ true }
          remote={{
              filter: true,
              pagination: false,
              sort: false,
              cellEdit: false
          }}
          onTableChange={(type, newState) => this.props.onCellChange(type, newState)}
          hover={ true }
          cellEdit={ cellEditFactory({ 
              mode: 'dbclick', 
              blurToSave: true,
              afterSaveCell: ((oldValue, newValue, row, column) => this.props.onCellChange(oldValue, newValue, row, column))
            
            })}

        />
       {/* <BootstrapTable keyField='id' data={ data } columns={ columns } /> */}
      </div>
    )
  }
                </ToolkitProvider>

        )
    }
}

export default CustomTable;
