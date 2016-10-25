var route = function(url,file){
  app.get(url, function(req, res){
    res.sendFile(__dirname + '/' + file);
  });
}

module.exports = route;
