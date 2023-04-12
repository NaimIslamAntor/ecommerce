

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500
    const errors = err.errors || 'Something went wrong'

    return res.status(status).json({
        success: false,
        status,
        errors
    })
}


module.exports = errorHandler