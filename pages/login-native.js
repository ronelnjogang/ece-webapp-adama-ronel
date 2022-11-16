import { useState } from "react";

export default function LoginNative() {
  const onSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const data = new FormData(form);
    for( let i of data){
        console.log(i[0], i[1]);
    }

  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign in</h2>
      <div>
        username : <input type="text" name="username" placeholder="username" />
        <div>
          password : <input type="password" name="password" placeholder="password" />
        </div>
      </div>
      <div>
        <button onSubmit={onSubmit}>Submit</button>
      </div>
    </form>
  );

  const res = Object.fromEntries(data)
  fetch('https://reqres.in/api/users/', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  })
}
