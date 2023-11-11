import { Button, Avatar, Box, Typography } from '@mui/material';

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outlined">Click me</Button>
      <Button variant="contained">Click me</Button>
      <Avatar alt="Remy Sharp" src="https://via.placeholder.com/150/92c952" />
      <Typography variant="h1">Titutlo grande</Typography>
      <Typography variant="h1" component="p">
        Titutlo grande 2
      </Typography>
      <Box marginTop={3}>Este es un Box</Box>
    </div>
  );
};

export default App;
