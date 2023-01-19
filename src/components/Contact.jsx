import React from 'react';

function Contact() {
  return (
    <div class='mx-auto border-2 border-gray-900 rounded-lg shadow-md mt-5 max-w-[1224px]'>
      <div class='flex items-center justify-center flex-col text-center pt-5 pb-3'>
        <h3 class='text-2xl md:text-4xl mb-1 md:mb-3 font-bold'>Contact Me!</h3>
      </div>
      <div class='flex justify-center items-center p-0'>
        <form
          action='https://getform.io/f/23c6e402-8322-4a9b-a902-f76a88136ae0'
          method='POST'
          class='flex flex-col w-4/5'
        >
          <input
            type='text'
            name='name'
            placeholder='Name'
            class='my-2 p-2 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email Address'
            class='mb-2 p-2 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Leave me a message'
            cols='50'
            rows='10'
            class='mb-2 p-2 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none'
          ></textarea>
          <button
            type='submit'
            class='mb-2 p-2 bg-transparent border-2 rounded-md hover:bg-green-500 hover:border-green-600 hover:text-white hover:font-bold'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
