let likes = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(likes)
    }
}