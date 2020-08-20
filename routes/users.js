const express   = require('express')
const router    = express.Router();

const EmployeeControllers = require('../controllers/UserControllers');
const Employee = require('../models/USERS');
const upload = require('../middleware/upload')
const authenticate = require('../middleware/authenticate')
router.get('/', authenticate, EmployeeControllers.index)
router.post('/show', EmployeeControllers.show)
router.post('/store', upload.single('avatar'),EmployeeControllers.store)
router.post('/update', EmployeeControllers.update)
router.post('/delete', EmployeeControllers.destroy)

module.exports = router 