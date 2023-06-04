import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';

export function useTablet() {
  const isTablet = useMedia('(max-width: 1200px)');
  const [tabletScreen, setTabletScreen] = useState(false);

  useEffect(() => {
    setTabletScreen(isTablet);
  }, [isTablet]);

  return [tabletScreen];
}
