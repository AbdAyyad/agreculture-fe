import User from "../models/User";
import SignUpModel from "../models/SignUpModel";

class IdentityService {
    private users: User[];

    constructor() {
        this.users = []
    }

    addUser = (user: SignUpModel) => {
        return new Promise<User>((resolve, reject) => {
            setTimeout(
                () => {
                    if (!this.users.find(x => x.username === user.username)) {
                        this.users.push(user)
                        localStorage.clear()
                        localStorage.setItem('loggedIn', 'true')
                        localStorage.setItem('userName', user.username)
                        resolve(user)
                    } else {
                        localStorage.clear()
                        localStorage.setItem('loggedIn', 'false')
                        reject("user already exist")
                    }
                }, 200)
        })
    }

    login = (user: User) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const entry = this.users.find(x => x.username === user.username)

                if (!entry) {
                    localStorage.clear()
                    localStorage.setItem('loggedIn', 'false')
                    reject("user not found")
                }

                if (entry?.password !== user.password) {
                    localStorage.clear()
                    localStorage.setItem('loggedIn', 'false')
                    reject("password is not correct")
                }

                localStorage.clear()
                localStorage.setItem('loggedIn', 'true')
                localStorage.setItem('userName', user.username)
                resolve(true)
            }, 200)
        })
    }

    isLoggedIn = () => {
        return localStorage.getItem('loggedIn') === 'true'
    }
}

export default new IdentityService()