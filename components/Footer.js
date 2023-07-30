import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-6 pt-8 pr-4 border-t">
                <div className="w-1/2 flex flex-col gap-2 ">
                    <div className="text-2xl font-bold">blogName</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                        erat in turpis tincidunt mollis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </div>
                    <div className="flex gap-2 underline cursor-pointer text-sm">
                        <div>LinkedIn</div>
                        <div>Twitter</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="font-bold">Menu</div>
                    <ul className="flex flex-col item-center justify-center gap-2">
                        <li className="cursor-pointer">menu1</li>
                        <li className="cursor-pointer">menu2</li>
                        <li className="cursor-pointer">menu3</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div>
                    © 2023 2022 blog Inc. All rights reserved. Privacy Policy Terms of
                    Use
                </div>
                <a className="p-1 pl-2 cursor-pointer flex gap-1 items-center border-black hover:shadow-md border rounded-lg">
                    <span>made with</span>
                    <img
                        src="https://saasblog.ai/saaslogo-2.png"
                        className="w-16"
                    />
                    <span>

                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer