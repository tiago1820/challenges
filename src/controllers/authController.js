const { User } = require('../DB_connection');
const PermissionGroupHelper = require('../helpers/permissionGroupHelper');
const UserHelper = require('../helpers/userHelper');

class AuthController {
    constructor() {
        this.userHelper = new UserHelper();
        this.groupHelper = new PermissionGroupHelper();
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
                const group = await this.userHelper.getUserGroup(foundUser.id);
                const params = await this.groupHelper.getGroupParams(foundUser.id_group);

                console.log("PARAMS", params);

                // return res.status(200).json({ user: foundUser, company, access: true });
                return res.status(200).json(
                    {
                        id: foundUser.id,
                        email: foundUser.email,
                        company: company.name,
                        access: true,
                        group: group.name,
                    }
                );
            }
            return res.status(400).json({ message: 'Data is missing' });

        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

module.exports = AuthController;