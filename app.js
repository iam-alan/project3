cat <<EOF > app.js
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App!');
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
EOF
