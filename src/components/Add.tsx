import { Form, Container, Button } from 'react-bootstrap'
import { createTodoThunk } from '../Redux/slices/TodoSlice';
import store from '../Redux/store';

interface Props {
    title : string;
    description : string;
    setTitle : (arg : string) => void;
    setDes : (arg : string) => void;
    id : string,
    setId : (arg : string) => void
};

export default function Add({ title, description, id, setTitle, setDes, setId} : Props) {
    return(
        <Container>
        <Form style={{border : '1px solid black', padding : '20px'}}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control onChange={(e : any) => setTitle(e.target.value) } type="textl" placeholder="Add Title" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control onChange={(e : any) => setDes(e.target.value) } type="text" placeholder="Add Description" />
            </Form.Group>
            <Button onClick={() => store.dispatch(createTodoThunk({title, description, id }))}>Add</Button>
        </Form>
      </Container>
    );
};