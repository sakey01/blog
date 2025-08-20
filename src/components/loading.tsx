export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-stone-900">
      {/* Smooth pulsing bars */}
      <div className="flex space-x-2">
        <div className="w-3 h-8 bg-stone-500 rounded animate-bounceDelay"></div>
        <div className="w-3 h-8 bg-stone-500 rounded animate-bounceDelay animation-delay-150"></div>
        <div className="w-3 h-8 bg-stone-500 rounded animate-bounceDelay animation-delay-300"></div>
      </div>

      {/* Gentle text */}
      <p className="mt-6 text-stone-300 text-base font-mono animate-pulse">
        Loading blog content...
      </p>
    </div>
  );
}
