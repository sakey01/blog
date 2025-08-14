import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Card = ({
  title,
  content,
  author,
  id,
}: {
  title: string;
  content: string;
  author: string;
  id: string;
}) => {
  const storageKey = `${id}`;

  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem(storageKey)) || 0;
  });

  return (
    
<article className="grid w-[320px] h-[400px] bg-stone-700 rounded-lg shadow-md hover:bg-stone-600 overflow-hidden">
  <div className="grid p-4 gap-2 overflow-hidden">
    <h2 className="text-2xl font-bold truncate">{title}</h2>
    <div className="text-neutral-300 overflow-y-auto max-h-48 pr-2">
      <p>{content}</p>
    </div>

    <div className="grid gap-2 mt-auto">
      <cite className="truncate text-sm">Author: {author}</cite>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm">{count}</span>
          <button
            onClick={() => {
              setCount((prev) => {
                const newCount = prev + 1;
                localStorage.setItem(storageKey, JSON.stringify(newCount));
                return newCount;
              });
            }}
            className="flex items-center justify-center h-[24px] w-[24px] bg-neutral-500 hover:bg-neutral-400 rounded-md transition-colors focus:transform scale-100"
          >
            <HeartIcon className="h-[16px] w-[16px] text-neutral-300" />
          </button>
        </div>
        
        <button className="px-3 py-1.5 bg-stone-600 hover:bg-stone-500 text-white text-sm font-medium rounded-md transition-colors border border-stone-500 hover:border-stone-400">
          Read More
        </button>
      </div>
    </div>
  </div>
</article>
  );
};

export default Card;
