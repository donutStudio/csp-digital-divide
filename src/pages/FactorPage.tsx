import { Navigate, useParams } from 'react-router-dom';
import { FactorDetail } from '../components/FactorDetail';
import { factors } from '../data/factors';

export const FactorPage = () => {
  const { factorId } = useParams();
  const factor = factors.find((item) => item.id === factorId);

  if (!factor) {
    return <Navigate to="/explorer" replace />;
  }

  return <FactorDetail factor={factor} />;
};
