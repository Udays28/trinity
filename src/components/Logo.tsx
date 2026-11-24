export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 540 160" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Trefoil Icon */}
      <g transform="translate(90, 85)" fill="currentColor">
        <path d="M 0,0 C -35,-20 -35,-65 0,-85 C 35,-65 35,-20 0,0 Z" />
        <path d="M 0,0 C -35,-20 -35,-65 0,-85 C 35,-65 35,-20 0,0 Z" transform="rotate(120)" />
        <path d="M 0,0 C -35,-20 -35,-65 0,-85 C 35,-65 35,-20 0,0 Z" transform="rotate(240)" />
      </g>
      
      {/* Text Group */}
      <g transform="translate(190, 95)" fill="currentColor">
        <text x="0" y="0" fontFamily="Times New Roman, serif" fontSize="56" letterSpacing="4">TRIN</text>
        
        {/* Lightning Bolt (acts as 'I') */}
        <g transform="translate(170, -15)">
          <path d="M 15,-40 L -5,-5 L 8,-5 L -15,40 L 5,5 L -8,5 Z" fill="#FFC107" />
        </g>
        
        <text x="195" y="0" fontFamily="Times New Roman, serif" fontSize="56" letterSpacing="4">TY</text>
        
        {/* TM */}
        <text x="290" y="-35" fontFamily="sans-serif" fontSize="14">TM</text>
        
        {/* Power */}
        <text x="170" y="42" fontFamily="Times New Roman, serif" fontSize="30" letterSpacing="2">Power</text>
      </g>
    </svg>
  );
}
