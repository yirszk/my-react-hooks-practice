import React, { useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions';

const EventFrom = ({ state, dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title: title,
      body: body,
    });

    // 入力したものをinputやtextareaから削除しておく
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('Are you sure you want to delete?');
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENT,
      });
    }
  };

  return (
    <>
      <h4 className='text-xl font-bold my-2'>イベント作成フォーム</h4>
      <form>
        <div className='mb-6'>
          <label
            htmlFor='formEventTitle'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            タイトル
          </label>
          <input
            type='email'
            id='formEventTitle'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 className= className= className= className= className=:ring-blue-500 className=:border-blue-500'
            required=''
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='formEventTitle'
            className='block mb-2 text-sm font-medium text-gray-900 className='
          >
            ボディ
          </label>
          <textarea
            type='password'
            id='formEventTitle'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required=''
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='my-2 text-white bg-blue-700 disabled:bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          onClick={addEvent}
          disabled={body === '' || title === ''}
        >
          Create an event
        </button>
        <button
          type='submit'
          className='my-2 text-white bg-red-700 disabled:bg-slate-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          onClick={deleteAllEvents}
          disabled={!state.length}
        >
          Delete all events
        </button>
      </form>
    </>
  );
};

export default EventFrom;
