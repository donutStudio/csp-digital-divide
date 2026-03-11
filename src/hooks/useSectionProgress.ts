import { useEffect, useMemo, useState } from 'react';

export const useSectionProgress = (ids: string[]) => {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.9], rootMargin: '-20% 0px -40% 0px' }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ids]);

  return useMemo(() => ({ active }), [active]);
};
