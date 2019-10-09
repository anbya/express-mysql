const connection = require("../config/db")

module.exports = {
    getAllEvents:(req,res) =>{
        connection.query("SELECT * FROM events",(error,result,field)=> {
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
    addEvents: (req,res) =>{
        let getDate = new Date();
        let prmyear = getDate.getFullYear();
        let prmkey=`EVN${prmyear}`;
        connection.query(`SELECT * FROM events where idevents LIKE N'%${prmkey}%' ORDER BY idevents DESC LIMIT 0,1`,
            (error, results, fields) => {
                if (error)  {
                    res.status(400).send({
                      error
                    });
                } else {
                    if(results.length >= 1){
                        let newidx1=results[0].idevents.substr(7,7);
                        let newidx2=parseInt(newidx1)+1;
                        if (newidx2>=0 && newidx2<=9)
                        {
                        let idevents=`${prmkey}000000${newidx2}`;
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}00000${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}0000${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}000${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}00${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}0${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}${newidx2}`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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
                        let idevents=`${prmkey}0000001`;
                        connection.query(`INSERT INTO content values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.eooffice}','','')`,(error,result,field)=> {
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