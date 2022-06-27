export const UsersList = ({users}) => (
    <ul>
        <li>
            {
                users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </li>
    </ul>
)