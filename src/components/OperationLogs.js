import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog.js';

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className='container mx-2'>
        <h4 className='text-xl font-bold mt-6 mb-2'>操作ログ一覧</h4>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  description
                </th>
                <th scope='col' className='py-3 px-6'>
                  time
                </th>
              </tr>
            </thead>
            <tbody>
              {state.operationLogs.map((operationLog, index) => {
                return <OperationLog key={index} operationLog={operationLog} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OperationLogs;
