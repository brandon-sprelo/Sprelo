import Cookies from "js-cookie";

export const setAccessTokenCookie = (token: string) => {
  Cookies.set("access_token", token, {
    expires: 1, // expire the cookie after 1 day
    // secure: true, // only send the cookie over HTTPS
    // sameSite: "strict", // enforce same-site policy
    // httpOnly: true, // prevent client-side access to the cookie
    // path: '/', domain: 'localhost'
  });
};

export const getAccessToken = () => Cookies.get("access_token");

export const deleteAccessToken = () => Cookies.remove("access_token");
