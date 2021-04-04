import React, {Component} from 'react';
import '../../assets/css/table.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { dateFormatterFromAWS } from '../../services/converters';
import { PhotoPicker, S3Image } from 'aws-amplify-react';
import { ProgressBar, Button } from 'react-bootstrap';

const initialState = {
  imagePreview: "",
  image: null,
  isUploading: false,
  progress: 0
};
class CustomTable extends Component {

  state = {
    ...initialState

  }


  priceFormatter(cell, row){
    if (row.price) {
      return (<span><strong style={ { color: 'red' } }>$ { cell } </strong></span>);
    }
    return (<span>{ cell }</span>);
  }


  boolFormatter(cell, row){
    if (row.enabled && row.enabled === 'true') {
      return (<span><strong style={ { color: 'green' } }> Enabled </strong></span>);
    }
      return (<span><strong style={ { color: 'red' } }> Disabled </strong></span>);
  }

  dateFormatter(cell, row){
    if (row.updatedAt) {
      console.log(dateFormatterFromAWS(cell, 'toGMTString') )
      return (
        <span><strong >{ dateFormatterFromAWS(cell, 'toGMTString') }</strong></span>
        );
    }
      return (<span>$ { cell } </span>);
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

  /**
   * reset the state of the preview and send the productId and image to
   * the uploadImage function to upload the file and connect it to the
   * product. 
   * @param {string} productId 
   * @param {string} image 
   */
  uploadImage(productId, image){
    this.props.uploadImage(productId, image)
    this.setState({imagePreview: "", image: null})
    
  }

  render() {
    const { progress, image } = this.state
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
        editable: true,
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
          productImage, {row.file ? <S3Image imgKey={row.file.key} theme={{
                      photoImg: { maxWidht: '100%', maxHeight: '100%' }
                  }} /> :
          <img src={row.imageUrl} alt="foo" /> }
          {progress > 0 && (
          <ProgressBar animated now={progress} />
          )}
          <PhotoPicker 
            title="Select Product Image"
            preview={this.state.imagePreview ? "show" : "hidden"}
            onLoad={url => this.setState({imagePreview: url})}
            onPick={file => this.setState({image: file})} />
            {image ? (
            <Button variant="primary" onClick={() => this.uploadImage(row.id, image)}>Upload Product image</Button>
            ) : null }
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
          </div>
          )
        }
        </ToolkitProvider>
      )
    }
}

export default CustomTable;
