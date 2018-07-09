const app = "I don't do much.";

fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))

//c314f080dc36762760a60b90d35f0cf83519c6da
