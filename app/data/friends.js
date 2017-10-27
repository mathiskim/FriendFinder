// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Ahmed",
    photo: "https://media.giphy.com/media/3ohhwB57YcbheWZ9K0/giphy.gif",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5","4", "1" ]
  },
   {
    name: "Jill",
    photo: "https://media.giphy.com/media/5MSPQODSIJa6c/giphy.gif",
    scores: ["5", "1", "2", "5","4", "1" ,"5", "1", "4", "4",]
  },
   {
    name: "Harold",
    photo: "https://media.giphy.com/media/IRZE8JX2BQikM/giphy.gif",
    scores: ["1", "2", "5","4", "1", "5", "1", "4", "4", "5" ]
  },
   {
    name: "Amelia",
    photo: "https://media.giphy.com/media/3o7aD90NAnmOf8JIHK/giphy.gif",
    scores: ["1", "2", "3", "4", "5", "1", "2", "3","4", "5" ]
  },
   {
    name: "Clark",
    photo: "https://media.giphy.com/media/xT9IguzlQLhrPaqUXC/giphy.gif",
    scores: ["1", "1", "1", "1", "5", "1", "5", "5","5", "1" ]
  },
   {
    name: "Jason",
    photo: "https://media.giphy.com/media/3o7aCQTXfaCwVKa8CY/giphy.gif",
    scores: ["3", "4", "3", "4", "2", "3", "2", "4","4", "3" ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
