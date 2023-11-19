const { PermissionGroup } = require('../DB_connection');


class PermissionGroupHelper {

    getGroupParams = async (id_group) => {
        try {
            const group = await PermissionGroup.findOne({
                where: { id: id_group },
            });

            if (group) {
                return group.params;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PermissionGroupHelper;
