let books = [
  {property: 'Property 1',
   rent: 500
  },
  {property: 'Property 2',
   rent: 1000
  },
  {property: 'Property 3',
   rent: 1500
  },
  {property: 'Property 4',
   rent: 2000
  },
  {property: 'Property 5',
  rent: 250
 },
]

module.exports = {

  getProperties: (req, res) => {
    res.status(200).send(books);
  },

  getUpdatedList: (req, res) => {
    const {rentAmount} = req.query;
    const updatedList = books.filter(e => e.rent <= rentAmount);

    res.status(200).send(updatedList);
  }

}