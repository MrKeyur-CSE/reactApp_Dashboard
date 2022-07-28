import React, { useState } from 'react'

function SearchForm() {
    const [text, settext] = useState('')

    return (
        <div>
            <form>
                <input type="text" className="py-1 px-2 rounded-l-lg" placeholder="Seach" />
                <button type="submit" className="bg-green-400 py-1 px-2 rounded-lg text-white">Search</button>
            </form>
        </div>
    )
}

export default SearchForm
