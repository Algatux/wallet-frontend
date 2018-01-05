import {API_ENDPOINT} from "./envVars"

class ApiCLient {

    login(username, password, remember) {

        let data = {
            method: 'POST',
            body: {
                username: username,
                password: password
            }
        };

        return fetch(API_ENDPOINT + `/login`, data)
            .then(response => {
                if (response.status !== 200) {
                    throw Error('Login failed')
                }

                return response
            })
            .then(response => {
                console.log(response.json())

                return response
            })
            .then(response => response.json())
    }

}

export default new ApiCLient();