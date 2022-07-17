import React from 'react';

const Event = ({ dispatch, event }) => {
  const handleClickDeleteButton = () => {
    dispatch({
      type: 'DELETE_EVENT',
      id: event.id,
    });
  };
  return (
    <tr>
      <td className='py-4 px-6'>{event.id}</td>
      <td className='py-4 px-6'>{event.title}</td>
      <td className='py-4 px-6'>{event.body}</td>
      <td class='py-4 px-6'>
        <button
          className='font-medium text-red-500 hover:underline'
          onClick={handleClickDeleteButton}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Event;
