// very small smoke test — ensure file loads
try {
  require('./app');
  console.log('SMOKE_TEST_OK');
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}

