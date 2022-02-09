
const API = {
  fetchTodos : () => { let res=fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
      console.log('res is : ', res);
      return res.then(data => data.json());
    },
  createTodo : (title : string, description : string, id : string) => {
      let res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({
          title,
          body : description,
          id
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      });
      console.log('res is : ', res);
      return res.then((data) => data.json());
    },
  deleteTodo : (id : string) => {
    let res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    console.log('delete res : ', res);
    return res.then((data) => data.json());
  },
  updateTodo : (title : string, description : string, id : string) =>{
    let res =  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title,
        body: description,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.then(data => data.json());
  }
};


export default API;

