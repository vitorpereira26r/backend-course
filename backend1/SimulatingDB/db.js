const delay = (time) =>
    new Promise(resolve => 
        setTimeout(resolve, time)
    )


const UserDatabase = (() => {
    let idSequence = 1;
    const users = {}

    const insert = async (user) => {
        await delay(400)
        const id = idSequence++
        const data = { ...user, id}
        users[id] = data
        return data
    }

    const list = async () => {
        await delay(200)
        return Object.values(users)
    }

    const get = async (id) => {
        await delay(200)
        return users[id]
    }

    const update = async (user, id) => {
        await delay(400)
        users[id] = user
        return user
    }

    const del = async (id) => {
        await delay(500)
        delete users[id]
    }

    return {
        insert,
        list,
        get,
        update,
        del,
    }
})

module.exports = {
    UserDatabase
}