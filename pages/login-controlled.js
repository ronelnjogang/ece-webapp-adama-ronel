import { useState } from "react";

export default function LoginControll() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  const handleInput1 = (e) => {
    e.preventDefault();
    setData1(e.target.value);
  };
  const handleInput2 = (e) => {
    e.preventDefault();
    setData2(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const data = new FormData(form);
    for( let i of data){
        console.log(i[0], i[1]);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={data1}
          onChange={handleInput1}
        />
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data2}
            onChange={handleInput2}
          />
        </div>
      </div>
      <div>
        <button onSubmit={handleSubmit}>Submit</button>
      </div>
      <h1> {data1} </h1>
      <h1> {data2} </h1>
    </form>
  );
}
