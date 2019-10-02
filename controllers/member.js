const connection = require("../config/db");

module.exports = {
  getAllMember: (req, res) => {
    connection.query("SELECT * FROM member", (error, result, fields) => {
      if (error) {
        res.status(400).send({
          error
        });
      } else {
        res.status(200).send({
          result
        });
      }
    });
  },
  getOneMember: (req, res) => {
    connection.query(
      `SELECT nama_member FROM member where id_member = "${req.body.idmember}"`,
      (error, result, fields) => {
        if (error) {
          res.status(400).send({
            error
          });
        } else {
          res.status(200).send({
            message: "berhasil mengambil data",
            result
          });
        }
      }
    );
  },
  deleteMember: (req, res) => {
    connection.query(
      `DELETE FROM member where id_member = "${req.body.idmember}"`,
      (error, result, fields) => {
        if (error) {
          res.status(400).send({
            error
          });
        } else {
          res.status(200).send({
            result
          });
        }
      }
    );
  },
  updateMember: (req, res) => {
    connection.query(
      `UPDATE member SET no_kartu = "${req.body.nokartu}" where id_member = "${req.body.idmember}"`,
      (error, result, fields) => {
        if (error) {
          res.status(400).send({
            error
          });
        } else {
          res.status(200).send({
            result,
            fields
          });
        }
      }
    );
  },
  addMember: (req, res) => {
    let getDate = new Date();
    let prmyear = getDate.getFullYear();
    let prmkey=`NHM${prmyear}`;
    connection.query(`SELECT * FROM member where id_member LIKE N'%${prmkey}%' ORDER BY id_member DESC LIMIT 0,1`,
        (error, results, fields) => {
            if (error)  {
                res.status(400).send({
                  error
                });
            } else {
                if(results){
                    res.status(200).send({
                        message: `user data = ${prmkey}000001`
                    });
                } else {
                    let newidx1=results[0].id_member.substr(7,6);
                    let newidx2=parseInt(newidx1)+1;
                    res.status(200).send({
                        message: `user data ${newidx2}-${prmkey}`
                    });
                }
            }
        }
    );
  }
};
