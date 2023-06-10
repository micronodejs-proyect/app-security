const authRepository = require('../repositories/auth.repository')

const authService = {
    getUsersByCredentials: async (userName, password) => {
        return await authRepository.getUsersByCredentials(userName, password)
    }
}

module.exports = authService