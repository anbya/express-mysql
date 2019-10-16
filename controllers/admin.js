const connection = require("../config/db")
const bcrypt = require("bcryptjs")

module.exports = {
    getAllAdmin:(req,res) =>{
        connection.query("SELECT * FROM admin",(error,result,field)=> {
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
    addAdmin: (req,res) =>{
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(req.body.passadmin, salt, async function (err, hash){
                if(!err){
                    let getDate = new Date();
                    let prmyear = getDate.getFullYear();
                    let prmkey=`ADM${prmyear}`;
                    connection.query(`SELECT * FROM admin where id_admin LIKE N'%${prmkey}%' ORDER BY id_admin DESC LIMIT 0,1`,
                        (error, results, fields) => {
                            if (error)  {
                                res.status(400).send({
                                error
                                });
                            } else {
                                if(results.length >= 1){
                                    let newidx1=results[0].id_admin.substr(7,7);
                                    let newidx2=parseInt(newidx1)+1;
                                    if (newidx2>=0 && newidx2<=9)
                                    {
                                    let id_admin=`${prmkey}000000${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}00000${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}0000${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}000${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}00${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}0${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}${newidx2}`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                                    let id_admin=`${prmkey}0000001`;
                                    connection.query(`INSERT INTO admin values("${id_admin}","${req.body.namaadmin}","${req.body.hakakses}","${hash}")`,(error,result,field)=> {
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
                }
            })
        });
    },
    loginAdmin: (req,res) => {
        connection.query(`SELECT * FROM admin WHERE id_admin = "${req.body.idadmin}"`,(error,result,field)=> {
            if (error){
                res.status(400).send({
                    error
                });
            }
            else{
                if(result.length >= 1){
                    let prmuser=result[0].id_admin;
                    connection.query(`SELECT * FROM admin WHERE id_admin = "${prmuser}" `,(error1,result1,field)=> {
                        if (error1){
                            res.status(400).send({
                                error1
                            });
                        }
                        else{
                            if(result1.length >= 1){
                                let prmpassuser=result1[0].pass_admin;
                                const valid = bcrypt.compareSync(req.body.passadmin, prmpassuser);
                                if(valid){
                                    // const token = await jwt.sign(
                                    //     {
                                    //         data:existedUser
                                    //     },
                                    //     "jangansampaioranglaintau",
                                    //     {
                                    //         expiresIn:"1h"
                                    //     }
                                    // );
                                    // res.send({
                                    //     token
                                    // })
                                    res.status(200).send({
                                        message: `Login success`,
                                        result1
                                    });
                                } else {
                                    res.send({message:"password is invalid"});
                                }
                            } else {
                                res.status(200).send({
                                    message: `Data tidak ditemukan`
                                });
                            }
                        }
                    });
                } else {
                    res.status(200).send({
                        message: `Akun tidak ditemukan`
                    });
                }
            }
        });
    }
};