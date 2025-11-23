'use client';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] h-full w-full bg-[#0B1120]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] opacity-40 rotate-12" />
      </div>
    </div>
  );
}
