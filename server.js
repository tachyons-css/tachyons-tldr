const history = require('connect-history-api-fallback');
const express = require('express');

const app = express();
app.set('port', (process.env.PORT || 8080));

const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);

app.use(history({
  disableDotRule: true,
  verbose: true,
}));

app.use(staticFileMiddleware);

app.listen(app.get('port'), () => {
  console.log(`Tachyons tldr is running on port ${app.get('port')}`);
});
