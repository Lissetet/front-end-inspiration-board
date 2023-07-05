// Card.propTypes = {
// 	cards: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			message: PropTypes.string.isRequired,
// 			likes: PropTypes.number.isRequired,
// 			date_created: PropTypes.string.isRequired,
// 			board_id: PropTypes.number.isRequired,
// 		})
// 	).isRequired,
// 	boardID: PropTypes.number.isRequired,
//   boards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//       theme : PropTypes.string,
//       date_created: PropTypes.string.isRequired,
//       cards: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           message: PropTypes.string.isRequired,
//           likes: PropTypes.number.isRequired,
//           date_created: PropTypes.string.isRequired,
//           board_id: PropTypes.number.isRequired,
//         })
//       ),
//     })
//   ).isRequired,
//   setBoards: PropTypes.func.isRequired,
// };

const PropTypes = require('prop-types');


const cardPropTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      messagesksdfjlkdfs: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      date_created: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ).isRequired
  };

  module.exports = cardPropTypes;