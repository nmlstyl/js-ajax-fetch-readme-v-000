const app = "I don't do much.";

const token = 'c314f080dc36762760a60b90d35f0cf83519c6da'

fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))
