import * as React from 'react';
import { Row,Container, Button, Form, Nav } from 'react-bootstrap';
import store from './Redux/store';
import { useSelector } from 'react-redux';
import './App.scss';
import Todo from './components/Todo';
import Add from './components/Add';
import { fetchTodosThunk } from './Redux/slices/TodoSlice';

function App() {
  const [id, setId] = React.useState('');
  const [title, setTitle]  = React.useState('');
  const [des, setDes] = React.useState('');
  const Todos = useSelector((state : any) => state.Todo);
  console.log('Todos : ', Todos);

  return (
  <div className="App">
    <Nav style={{textAlign : 'center', height : '80px', width : '100%',  color : 'white',  backgroundColor : 'black'}}>
      <h3>Todo App</h3>
    </Nav>
    <Container style={{ display : 'flex', minHeight : '720px', height : 'auto', justifyItems : 'center', justifyContent : 'center', margin : '40px', border : '1px solid blue'}}>
      <Container style={{ height : '520px', width : '40%',  backgroundColor : 'beige',  border : '1px solid black'}}>
        <Row style={{height : '80px', width : '100%'}}>
          <h1>Add Todo</h1>
        </Row>
        <Add title={title} description={des} setTitle={setTitle} setDes={setDes} id={id} setId={setId} />
        { Todos.myTodos ? Todos.myTodos.map((item : any, index : number) => <Todo key={index} id={item.id} description={item.body} title={item.title} />) : null }
      </Container>
      <Container style={{height : 'inherit', width : '40%', backgroundColor : 'beige',  border : '1px solid black'}}>
        <Row as={Button} onClick={() => store.dispatch(fetchTodosThunk())} variant='light' style={{height : '80px', width : '100%'}}>
          <h1>Fetched Todo's</h1>
        </Row>
        { Todos.todos[0] ? Todos.todos[0].map((item : any, index : number) => <Todo key={index} id={item.id} title={item.title} description={item.body} /> ) : null}
      </Container>
    </Container>
  </div>
  );
}

export default App;
