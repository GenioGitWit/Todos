import { Row, Container, Button, Col} from 'react-bootstrap';
import store from '../Redux/store';
import { updateTodosThunk, deleteTodosThunk } from '../Redux/slices/TodoSlice';


interface Props {
    title : string;
    description : string;
    id : string;
};
export default function Todo({ title, description, id} : Props) {
    return(
     <Container style={{display : 'flex', justifyContent : 'center'}} >
        <Row style={{ height : 'auto', width : '100%', border : '1px solid red' }}>
            <Row style={{display : 'flex', flexWrap : 'nowrap'}}>
                <Col lg={8}>
                    <p>{ title }</p>
                </Col>
                <Col lg={4} style={{display : 'flex', flexDirection : 'row', justifyContent : 'flex-end', margin : '10px' }}>
                    <Button onClick={() => store.dispatch(updateTodosThunk({ title, description, id }))} variant='dark' style={{height : '35px', width : '80px'}} size='sm'>Edit</Button>
                    <Button onClick={() => { return id ? store.dispatch(deleteTodosThunk({ id })) : null }} variant='secondary' style={{height : '35px', width : '80px'}} size='sm'>Delete</Button>
                </Col>
            </Row>
            <Row>
                <p>{description}</p>
            </Row>
        </Row>
    </Container>
    );
};

