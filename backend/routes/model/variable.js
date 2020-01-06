var db = require('./../../utils/database');

exports.getReferralPercentage = function() {
    var sql = "SELECT VALUE FROM variable WHERE VARIABLE = 'REFERRAL_PERCENTAGE'";
    return new Promise((resolve , reject) => {
        db.con.query(sql , function(err , result , fields) {
            if(err)
                reject(err)
            else {
                result = JSON.stringify(result);
                result = JSON.parse(result);
                resolve(result[0]['VALUE']);
            }
        });
    })
}

