let count = 0;
const CalculateReq = (req, res, next) => {
  count++;
  console.log({
    msg: `req count: ${count}`,
  });
  next();
};
module.exports = {
  CalculateReq: CalculateReq,
};
