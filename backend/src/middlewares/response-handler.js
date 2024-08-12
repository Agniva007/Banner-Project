const responseHandler = {
    successWithData(message,data){
        return {
            success : true,
            message,
            data
        }
    },
    success(message){
        return {
            success : true,
            message
        }
    },
    errorWithData(message,data){
        return {
            success : false,
            message,
            data
        }
    },
    error(message){
        return {
            success : false,
            message,
        }
    },
    unauthorized(){
        return {
            success : false,
            message : "Please login to continue",
        }
    }
}

module.exports = responseHandler;