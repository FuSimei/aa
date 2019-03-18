import React, { Component } from 'react';
import './App.css';
import { Button, Table } from 'antd';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  link: 'https://ant.design/components/table-cn/',
  // react: 'http://huziketang.mangojuice.top/books/react/lesson5'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
  link: 'https://ant.design/components/button-cn/',
  // react: 'http://huziketang.mangojuice.top/books/react/lesson7'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}, {
  title: '链接',
  dataIndex: 'link',
  render: (text) => <a href={text} >链接</a>
}, {
  title: 'react',
  dataIndex: 'react',
  render: (text) => <a href={text}>react</a>
}];

class App extends Component {
  state = {
    rowIndex: -1,
  }
  componentDidMount () {
  }

  addRowClassName = (record, index) => {
    const { rowIndex } = this.state;
    if(index === rowIndex) {
      return 'table'
    }else {
      return 'green-table'
    }
  }

  // handleRow = (e) => {
  //   console.log('eee', e.target.parentNode)
  //   const parentDom = e.target.parentNode;
  //   parentDom.style.background = 'orange';
  // }

  onRowRecord = (record) => {
    return {
      onClick: (e) => {
        this.setState({
          rowIndex: parseInt(record.key - 1) 
        })
        // const clickRecord = record;
        // const parentDom = e.target.parentNode;
        // const data = dataSource.filter(item => item.key === record.key);
        // const data = dataSource.filter(item => item.key === record.key)
        // if(record.key === '1') {
        //   parentDom.style.background = 'green';
        // }
        // dataSource.filter(item => item.key === record.key ? parentDom.style.background = 'orange' : parentDom.style.background = '')
        // const data = dataSource.filter(item => item.key === record.key);
      },
    }
  }

  handleHeader = (columns) => {
    debugger
    console.log('column', columns)
  }

  render() {
    return (
      <div className="App">
        <Table 
          dataSource={dataSource}
          columns={columns}
          ref={el => this.table = el}
          rowClassName={this.addRowClassName}
          onRow={this.onRowRecord}
          onHeaderCell={this.handleHeader}
        />
      </div>
    );
  }
}

export default App;
