import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

const Card = ({
  id,
  title,
  content,
  author,
  likes,
}: {
  id: string;
  title: string;
  content: string;
  author: string;
  likes?: number;
}) => {
  const [count, setCount] = useState(likes ?? 0);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLong, setIsLong] = useState(content.length > 500);

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    setHasLiked(true);
    setCount(count + 1);

    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        likes: increment(1),
      });
    } catch (err) {
      console.error("Error updating likes:", err);
      // Revert update on error
      setCount(count);
      setHasLiked(false);
    } finally {
      setIsLiking(false);
    }
  };

  const truncateContent = (text: string, maxLength: number = 400) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "... ";
  };

  return (
    <article className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 hover:border-slate-600/60 max-w-full sm:max-w-md">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-4 sm:p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-8 line-clamp-2 group-hover:text-blue-100 transition-colors duration-200">
            {title}
          </h2>
          <div className="flex items-center gap-2 my-2 sm:my-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-gray-300 font-medium">By {author}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-6 overflow-auto text-white">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-4 py-3 rounded-lg break-words break-all">
            {isLong ? truncateContent(content) : content}
            {isLong && <button className="text-blue-400" onClick={() => {setIsLong(!isLong)}}>Read More</button>}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              disabled={isLiking}
              className={`group/like relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                hasLiked
                  ? "bg-red-500/20 hover:bg-red-500/30 border border-red-500/30"
                  : "bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/60"
              } ${isLiking ? "scale-95" : "hover:scale-105"}`}
            >
              <div className="relative">
                {hasLiked ? (
                  <HeartIcon
                    className={`w-4 h-4 text-red-400 transition-all duration-200 ${
                      isLiking ? "animate-ping" : "group-hover/like:scale-110"
                    }`}
                  />
                ) : (
                  <HeartOutlineIcon className="w-4 h-4 text-gray-400 group-hover/like:text-red-400 group-hover/like:scale-110 transition-all duration-200" />
                )}
                {isLiking && (
                  <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30"></div>
                )}
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-200 ${
                  hasLiked ? "text-red-300" : "text-gray-400 group-hover/like:text-gray-200"
                }`}
              >
                {count}
              </span>
            </button>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </article>
  );
};

export default Card;
