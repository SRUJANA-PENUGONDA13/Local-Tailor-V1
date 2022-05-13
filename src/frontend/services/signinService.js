import axios from "axios";
const signinService = async ({ email, password }) => {
  const foundUser = "";
  const encodedToken = "";
  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post(`/api/auth/login`, {
      email: email,
      password: password,
    });

    return { foundUser, encodedToken };
  } catch (e) {
    return {};
  }
};
export { signinService };
