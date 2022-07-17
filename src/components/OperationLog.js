import React from 'react';

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td className='py-4 px-6'>{operationLog.description}</td>
      <td className='py-4 px-6'>{operationLog.operatedAt}</td>
      <td class='py-4 px-6'>
        <button
          className='font-medium text-red-500 hover:underline'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OperationLog;
