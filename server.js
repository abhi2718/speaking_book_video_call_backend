const express = require('express'),
      port = process.env.PORT ||7070,
      path = require("path"),
      app = express();
      app.get('/', (req, res)=>{
        res.json({success:true,message:'API Started'})
      })
      app.use(express.static(path.resolve(__dirname, './build')))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
      });
      app.listen(port,()=> console.log(`listening on port ${port}`));
      // http://192.168.43.101:7070/connect/#456789?user