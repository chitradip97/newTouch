"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { label: "Homes for Rent", value: 980, suffix: "+" },
  { label: "Homes to Buy", value: 800, suffix: "+" },
  { label: "Cities Covered", value: 100, suffix: "+" },
  { label: "Total Properties", value: 2000, suffix: "+" },
];

function CountUp({ target, suffix, isInView }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target]);

  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="container-custom pb-16 sm:pb-20"
      aria-label="Platform statistics"
    >
      <dl className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <dt className="order-2 mt-1 text-xs font-medium text-neutral-500 sm:text-sm">
              {stat.label}
            </dt>
            <dd className="order-1 text-3xl font-bold text-neutral-900 sm:text-4xl">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}