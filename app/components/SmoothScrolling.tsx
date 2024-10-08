"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }:any) {

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, orientation:'vertical',gestureOrientation:'both' }}>
      {children}
    </ReactLenis>
  );
}
