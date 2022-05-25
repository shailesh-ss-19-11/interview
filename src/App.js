import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [posts, setposts] = useState([]);
  useEffect(()=>{
    fetch('https://gorest.co.in/public/v2/users').then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data);
      setposts(data);
    })
  })
  return (
    <>
      {
        posts.map((data)=>
        <div>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>
        </div>
        )
      }
    </>
  );
}

export default App;
