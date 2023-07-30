import React from 'react'

const Nav = () => {
    return (
        <nav className="flex justify-between item-center border-b py-4">
            <div className="text-3xl font-bold">blogName</div>
            {/* <img
            src="https://careerdekho.ai/media/careerdekho-logo.svg"
            className="w-[180px]"
          /> */}
            <div className="flex gap-4 item-center">
                <ul className="flex flex-row item-center justify-center p-1 gap-4">
                    <li className="cursor-pointer">menu1</li>
                    <li className="cursor-pointer">menu2</li>
                    <li className="cursor-pointer">menu3</li>
                    <li className="cursor-pointer">menu4</li>
                </ul>
                <a className="p-1 px-3 cursor-pointer hover:scale-105 border border-black rounded-lg">
                    call-to-action
                </a>
            </div>
        </nav>
    )
}

export default Nav