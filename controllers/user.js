const connection = require("../config/db")

module.exports = {
    getAllUser:(req,res) =>{
        connection.query("SELECT * FROM users",(error,result,field)=> {
            if (error){
                res.status(400).send({
                    error
                });
            }
            else{
                res.status(200).send({
                    result
                });
            }

        });
    }
};