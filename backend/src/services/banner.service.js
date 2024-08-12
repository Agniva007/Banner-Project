const {Banner} = require("../../models");
const fields = [['uuid','id'], 'description','link','timer', 'is_visible'];

class BannerService {
    static async create(data) {
        try {
            return await Banner.create(data);
        } catch (error){
            console.log("Error creating Banner" + error);
            throw new Error(error);
        }
    }

    static async getAll() {
        try {
            return await Banner.findAll({ where: {is_visible: true}, attributes: fields});
        } catch (error) {
            console.log("Error getting all Banners" + error);
            throw new Error(error);
        }
    }

    static async getById(id) {
        try {
            const banner = await Banner.findOne({ where: {id: id, is_visible: true}, attributes: fields });
            console.log(banner);
            return banner;
        } catch (error) {
            console.log("Error getting Banner by ID" + error);
            throw new Error(error);
        }
    }

    static async updateById(id, data) {
        try {
            return await Banner.update(data, {where: {id: id}});
        } catch (error) {
            console.log("Error updating Banner" + error);
            throw new Error(error);
        }
    }
}

module.exports = BannerService;