import BaseRepository from "./BaseRepository.js";
import user from "../../../shared/models/User.js"


class MongoUserRepository extends BaseRepository {
    constructor() {
        super(user);
    }


    async create(userData) {
        try {
            let data = { ...userData }
            if (data.role === "super_admin" && !data.permissions) {
                data.permissions = {
                    canCreateApiKeys: true,
                    canManageUsers: true,
                    canViewAnalytics: true,
                    canExportData: true,
                }
            }

            const user = new this.model(data);
            await user.save();

            logger.info("User created", { username: user.username });
            return user
        } catch (error) {
            logger.error("Error creating user", error)
            throw error;
        }
    }
}