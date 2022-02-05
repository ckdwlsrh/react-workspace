import React from 'react';
import AddTodo from './AddTodo.js';
import Todo from './Todo';
import './App.css';
import { Container, List, Paper } from '@material-ui/core';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: "0", title: "hello world1", done: true},
        {id: "1", title: "hello world1", done: false},
      ],
    };
  }
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID - " + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items: thisItems});
    console.log("item : ", this.state.items);
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id}/>
          ))}
        </List>
      </Paper>
    );
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );
  }

}
export default App;
