
interface ClaimButtonProps {
  canClaim: boolean;
  onClick: () => void;
  timeLeft: number;
}

const ClaimButton = ({ canClaim, onClick, timeLeft }: ClaimButtonProps) => {
  return (
    <div className="mb-8">
      <button
        onClick={onClick}
        disabled={!canClaim}
        className={`
          w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden
          ${canClaim 
            ? 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 active:scale-95' 
            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        {/* Animated background for enabled state */}
        {canClaim && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        )}
        
        {/* Button text */}
        <span className="relative z-10">
          {canClaim ? '🎰 CLAIM REWARD' : `⏰ WAIT ${timeLeft}s`}
        </span>
        
        {/* Glow effect for enabled state */}
        {canClaim && (
          <div className="absolute inset-0 rounded-2xl bg-yellow-400/30 blur-sm animate-pulse"></div>
        )}
      </button>
    </div>
  );
};

export default ClaimButton;
