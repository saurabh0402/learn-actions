const app = require('express')();

app.get('*', (_, res) => {
  res.json({
    msg: 'Hello from Express',
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
