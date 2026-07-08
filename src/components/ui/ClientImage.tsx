'use client';

/**
 * ClientImage — a thin client-side wrapper around <img> that swaps in a
 * branded SVG placeholder if the source fails to load.
 *
 * Use this inside Server Components instead of plain <img onError={...}>,
 * because event handlers are illegal in React Server Components.
 */

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111111'/%3E%3Cpolygon points='0,360 400,80 800,360 720,360 400,148 80,360' fill='%23C4922A' opacity='0.5'/%3E%3Ctext x='400' y='460' font-family='Arial%2C sans-serif' font-size='18' font-weight='700' fill='%23C4922A' text-anchor='middle'%3EKonkus Construction%3C/text%3E%3Ctext x='400' y='490' font-family='Arial%2C sans-serif' font-size='13' fill='%23C4922A' opacity='0.6' text-anchor='middle'%3EDownriver Michigan%3C/text%3E%3C/svg%3E";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function ClientImage({ src, alt, className, loading = 'lazy' }: ClientImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== FALLBACK_SRC) {
          img.src = FALLBACK_SRC;
        }
      }}
    />
  );
}
