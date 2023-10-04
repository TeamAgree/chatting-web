import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AccessTokenAtom } from '../../atoms/AccessTokenAtom';

const Public = () => {
  const AccessToken = useRecoilValue(AccessTokenAtom);

  if (AccessToken)
    return <Navigate to="/chatList" replace={true} />;
  else
    return (
      <div>
        <Outlet />
      </div>
    );
};

export default Public;
