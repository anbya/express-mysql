const connection = require("../config/db")

module.exports = {
    participateEvent:(req,res) =>{
        connection.query(`SELECT * FROM events where idevents = "${req.body.idevent}"`,(errorcek,resultcek,field)=> {
            if (errorcek){
                res.status(400).send({
                    errorcek
                });
            }
            else{
                let arrayparticipate=[];
                arrayparticipate.push(resultcek[0].id_user);
                arrayparticipate.push(req.body.iduser);
                // let array1=resultcek[0].id_user.split(",");
                // console.log(array1.length);
                // if(array1.length==1){
                //     arrayparticipate.push(req.body.iduser);
                // } else {
                //     arrayparticipate.push(resultcek[0].id_user);
                //     arrayparticipate.push(req.body.iduser);
                // }
                connection.query(`UPDATE events set id_user = "${arrayparticipate}" where idevents = "${req.body.idevent}"`,(errorparticipate,resultparticipate,field)=> {
                    if (errorparticipate){
                        res.status(400).send({
                            errorparticipate
                        });
                    }
                    else{
                        res.status(200).send({
                            resultparticipate
                        });
                    }
        
                });
            }

        });
    },
    updateEvent:(req,res) =>{
        connection.query(`UPDATE events set approvalstatusevents = "${req.body.aprrovestatus}" where idevents = "${req.body.idevent}"`,(error,result,field)=> {
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
    updateEventDetail:(req,res) =>{
        connection.query(`UPDATE events set event_address = "${req.body.address}",bootorroomname = "${req.body.booth}",boothorroomlarge = "${req.body.large}",city = "${req.body.city}",province = "${req.body.province}",floorplan = "http://transdeal.co.id/multer-image-upload/${req.floorplan[0].filename}",rundown = "http://transdeal.co.id/multer-image-upload/${req.rundown[0].filename}",eventlogo = "http://transdeal.co.id/multer-image-upload/${req.logo[0].filename}",eventgift = "${req.body.gift}",eventpict = "http://transdeal.co.id/multer-image-upload/${req.pict[0].filename}",eventdescription = "${req.body.description}" where idevents = "${req.body.id}"`,(error,result,field)=> {
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
    getEventById:(req,res) =>{
        connection.query(`SELECT * FROM events where idevents = "${req.body.idevent}"`,(error,result,field)=> {
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
    getUnapproveEvent:(req,res) =>{
        connection.query("SELECT * FROM events WHERE approvalstatusevents ='NEEDAPPROVAL'",(error,result,field)=> {
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
    getApproveedEvent:(req,res) =>{
        connection.query("SELECT * FROM events WHERE approvalstatusevents ='APPROVED'",(error,result,field)=> {
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
    getApproveedthismonthEvent:(req,res) =>{
        let today = new Date();
        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear();
        let lastday = function(y,m){
        return  new Date(y, m, 0).getDate();
        }
        let enddate = lastday(yyyy,mm);
        let startdate=`${yyyy}-${mm}-01`;
        let lastdate=`${yyyy}-${mm}-${enddate}`;
        console.log(`${startdate} sampai ${lastdate}`);
        
        connection.query(`SELECT * FROM events where (startdateevents BETWEEN "${startdate}" AND "${lastdate}") AND approvalstatusevents ='APPROVED'`,(error,result,field)=> {
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
    getApproveedupcomingEvent:(req,res) =>{
        let today = new Date();
        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear();
        let lastday = function(y,m){
        return  new Date(y, m, 0).getDate();
        }
        let enddate = lastday(yyyy,mm);
        let startdate=`${yyyy}-${mm}-01`;
        let lastdate=`${yyyy}-${mm}-${enddate}`;
        console.log(`${startdate} sampai ${lastdate}`);
        connection.query(`SELECT * FROM events where startdateevents > "${lastdate}" AND approvalstatusevents ='APPROVED'`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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
                        connection.query(`INSERT INTO events values('${idevents}','${req.body.namaevents}','${req.body.startdate}','${req.body.enddate}','${req.body.starttime}','${req.body.endtime}','${req.body.eventlocation}','${req.body.eoname}','${req.body.pic}','${req.body.picphone}','${req.body.picemail}','${req.body.eooffice}','NEEDAPPROVAL','','','','','','','','','','','','')`,(error,result,field)=> {
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