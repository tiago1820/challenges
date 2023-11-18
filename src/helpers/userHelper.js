const { User, Company } = require('../DB_connection');

class UserHelper {

    getUserCompany = async (userId) => {

        try {
            const user = await User.findByPk(userId, {
                include: Company,
            });

            console.log("Helper", user);


            if (!user) {
                return null;
            }

            const company = user.Company;

            return company;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = UserHelper;