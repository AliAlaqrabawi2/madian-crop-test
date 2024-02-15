import { User } from './User.js';

export function UserList(users) {
  return `
    <div class="user-list">
      ${
        users.length
          ? users.map((user) => User(user)).join('')
          : '<p>No users found.</p>'
      }
    </div>
  `;
}
