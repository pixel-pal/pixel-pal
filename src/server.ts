import createApp from './app';
const PORT = 3001;

createApp().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
