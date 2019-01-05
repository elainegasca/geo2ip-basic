const Reader = require("@maxmind/geoip2-node").Reader;

async function geo2ip(ip) {
  return new Promise((resolve, reject) => {
    Reader.open("./public/GeoLite2-Country.mmdb")
      .then(res => {
        if (ip) {
          return resolve(res.country(ip).country.isoCode);
        }
        throw { message: "invalid ip address" };
      })
      .catch(err => {
        return reject(err.message);
      });
  });
};

module.exports.default = geo2ip;
