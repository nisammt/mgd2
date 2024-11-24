const express = require('express')
const {getalltodus,toduspostall, changetodo, deletetodo} = require('../controller/getalltodus')

const router = express.Router()


router.get('/',getalltodus)
router.post('/',toduspostall)
router.put('/:id',changetodo)
router.delete('/:id',deletetodo)

module.exports = router

