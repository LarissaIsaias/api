const express = require ('express')
const router = express.Router()
const controlador = require('./controlador')

router.get('', controller.listprodutos)
router.get('/:id', controller.getprodutos)
router.post('', )
router.post('/:id', )
router.delete('', )

module.exports = router;