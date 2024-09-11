class ApiError{
    constructor(success=false,message){
        this.success = success;
        this.message = message;
    }
}
export default ApiError;