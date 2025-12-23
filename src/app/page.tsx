{/* 2. FREE TICKETS (Ada Label NEW) */}
          <div className="flex flex-col items-center justify-center text-gray-400 hover:text-pink-400 cursor-pointer relative group">
            {/* Label New */}
            <div className="absolute -top-3 right-1 bg-yellow-400 text-black text-[8px] font-bold px-1.5 py-0.5 rounded-[4px] animate-pulse">NEW</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="13" x="3" y="6" rx="2"/><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/></svg>
            <span className="text-[9px] mt-1 font-medium tracking-wide group-hover:text-white transition-colors">FREE</span>
          </div>

          {/* 3. HOME (Tengah Besar) */}
          <div className="flex flex-col items-center justify-center relative -top-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/40 border-[5px] border-[#0f0f1d] transform active:scale-95 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
          </div>

          {/* 4. SPONSORS */}
          <div className="flex flex-col items-center justify-center text-gray-400 hover:text-pink-400 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 2 0l.28-.28a5.79 5.79 0 0 1 7.06-.87l2.81 2.81a1 1 0 1 1-3 3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3 3l2.5 2.5"/><path d="m16 17 4 4"/></svg>
            <span className="text-[9px] mt-1 font-medium tracking-wide group-hover:text-white transition-colors">SPONSORS</span>
          </div>

          {/* 5. ACCOUNT */}
          <div className="flex flex-col items-center justify-center text-gray-400 hover:text-pink-400 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-[9px] mt-1 font-medium tracking-wide group-hover:text-white transition-colors">ACCOUNT</span>
          </div>

        </div>
      </div>
    </div>
  );
}
