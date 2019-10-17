const connection = require("../config/db")

module.exports = {
    getArtikelById:(req,res) =>{
        connection.query(`SELECT * FROM article where id_article = "${req.body.idartikel}"`,(error,result,field)=> {
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
    getAllArtikel:(req,res) =>{
        connection.query("SELECT * FROM article",(error,result,field)=> {
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
    addArtikel: (req,res) =>{
        let getDate = new Date();
        let prmyear = getDate.getFullYear();
        let prmkey=`ART${prmyear}`;
        connection.query(`SELECT * FROM article where id_article LIKE N'%${prmkey}%' ORDER BY id_article DESC LIMIT 0,1`,
            (error, results, fields) => {
                if (error)  {
                    res.status(400).send({
                      error
                    });
                } else {
                    if(results.length >= 1){
                        let newidx1=results[0].id_article.substr(7,7);
                        let newidx2=parseInt(newidx1)+1;
                        if (newidx2>=0 && newidx2<=9)
                        {
                        let id_article=`${prmkey}000000${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}00000${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}0000${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}000${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}00${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}0${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}${newidx2}`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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
                        let id_article=`${prmkey}0000001`;
                        connection.query(`INSERT INTO article values('${id_article}','${req.body.titelarticle}','${req.body.bodyarticle}','${req.body.footerarticle}','${req.body.imgarticle}')`,(error,result,field)=> {
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