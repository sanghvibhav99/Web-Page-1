const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let totalTickets = 50;

app.post("/book", function(req, res) {

  let number = req.body.number;
if (!number || number <= 0 || isNaN(number)) {
  return res.json({ message: "Enter a valid number", remaining: totalTickets });
}

  if (number > 4) {
    res.json({ message: "Max 4 tickets allowed", remaining: totalTickets });
  }
  else if (number > totalTickets) {
    res.json({ message: "Not enough tickets", remaining: totalTickets });
  }
  else {
    totalTickets = totalTickets - number;
    res.json({ message: "Booking successful", remaining: totalTickets });
  }

});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});