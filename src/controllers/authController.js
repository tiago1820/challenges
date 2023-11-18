const { User } = require('../DB_connection');

class AuthController {

    login = async (req, res) => {
        const { password, email } = req.query;

        try {
            if (email && password) {
                const foundUser = await User.findOne({
                    where: { email }
                });

                console.log("foundUser", foundUser);
                if (!foundUser) return res.status(404).json({ message: 'User not found' });
                if (foundUser.password !== password) return res.status(403).json({ message: 'Incorrect password' });
                return res.status(200).json({ user: foundUser, access: true });
            }
            return res.status(400).json({ message: 'Data is missing' });

        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

module.exports = AuthController;