import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [msg, setMsg] = useState({});
  const [id, setId] = useState(1);
  const [bid, setBid] = useState(id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${bid}`)
      .then((res) => {
        const data = res.data;
        setMsg(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bid]);

  return (
    <div className="App">
      <h1>Random msg Generator</h1>
      <input
        type="number"
        max="100"
        min="1"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p>{msg.title}</p>
      <button onClick={() => setBid(id)}>Generate</button>
    </div>
  );
}
