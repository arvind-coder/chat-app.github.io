const users = []

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({
    id,
    username,
    room
}) => {
    // Clean the data
    username = username.trim().toUpperCase(),
        room = room.trim().toLowerCase()

    // Validation the Data
    if (!username || !room) {
        return {
            error: 'Username and room are required'

        }
    }

    // Check for existing
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validation username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store User
    const user = {
        id,
        username,
        room
    }
    users.push(user)
    return {
        user
    }
}
// Remove User
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// Find User
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// Find Room User
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}
module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom

}