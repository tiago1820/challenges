const { PermissionParam } = require('../DB_connection');

class PermissionParamHelper {

    getParamsByName = async (array) => {
        //array = [1, 2, 3, 4,...]

        console.log("ARRAY", array);
        try {
            const params = await PermissionParam.findAll({
                attributes: ['name'],
                where: {
                    id: array
                }
            });

            const paramNames = params.map(param => param.name);

            return paramNames;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = PermissionParamHelper;