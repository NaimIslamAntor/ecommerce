
const errorStructure = (status, errors) => {
    const error = new Error()
    error.status = status
    error.errors = errors

    return error
}


module.exports = errorStructure