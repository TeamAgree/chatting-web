import styled from 'styled-components';

export const LoginWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c1d7c6;

  div.container {
    padding: 3rem;

    min-width: 20rem;
    height: 18rem;
    max-height: 18rem;
    background: #fff;
    box-shadow: 0px 0px 5px 0px #54545466;

    input {
      margin-bottom: 3px;

      height: 2.5rem;

      border: none;
      border-bottom: 1px solid #eaeaea;

      text-indent: 10px;
    }

    button {
      font-size: 1.3rem;
      color: #349753;
    }

    div.link_wrap {
      text-align: center;
      a {
        padding: 1rem;
        color: #a1a1a1;
        font-size: 13px;
      }
    }
  }
`;

export const SignUpWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c1d7c6;

  div.container {
    padding: 3rem;

    min-width: 20rem;
    height: 35rem;
    max-height: 100%;
    background: #fff;
    box-shadow: 0px 0px 5px 0px #54545466;

    input {
      margin-bottom: 3px;

      height: 2.5rem;

      border: none;
      border-bottom: 1px solid #eaeaea;

      text-indent: 10px;
    }

    button {
      font-size: 1.3rem;
      color: #349753;
    }

    div.link_wrap {
      text-align: center;
      a {
        padding: 1rem;
        color: #a1a1a1;
        font-size: 13px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  height: 100%;
`;
