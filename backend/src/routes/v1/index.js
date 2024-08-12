const router = require("express").Router();
const bannerController = require("../../controllers/bannerController");

router.get('/', bannerController.getAll);
router.post('/create', bannerController.create);
router.get('/:id', bannerController.getById);
router.put('/:id', bannerController.updateBanner);

module.exports = router;