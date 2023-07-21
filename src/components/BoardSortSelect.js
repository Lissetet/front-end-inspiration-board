import PropTypes from 'prop-types';

export const sortBoards = (boards, sortKey) => {
  const sortedBoards = [...boards].sort((a, b) => {
    if (sortKey === 'titleAZ') {
      return a.title.localeCompare(b.title);
    } if (sortKey === 'titleZA') {
      return b.title.localeCompare(a.title);
    } else if (sortKey === 'ownerAZ') {
      return a.owner.localeCompare(b.owner);
    } else if (sortKey === 'ownerZA') {
      return b.owner.localeCompare(a.owner);
    } else if (sortKey === 'mostCards') {
      return b.cards || 0 - a.cards || 0;
    } else if (sortKey === 'leastCards') {
      return a.cards || 0 - b.cards || 0;
    } else if (sortKey === 'newest') {
      return new Date(b.date_created) - new Date(a.date_created);
    } else if (sortKey === 'oldest') {
      return new Date(a.date_created) - new Date(b.date_created);
    } else {
      return 0;
    }
  });
  return sortedBoards;
}

export const SortSelect = ({sortKey, setSortKey}) => {
  return (
    <div className="flex gap-4 justify-end items-center">
      <span className="font-bold">Sort By:</span>
      <select 
        onChange={(e)=>setSortKey(e.target.value)}
        className="text-black rounded py-1 px-2"
      >
        <option value="" disabled={sortKey}></option>
        <option value="titleAZ">Title A-Z</option>
        <option value="titleZA">Title Z-A</option>
        <option value="ownerAZ">Owner A-Z</option>
        <option value="ownerZA">Owner Z-A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostCards">Most Cards</option>
        <option value="leastCards">Least Cards</option>
      </select>
   </div>
  )
};

SortSelect.propTypes = {
  sortKey: PropTypes.string.isRequired,
  setSortKey: PropTypes.func.isRequired,
};