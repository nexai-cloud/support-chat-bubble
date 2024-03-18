export const NexaiWaveFormSVG = ({
  className = ''
}) => (
  <svg id="mainSVG" className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 800 600`}>
    <linearGradient id="grad1" x1="393.05" y1="400" x2="393.05" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#993BDC"/>
      <stop offset="1" stopColor="#35AAF9"/>
    </linearGradient>	
    <g id="bg" fill="none" stroke="url(#grad1)"  strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3">
        <path d="M594.6,350l-.1-100.29V250"/>
        <line x1="580.5" y1="390" x2="580.32" y2="210"/>
        <line x1="565.5" y1="415" x2="565.28" y2="185"/>
        <line x1="550.5" y1="434" x2="550.24" y2="166"/>
        <line x1="535.5" y1="449" x2="535.22" y2="151"/>
        <line x1="520.5" y1="462" x2="520.2" y2="138"/>
        <line x1="505.5" y1="472" x2="505.18" y2="128"/>
        <line x1="490.5" y1="480" x2="490.16" y2="120"/>
        <line x1="475.5" y1="487" x2="475.14" y2="113"/>
        <line x1="460.5" y1="492" x2="460.14" y2="108"/>
        <line x1="445.5" y1="496" x2="445.12" y2="104"/>
        <line x1="430.5" y1="499" x2="430.12" y2="101"/>
        <line x1="415.5" y1="501" x2="415.12" y2="99"/>
        <line x1="400.5" y1="501" x2="400.12" y2="99"/>
        <line x1="385.5" y1="501" x2="385.12" y2="99"/>
        <line x1="370.5" y1="499" x2="370.12" y2="101"/>
        <line x1="355.5" y1="496" x2="355.12" y2="104"/>
        <line x1="340.5" y1="492" x2="340.14" y2="108"/>
        <line x1="325.5" y1="487" x2="325.14" y2="113"/>
        <line x1="310.5" y1="480" x2="310.16" y2="120"/>
        <line x1="295.5" y1="472" x2="295.18" y2="128"/>
        <line x1="280.5" y1="462" x2="280.2" y2="138"/>
        <line x1="265.5" y1="449" x2="265.22" y2="151"/>
        <line x1="250.5" y1="434" x2="250.24" y2="166"/>
        <line x1="235.5" y1="415" x2="235.28" y2="185"/>
        <line x1="220.5" y1="390" x2="220.32" y2="210"/>
        <polyline points="204.5 350 204.5 350.29 204.5 250"/>
    </g>
  </svg>
);
