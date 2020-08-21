const user = {
    name: 'Andy',
    age: 33,
    location: 'Kent'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined
    }
}
//using ternary operator to see if username exists or not in user object
const templateTwo = (
    <div>
        <h1>{user.name ? user.name: 'Anonymous'}</h1>   
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);