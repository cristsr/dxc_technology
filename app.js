const express = require('express');
const logger = require('morgan');

const testRouter = require('./routes/test');

const app = express();

app.use(logger('dev'));
app.use(express.json());


app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).json({
    data: '',
    errors: ['not_found_error']
  });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    response: {
      data: '',
      errors: ['internal_server_error']
    }
  })
});

module.exports = app;
