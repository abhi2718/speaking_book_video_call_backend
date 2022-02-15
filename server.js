const express = require('express'),
      port = process.env.PORT ||7070,
      path = require("path"),
      app = express();
      app.use(express.static(path.resolve(__dirname, './build')))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
      });
      app.listen(port,()=> console.log(`listening on port ${port}`));
     // https://speakingbookconnect.herokuapp.com/#987654?user