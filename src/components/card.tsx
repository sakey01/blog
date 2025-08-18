import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Card = ({
  title,
  content,
  author,
  likeCount
}: {
  title: string;
  content: string;
  author: string;
  likeCount?: number;
}) => {
  // Correctly use [count, setCount]
  const [count, setCount] = useState(likeCount ?? 0);

  return (
    <article className="grid w-[280px] h-[360px] bg-stone-700 text-white rounded-lg shadow-md hover:bg-stone-600 overflow-hidden">
      <div className="grid p-4 gap-2 overflow-hidden">
        <h2 className="text-2xl font-bold truncate">{title}</h2>
        <div className="text-neutral-300 overflow-y-auto max-h-48 pr-2">
          <p>{content}</p>
        </div>

        <div className="grid gap-2 mt-auto">
          {author && <cite className="text-sm">Author: {author}</cite>}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Show the current count */}
              <span className="text-sm">{count}</span>
              <button
                onClick={() => {
                  setCount((prev: number) => prev + 1);
                }}
                className="flex items-center justify-center h-[24px] w-[24px] bg-neutral-500 hover:bg-neutral-400 rounded-md transition-colors focus:transform scale-100"
              >
                <HeartIcon className="h-[16px] w-[16px] text-neutral-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
