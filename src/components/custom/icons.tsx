interface IconProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}

export const SophonsIcon = ({ width = 55, height = 55, color = "#000", className }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M152.716 44.6238C212.274 39.4402 266.014 81.9147 274.156 141.793C282.548 203.511 239.318 260.347 177.6 268.739C115.882 277.131 59.0457 233.901 50.6538 172.182C49.5207 163.848 49.3298 155.603 49.9976 147.555C50.1276 150.618 50.3995 153.703 50.8208 156.802C58.181 210.931 108.028 248.845 162.158 241.485C216.287 234.125 254.201 184.278 246.841 130.148C240.27 81.821 199.832 46.4202 152.716 44.6238Z" fill="url(#paint0_radial_33_6)" />
            <path d="M126.332 1.34839C206.221 -9.51418 279.789 46.4429 290.652 126.332C293.474 147.082 291.785 167.406 286.342 186.315C289.395 172.178 290.085 157.279 288.024 142.119C278.516 72.19 214.119 23.2095 144.19 32.7175C74.2613 42.226 25.2798 106.623 34.7878 176.552C44.2961 246.481 108.694 295.462 178.623 285.954C188.232 284.647 197.444 282.301 206.165 279.05C193.604 284.723 180.023 288.7 165.669 290.652C85.7798 301.515 12.2109 245.558 1.34836 165.669C-9.51408 85.7799 46.443 12.2111 126.332 1.34839Z" fill="url(#paint1_radial_33_6)" />
            <circle cx="142" cy="138" r="72" fill="url(#paint2_radial_33_6)" />
            <defs>
                <radialGradient id="paint0_radial_33_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102.919 101.751) rotate(47.4002) scale(136.962 136.962)">
                    <stop stopColor="#FCE6FF" />
                    <stop offset="0.510421" stopColor="#FDF0FF" />
                    <stop offset="1" stopColor="#6B3174" />
                </radialGradient>
                <radialGradient id="paint1_radial_33_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(69 74.5) rotate(47.4002) scale(177.286 177.285)">
                    <stop stopColor="#FCE6FF" />
                    <stop offset="0.510421" stopColor="#FDF0FF" />
                    <stop offset="1" stopColor="#6B3174" />
                </radialGradient>
                <radialGradient id="paint2_radial_33_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.028 102.74) rotate(47.4002) scale(87.4286 87.4284)">
                    <stop stopColor="#FCE6FF" />
                    <stop offset="0.510421" stopColor="#FDF0FF" />
                    <stop offset="1" stopColor="#6B3174" />
                </radialGradient>
            </defs>
        </svg>

    )
}
