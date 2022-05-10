import axios from "axios";

const signupService = async ({ name, email, password }) => {
  try {
    const {
      data: { encodedToken },
    } = await axios.post(`/api/auth/signup`, {
      firstName: name,
      lastName: "",
      email: email,
      password: password,
    });

    return encodedToken;
  } catch (e) {
    console.error(e);
  }
};
export { signupService };
