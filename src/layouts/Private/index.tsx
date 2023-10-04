import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AccessTokenAtom } from '../../atoms/AccessTokenAtom';

const Private = () => {
  const AccessToken = useRecoilValue(AccessTokenAtom);

  if (!AccessToken)
    return <Navigate to="/login" replace={true} />;
  else
    return (
      <div>
        <Outlet />
      </div>
    );
};

export default Private;
