const open = require('open');
const port = process.env.PORT || 8080;
open(`http://localhost:${port}`);
