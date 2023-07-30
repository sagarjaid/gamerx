import React from 'react'

const ShareBar = () => {
    return (
        <div className='w-full flex items-center justify-between gap-2 border-t pt-2'>
            <img
                src='/clap-2.png'
                className='w-12'
            />
            <img
                src='/share.png'
                className='w-3'
            />
        </div>
    )
}

export default ShareBar