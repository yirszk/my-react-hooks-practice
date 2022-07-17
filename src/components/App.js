import { useReducer, useState } from 'react';
import Event from '../components/Event';
import reducer from '../reducers/index.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    console.log({ title, body });

    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body,
    });

    // 入力したものをinputやtextareaから削除しておく
    setTitle('');
    setBody('');
  };

  return (
    <>
      <div className='container mx-2'>
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
              placeholder='name@flowbite.com'
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
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            onClick={addEvent}
          >
            イベントを作成する
          </button>
        </form>

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
              {state.map((event, index) => (
                <Event key={index} event={event} dispatch={dispatch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
