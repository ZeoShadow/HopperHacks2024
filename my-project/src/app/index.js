// pages/index.js
import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen flex">
      <aside className="bg-gray-800 w-20 flex flex-col">
        <div className="p-4"> {/* Icon 1 */} </div>
        <div className="p-4"> {/* Icon 2 */} </div>
        <div className="p-4"> {/* Icon 3 */} </div>
        <div className="p-4"> {/* Icon 4 */} </div>
      </aside>
      {/* Rest of the page content */}
    </div>
  );
}
