const router = require('express').Router()

const getSnare = async () => {
  const snare = await require('../../public/assets/snare 1 open hard.wav')
  return snare
}

module.exports = router

router.get('/snare', (req, res, next) => {
  console.log('/snare')
  res.json(getSnare())
})
