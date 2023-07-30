import React from 'react'

const Author = () => {
    return (
        <div className='flex gap-6 items-start border p-4  rounded-md'>
            <img
                src='./sagar.png'
                className='w-20'
            />
            <div className='flex flex-col gap-2'>
                <span className='font-bold text-base'>Sagar Jaid</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                    erat in turpis tincidunt mollis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </span>
                <span className='flex gap-2 mt-1'>
                    <a
                        href='https://www.linkedin.com/in/sagarjaid/'
                        target='_blank'>
                        <img
                            className='w-3 h-3'
                            src='./linkedin-dark.png'
                        />
                    </a>
                    <a
                        href='https://twitter.com/jaid_sagar'
                        target='_blank'
                    >
                        <img
                            className='w-4 h-3'
                            src='./twitter-dark.png'
                        />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Author