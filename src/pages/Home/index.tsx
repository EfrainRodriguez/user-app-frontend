import { Card, Container } from '@mui/material';

import { useGetUsersQuery } from '@/redux/services/user.service';

interface User {
  name: string;
  email: string;
  _id: string;
}

const Home = () => {
  const { data } = useGetUsersQuery('');

  const users = data?.users || [];

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {users.map((user: User) => (
        <Card key={user._id} sx={{ mb: 2, p: 3 }}>
          {user.name}: {user.email}
        </Card>
      ))}
    </Container>
  );
};

export default Home;
