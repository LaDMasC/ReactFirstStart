// import axios from "axios";
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const getData = () => {
    fetch("http://localhost:8080/counter")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCount(data.count);
      });
  };

  //   const getDataAxios = () => {
  //     axios
  //       .get("http://localhost:8080/counter")
  //       .then((data) => {
  //         console.log(data);
  //         setCount(data.count);
  //       })
  //       .catch(console.log);
  //   };

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={getData}>Init Data From Server</button>
    </div>
  );
}

export default Counter;
