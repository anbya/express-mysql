const connection = require("../config/db")

module.exports = {
    getAllContent:(req,res) =>{
        connection.query("SELECT * FROM content",(error,result,field)=> {
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
    addContent: (req,res) =>{
        let getDate = new Date();
        let prmyear = getDate.getFullYear();
        let prmkey=`CNT${prmyear}`;
        connection.query(`SELECT * FROM content where id_content LIKE N'%${prmkey}%' ORDER BY id_content DESC LIMIT 0,1`,
            (error, results, fields) => {
                if (error)  {
                    res.status(400).send({
                      error
                    });
                } else {
                    if(results.length >= 1){
                        let newidx1=results[0].id_content.substr(7,7);
                        let newidx2=parseInt(newidx1)+1;
                        if (newidx2>=0 && newidx2<=9)
                        {
                        let id_content=`${prmkey}000000${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}00000${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}0000${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}000${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}00${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}0${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}${newidx2}`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
                        let id_content=`${prmkey}0000001`;
                        connection.query(`INSERT INTO content values('${id_content}','http://transdeal.co.id/multer-image-upload/${req.files[0].filename}','${req.body.title_content}','${req.body.body_content}','${req.body.id_user}')`,(error,result,field)=> {
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
};