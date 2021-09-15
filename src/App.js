import { useState, useEffect } from 'react';
import './App.css';
import Posts from './Components/Posts';





function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postFromServer = await getPostsFromServer();
      setPosts(postFromServer);
    }
    getPosts()
  }, []);

  // Get Data from db
  const getPostsFromServer = async () => {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <Posts
        posts={posts}
      />
    </div>
  );
}

export default App;
