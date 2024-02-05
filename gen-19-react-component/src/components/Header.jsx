import React from 'react'

export default function Nav() {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <img src ="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296" className="w-48"/>
                </div>

                
                <div class="w-24 md:w-64">
                <input
                    class="flex h-8 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="Search.."
                    placeholder="Search.."
                />
                </div>
            </div>
        </div>

    );
}
