import React from 'react'

let timeout;
export default function SearchComponent({ value, onChange }) {
    return (
        <div className="rounded-md shadow-sm w-full sticky top-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>
                </span>
            </div>
            <input
                type="search"
                name="search"
                id="search"
                autoComplete='false'
                placeholder='Search'
                defaultValue={value}
                onChange={(e) => {
                    if (timeout)
                        clearTimeout(timeout);

                    timeout = setTimeout(() => {
                        onChange(e.target.value);
                    }, 500)
                }}
                className="w-full rounded-md border-0 pl-9 pr-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
            />
        </div>
    )
}
