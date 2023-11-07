const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.delete('/', userController.deleteAllUsers);

module.exports = router;