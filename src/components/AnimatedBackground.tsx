export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#171717]">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#DA0037] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#DA0037] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#DA0037] rounded-full mix-blend-screen filter blur-[128px] opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#444444] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob-reverse"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#171717]/50 to-[#171717]"></div>
    </div>
  );
}
