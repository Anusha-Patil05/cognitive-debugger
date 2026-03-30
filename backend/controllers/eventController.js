exports.handleEvent = (req, res) => {
  console.log("Event received:", req.body);
  res.send("Event stored");
};
