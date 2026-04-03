
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidation = require('../validations/userValidation');

router.get('/', userController.getUsers);
router.post('/', userValidation, userController.createUser);
router.put('/:id', userValidation, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
