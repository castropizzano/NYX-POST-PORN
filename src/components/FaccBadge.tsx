export function FaccBadge() {
  return (
    <div className="fixed top-4 right-4 md:absolute md:top-6 md:-right-2 lg:-right-3 z-50 pointer-events-none">
      <img
        src="/images/facc-badge.png"
        alt="FACC 2025 - Selección Oficial"
        className="w-[84px] h-[84px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
}
