import React from 'react'

type Props = {}

const Form = (props: Props) => {
    return (
        <div className='min-h-screen bg-cover bg-center bg-fixed bg-no-repeat mb-[128px] md:mb-[100px]'>
            <div className='flex justify-center items-center h-screen '>
                <div className='bg-white p-10 rounded-lg shadow-md w-3/4 lg:w-1/2'>
                    <h2 className='text-center text-3xl font-bold mb-6'>Contact Us</h2>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
                                Telephone Number
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            />

                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-gray-700 font-bold mb-2'>
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                className='border border-gray-400 py-2 px-4 rounded-md w-full'

                            ></textarea>

                        </div>
                        <div className='mb-4'>
                            <label htmlFor="privacy" className='block text-gray-700 font-bold mb-2'>Privacy Policy</label>
                            <input type="checkbox" className="enabled:hover:border-gray-400 disabled:opacity-75 py-1" /> i accept the
                            <a href='#policy' className='text-indigo-600'> privacy policy</a>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className='bg-indigo-600 text-white py-2 px-4 rounded-md w-full lg:w-1/2 mt-4'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form