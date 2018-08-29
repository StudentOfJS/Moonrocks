import { API_URL } from "../constants";

// request the token
// subscribe to this event and use the returned json to save your token to state or session storage
export const requestAccessToken = (data: string) => {
  const loginInfo = `${data}&grant_type=password`;
  return fetch(`${API_URL}/token`, {
    body: loginInfo,
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    method: "POST"
  }).then(response => response.json());

  // in your case set state to returned token
};

// use said token to authenticate request
export const requestUserInfo = (token: string) => {
  return fetch(`${API_URL}/userinfo`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`
    }),
    method: "GET"
  }).then(response => response.json());
};
