import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext.js';

const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className='container mx-2'>
        <h4 className='text-xl font-bold mt-6 mb-2'>イベント一覧</h4>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  id
                </th>
                <th scope='col' className='py-3 px-6'>
                  title
                </th>
                <th scope='col' className='py-3 px-6'>
                  body
                </th>
              </tr>
            </thead>
            <tbody>
              {state.events.map((event, index) => (
                <Event key={index} event={event} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Events;
