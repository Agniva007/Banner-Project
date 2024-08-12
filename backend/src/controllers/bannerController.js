const BannerService = require("../services/banner.service");
const httpStatus = require("http-status");

class BannerController {
    
    /**
     * Creates a new banner.
     *
     * @param {Object} req - The request object containing the banner data.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {Object} - The response object with status code and data.
     *
     * @throws Will throw an error if the banner creation fails.
     */
    static async create(req, res) {
        try {
            const response = await BannerService.create(req.body);
            return res.status(httpStatus.OK).send({data: response, message: "Banner created successfully!"});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: error.message});
        }
    }

    /**
     * Retrieves all banners.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     *
     * @returns {Object} The response object with status code and data.
     *
     * @throws Will throw an error if the banner retrieval fails.
     */
    static async getAll(req, res) {
        try {
            const response = await BannerService.getAll();
            return res.status(httpStatus.OK).send({data: response, message: "Banners retrieved successfully!"});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: error.message});
        }
    }

    /**
     * Retrieves a banner by its ID.
     *
     * @param {Object} req - The request object containing the banner ID.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {Object} The response object with status code and data.
     *
     * @throws Will throw an error if the banner retrieval fails.
     */
    static async getById(req, res) {
        try {
            console.log(req.params.id);
            const response = await BannerService.getById(req.params.id);
            if (!response) {
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: "Banner not found!"});
            }
            return res.status(httpStatus.OK).send({data: response, message: "Banner retrieved successfully!"});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: error.message});
        }
    }

    /**
     * Updates a banner by its ID.
     *
     * @param {Object} req - The request object containing the banner ID and updated data.
     * @param {Object} res - The response object to send the response.
     *
     * @returns {Object} The response object with status code and data.
     *
     * @throws Will throw an error if the banner update fails.
     */
    static async updateBanner(req, res) {
        try {
            const response = await BannerService.updateById(req.params.id, req.body);
            if (!response) {
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: "Banner not found!"});
            }
            return res.status(httpStatus.OK).send({data: response, message: "Banner updated successfully!"});
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data: {}, message: error.message});
        }
    }
}

module.exports = BannerController;