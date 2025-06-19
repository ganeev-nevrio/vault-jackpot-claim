
interface CountdownTimerProps {
  timeLeft: number;
}

const CountdownTimer = ({ timeLeft }: CountdownTimerProps) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center mb-6">
      <p className="text-gray-400 text-sm mb-3">NEXT CLAIM AVAILABLE IN</p>
      <div className="relative inline-block">
        {/* Background glow */}
        <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-md"></div>
        
        {/* Timer display */}
        <div className="relative bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30 rounded-xl px-6 py-3">
          <div className="text-3xl font-mono font-bold text-red-400">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
