const apiFn = require('apiHelpers');
const express = require("express");
const app = express();
app.use(express.static("client/dist"));
app.use(express.json());

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  const params = {
    id: req.body.id;
  }
  apiFn.getDestinationInfo(params, (err, data) => {
    if (err) {
      res.status(400).console(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});