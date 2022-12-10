import React from "react"
import { Link } from "react-router-dom"

export default function Header () {
    return (
        <div>
            <button>
                <Link to='/dogs'> CREATE DOG</Link>
            </button>
        </div>
    )
}
