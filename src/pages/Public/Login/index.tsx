import React, {
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
import { LoginProps } from '../../../typings/db';
import {
  PublicWrap,
  Form,
} from '../../../styles/Public/styles';
// import { AccessTokenAtom } from '../../../atoms/AccessTokenAtom';
import axios, { AxiosRequestConfig } from 'axios';
import useInput from '../../../hooks/useInput';

const Login = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  // const setAccessTokenAtom =
  //   useSetRecoilState(AccessTokenAtom);

  // const onSubmit = useCallback(
  //   async (e: any): Promise<void> => {
  //     e.preventDefault();

  //     setIsError(false);
  //     setErrorText('');

  //     if (!id) {
  //       setIsError(true);
  //       setErrorText('아이디를 입력하세요.');
  //       return;
  //     }
  //     if (!password) {
  //       setIsError(true);
  //       setErrorText('비밀번호를 입력하세요.');
  //       return;
  //     }

  //     const data: LoginProps = { id, pw: password };

  //     const postAxiosConfig: AxiosRequestConfig = {
  //       method: 'POST',
  //       url: `${process.env.REACT_APP_API_PUBLIC_URL}/user/login`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': `http://agree.iptime.org:23000`,
  //         'Access-Control-Allow-Credentials': 'true',
  //       },
  //       data: JSON.stringify(data),
  //     };

  //     try {
  //       const res = await axios.request(postAxiosConfig);
  //       console.log(res);

  //       // if (res?.data.code === 100) {
  //       //   setAccessTokenAtom(res.data.result);
  //       // } else {
  //       //   if (res.data.code === 101) {
  //       //     setIsError(true);
  //       //     setErrorText(
  //       //       '아이디 또는 비밀번호를 확인해 주세요.',
  //       //     );
  //       //   }
  //       //   throw res;
  //       // }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  //   [id, password],
  // );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsError(false);
    setErrorText('');

    if (!id) {
      setIsError(true);
      setErrorText('아이디를 입력하세요.');
      return;
    }
    if (!password) {
      setIsError(true);
      setErrorText('비밀번호를 입력하세요.');
      return;
    }

    const data: LoginProps = { id, pw: password };

    const postAxiosConfig: AxiosRequestConfig = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_PUBLIC_URL}/user/login`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `http://agree.iptime.org:23000`,
        'Access-Control-Allow-Credentials': 'true',
      },
      data: JSON.stringify(data),
    };

    try {
      const res = axios.request(postAxiosConfig);
      console.log(res);

      // if (res?.data.code === 100) {
      //   setAccessTokenAtom(res.data.result);
      // } else {
      //   if (res.data.code === 101) {
      //     setIsError(true);
      //     setErrorText(
      //       '아이디 또는 비밀번호를 확인해 주세요.',
      //     );
      //   }
      //   throw res;
      // }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsError(false);
    setErrorText('');
  }, [id, password]);

  return (
    <PublicWrap>
      <div className="container login">
        <Form onSubmit={onSubmit}>
          <input
            type="text"
            name="id"
            placeholder="EMAIL"
            value={id}
            onChange={onChangeId}
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit">Login</button>
          {isError && <p>{errorText}</p>}
          <div className="link_wrap">
            <Link to="/chat/forgot">Forgot</Link>
            <Link to="/chat/signup">Sign Up</Link>
          </div>
        </Form>
      </div>
    </PublicWrap>
  );
};

export default Login;
