const Router = require('express-promise-router');
const router = new Router();
const { getPacientes, putPaciente, postPaciente, deletePaciente } = require('../controllers/index.controller')

router.get('/consultar', getPacientes);
router.post('/insertar', postPaciente);
router.put('/actualizar', putPaciente);
router.delete('/eliminar', deletePaciente);

module.exports = router;