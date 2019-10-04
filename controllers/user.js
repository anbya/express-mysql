const connection = require("../config/db")

module.exports = {
    getAllUser:(req,res) =>{
        connection.query("SELECT * FROM user",(error,result,field)=> {
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
    },
    addUser: (req,res) =>{
        let getDate = new Date();
        let prmyear = getDate.getFullYear();
        let prmkey=`USR${prmyear}`;
        connection.query(`SELECT * FROM user where id_user LIKE N'%${prmkey}%' ORDER BY id_user DESC LIMIT 0,1`,
            (error, results, fields) => {
                if (error)  {
                    res.status(400).send({
                      error
                    });
                } else {
                    if(results.length >= 1){
                        let newidx1=results[0].id_user.substr(7,7);
                        let newidx2=parseInt(newidx1)+1;
                        if (newidx2>=0 && newidx2<=9)
                        {
                        let id_user=`${prmkey}000000${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>9 && newidx2<=99)
                        {
                        let id_user=`${prmkey}00000${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>99 && newidx2<=999)
                        {
                        let id_user=`${prmkey}0000${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>999 && newidx2<=9999)
                        {
                        let id_user=`${prmkey}000${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>9999 && newidx2<=99999)
                        {
                        let id_user=`${prmkey}00${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>99999 && newidx2<=999999)
                        {
                        let id_user=`${prmkey}0${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                        else if (newidx2>999999 && newidx2<=9999999)
                        {
                        let id_user=`${prmkey}${newidx2}`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                    } else {
                        let id_user=`${prmkey}0000001`;
                        connection.query(`INSERT INTO user values("${id_user}","${req.body.namauser}","${req.body.emailuser}","${req.body.phoneuser}","${req.body.passuser}","")`,(error,result,field)=> {
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
                }
            }
        );
    },
    loginUser: (req,res) => {
        connection.query(`SELECT * FROM user WHERE nama_user = ? OR email_user = ?`,[req.body.akun_user,req.body.akun_user],(error,result,field)=> {
            if (error){
                res.status(400).send({
                    message: `Akun tidak ditemukan data(${prmuser})(${req.body.akun_user})(${req.body.akun_user})(${req.body.pass_user})`,
                    error
                });
            }
            else{
                let prmuser=result[0].id_user;
                connection.query(`SELECT * FROM user WHERE id_user = ? AND pass_user = ? `,[prmuser,req.body.pass_user],(error1,result1,field1)=> {
                    if (error1){
                        res.status(400).send({
                            message: `Password tidak sesuai data(${prmuser})(${req.body.akun_user})(${req.body.akun_user})(${req.body.pass_user})`,
                            error1
                        });
                    }
                    else{
                        res.status(200).send({
                            message: `data ditemukan data(${prmuser})(${req.body.akun_user})(${req.body.akun_user})(${req.body.pass_user})`,
                            result1
                        });
                    }
                });
            }

        });
    }
};