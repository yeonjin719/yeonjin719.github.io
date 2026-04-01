'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';

export default function GeometricBackdrop() {
    const [pointer, setPointer] = useState({ x: 50, y: 50 });

    return (
        <div
            aria-hidden="true"
            className="geometric-backdrop"
            style={
                {
                    '--geo-x': `${pointer.x}%`,
                    '--geo-y': `${pointer.y}%`,
                } as CSSProperties
            }
            onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                setPointer({ x, y });
            }}
        >
            <svg
                viewBox="0 0 620 360"
                className="geometric-svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <g className="geo-ring geo-ring-a">
                    <circle
                        cx="468"
                        cy="116"
                        r="104"
                        fill="none"
                        stroke="rgba(16,32,48,0.08)"
                        strokeWidth="1"
                    />
                    <circle
                        cx="468"
                        cy="116"
                        r="74"
                        fill="none"
                        stroke="rgba(47,99,214,0.14)"
                        strokeWidth="1"
                    />
                    <path
                        d="M408 116 A60 60 0 0 1 528 116"
                        fill="none"
                        stroke="rgba(16,32,48,0.16)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </g>

                <g className="geo-frame geo-frame-a">
                    <rect
                        x="104"
                        y="70"
                        width="118"
                        height="118"
                        rx="20"
                        transform="rotate(45 163 129)"
                        fill="rgba(255,255,255,0.22)"
                        stroke="rgba(47,99,214,0.14)"
                    />
                    <rect
                        x="132"
                        y="98"
                        width="62"
                        height="62"
                        rx="12"
                        transform="rotate(45 163 129)"
                        fill="none"
                        stroke="rgba(16,32,48,0.12)"
                    />
                </g>

                <g className="geo-grid">
                    <path
                        d="M44 246 H282"
                        fill="none"
                        stroke="rgba(16,32,48,0.08)"
                        strokeWidth="1"
                    />
                    <path
                        d="M44 278 H242"
                        fill="none"
                        stroke="rgba(47,99,214,0.12)"
                        strokeWidth="1"
                    />
                    <path
                        d="M84 214 V310"
                        fill="none"
                        stroke="rgba(16,32,48,0.06)"
                        strokeWidth="1"
                    />
                </g>

                <g className="geo-pulse">
                    <circle
                        cx="332"
                        cy="246"
                        r="14"
                        fill="rgba(255,255,255,0.74)"
                        stroke="rgba(47,99,214,0.18)"
                    />
                    <circle
                        cx="332"
                        cy="246"
                        r="34"
                        fill="none"
                        stroke="rgba(47,99,214,0.1)"
                        strokeWidth="1"
                    />
                </g>
            </svg>
        </div>
    );
}
