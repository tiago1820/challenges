const { User, Company, PermissionGroup } = require('../DB_connection');

class UserHelper {

    getUserCompany = async (userId) => {
        try {
            const user = await User.findByPk(userId, {
                include: Company,
            });

            if (!user) {
                return null;
            }

            const company = user.Company;

            return company;
        } catch (error) {
            throw error;
        }
    };

    getUserGroup = async (userId) => {
        try {
            const user = await User.findByPk(userId, {
                include: PermissionGroup,
            });

            if (!user) {
                return null;
            }

            const group = user.PermissionGroup;

            return group;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = UserHelper;