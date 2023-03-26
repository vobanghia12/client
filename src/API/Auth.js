import axios from "axios";

const REST_API_URL = "https://lqdon.com";

const onRegister = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/registration/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onVerifyEmail = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/registration/verify-email/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onResendVerify = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/registration/resend-email/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onLogin = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/login/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onResetPassword = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/password/reset/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onResetPasswordConfirm = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/password/reset/confirm/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onResetPasswordChange = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/password/change/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onReFreshToken = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/token/refresh/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onVerifyToken = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/token/verify/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onUserDetail = async (body) => {
  try {
    const { res } = await axios.get(`${REST_API_URL}/api-auth/v1/user/`, body);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onGetMe = async (body) => {
  try {
    const { res } = await axios.get(`${REST_API_URL}/api/v1/me/`, body);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onRegisterMetamask = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/metamask/registration/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onGetNonce = async (body) => {
  try {
    const { res } = await axios.get(
      `${REST_API_URL}/api-auth/v1/metamask/registration/0xed00Af4d737712dAE2e4a2DaB61E257053862191`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onLoginMetamask = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/metamask/login/0xed00Af4d737712dAE2e4a2DaB61E257053862191`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onDiscord = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/discord/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onGithub = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/github/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onSignMessage = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api/v1/sign-message/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const onNewRequest = async (body) => {
  try {
    const { res } = await axios.post(
      `${REST_API_URL}/api-auth/v1/registration/manufacturer/`,
      body
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
