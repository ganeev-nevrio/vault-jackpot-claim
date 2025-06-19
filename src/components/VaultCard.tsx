
import { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import ClaimButton from "./ClaimButton";
import ClaimLogs from "./ClaimLogs";

const VaultCard = () => {
  const [balance, setBalance] = useState(1247.83);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canClaim, setCanClaim] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanClaim(true);
    }
  }, [timeLeft]);

  const handleClaim = () => {
    const claimAmount = Math.floor(Math.random() * 100) + 50;
    setBalance(prev => prev + claimAmount);
    setTimeLeft(60);
    setCanClaim(false);
  };

  return (
    <div className="relative">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 rounded-3xl blur-xl"></div>
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-yellow-500/30 rounded-3xl p-6 shadow-2xl">
        {/* Header with decorative elements */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              VAULT CLAIM
            </h1>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        </div>

        {/* ST Balance */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm font-medium mb-2">ST BALANCE</p>
          <div className="relative">
            <div className="text-4xl font-bold text-white mb-1">
              {balance.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </div>
            <div className="text-yellow-400 text-lg font-semibold">ST</div>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer timeLeft={timeLeft} />

        {/* Claim Button */}
        <ClaimButton 
          canClaim={canClaim} 
          onClick={handleClaim}
          timeLeft={timeLeft}
        />

        {/* Claim Logs */}
        <ClaimLogs />
      </div>
    </div>
  );
};

export default VaultCard;
