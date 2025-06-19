
const ClaimLogs = () => {
  const mockLogs = [
    { id: 1, amount: 87.50, time: '2 min ago' },
    { id: 2, amount: 124.25, time: '1 hr ago' },
    { id: 3, amount: 96.75, time: '3 hr ago' },
    { id: 4, amount: 78.30, time: '6 hr ago' },
    { id: 5, amount: 145.60, time: '12 hr ago' }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1"></div>
        <h3 className="text-gray-400 text-sm font-medium">RECENT CLAIMS</h3>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1"></div>
      </div>
      
      <div className="space-y-2">
        {mockLogs.map((log) => (
          <div 
            key={log.id} 
            className="flex justify-between items-center bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-semibold">
                +{log.amount.toFixed(2)} ST
              </span>
            </div>
            <span className="text-gray-500 text-sm">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimLogs;
