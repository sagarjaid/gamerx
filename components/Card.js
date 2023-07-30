import React from 'react'

const Card = () => {
    return (
        <div className="flex flex-col  max-w-4xl gap-4  w-full">
            <div className="flex gap-4 rounded-xl cursor-pointer border hover:shadow shadow-sm">
                <img
                    src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
                    className="w-1/2 rounded-l-xl"
                />
                <div className="w-full flex flex-col gap-4 p-4">
                    <div className="text-xl font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                        erat in turpis tincidunt mollis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </div>
                    <div className="text-sm">Friday, 12 June 2023</div>
                    <div className="flex items-center gap-2">
                        <img src="/clap-2.png" className="w-12" />
                        <div className="flex items-center gap-2">
                            <img src="/favicon.ico" className="w-4" />
                            <div className="text-sm">Sagar Jaid</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card