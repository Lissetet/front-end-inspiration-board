import PropTypes from 'prop-types';

export const sortCards = (cards, sortKey) => {
  const sortedCards = [...cards].sort((a, b) => {
    if (sortKey === 'messageAZ') {
      return a.message.localeCompare(b.message);
    } if (sortKey === 'messageZA') {
      return b.message.localeCompare(a.message);
    } else if (sortKey === 'mostLiked') {
      return b.likes_count - a.likes_count;
    } else if (sortKey === 'leastLiked') {
      return a.likes_count - b.likes_count;
    } else if (sortKey === 'newest') {
      return new Date(b.date_created) - new Date(a.date_created);
    } else if (sortKey === 'oldest') {
      return new Date(a.date_created) - new Date(b.date_created);
    } else {
      return 0;
    }
  });
  return sortedCards;
}

export const SortSelect = ({sortKey, setSortKey}) => {
  return (
    <div className="flex gap-4 justify-end mb-10 items-center">
      <span className="font-bold">Sort By:</span>
      <select 
        onChange={(e)=>setSortKey(e.target.value)}
        className="text-black rounded py-1 px-2"
      >
        <option value="" disabled={sortKey}></option>
        <option value="messageAZ">Message A-Z</option>
        <option value="messageZA">Message Z-A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostLiked">Most Liked</option>
        <option value="leastLiked">Least Liked</option>
      </select>
   </div>
  )
};

SortSelect.propTypes = {
  sortKey: PropTypes.string.isRequired,
  setSortKey: PropTypes.func.isRequired,
};