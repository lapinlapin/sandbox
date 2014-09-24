var express = require('express'),
    app = express();

app.use('/sandbox', express.static('desktop.bundles/index'));
app.use('/sandbox', express.static('desktop.bundles/second'));
app.listen(3000);
