const UserItem = (props) => {
    return <li>{props.user.username} ({props.user.age} years old)</li>
}

export default UserItem;