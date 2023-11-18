const { User } = require('../DB_connection');
const UserHelper = require('../helpers/userHelper');

class AuthController {
    constructor() {
        this.userHelper = new UserHelper();
    }

    login = async (req, res) => {
        const { password, email } = req.query;

        try {
            if (email && password) {
                const foundUser = await User.findOne({
                    where: { email }
                });

                if (!foundUser) return res.status(404).json({ message: 'User not found' });
                if (foundUser.password !== password) return res.status(403).json({ message: 'Incorrect password' });

                const company = await this.userHelper.getUserCompany(foundUser.id);

                console.log("Company", company);


                return res.status(200).json({ user: foundUser, company, access: true });
            }
            return res.status(400).json({ message: 'Data is missing' });

        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

module.exports = AuthController;