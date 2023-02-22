import React from 'react'
import Link from 'next/link'

class Dropdown extends React.Component {
    render() {
        return <div className="bg-green text-bg w-max rounded-lg p-2">
            <ul className="w-20 text-left mr-8">
                <Link href='/'>
                    <p className="block hover:underline cursor-pointer" >About</p>
                </Link>
                <Link href='/work'>    
                    <p className="block hover:underline cursor-pointer" >Work</p>
                </Link>
                <Link href='/resume'>
                    <p className="block hover:underline cursor-pointer" >Resume</p>
                </Link>
                <a target={"_blank"} href='https://github.com/WPoulos24'>
                    <p className="block hover:underline cursor-pointer" >Github</p>
                </a>
            </ul>
        </div>
    }
}

export default Dropdown;
