import {
  CreateUserRequest,
  Empty,
  IUser,
  UsersServiceClient,
} from '@grpc-react/shared';
import { useState } from 'react';

const usersServiceClient = new UsersServiceClient('http://localhost:8080');

export function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const handleCreateUser = async () => {
    const createUserRequest = new CreateUserRequest();

    const randomId = Date.now();
    createUserRequest.setName(`John${randomId}`);
    createUserRequest.setEmail(`john${randomId}@example.com`);

    usersServiceClient.createUser(createUserRequest, {}, (err, response) => {
      if (err) {
        console.error(err.message);
        return;
      }

      console.log(response.toObject());
    });
  };

  const handleGetUsers = async () => {
    usersServiceClient.getUsers(new Empty(), {}, (err, response) => {
      if (err) {
        console.error(err.message);
        return;
      }

      setUsers(response.toObject().usersList);
    });
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleGetUsers}>Get Users</button>
      <hr />
      <div>
        {users &&
          users.map((user) => (
            <div key={user.id}>
              <span>
                {user.id}: {user.name} : {user.email}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
