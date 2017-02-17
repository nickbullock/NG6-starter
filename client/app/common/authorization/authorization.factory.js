
const authorizationFactory = function ($window, $cookies) {

  const getToken = () => {
    return $cookies.get("token");
  };

  const setToken = (token) => {
    $cookies.put("token", token);
  };

  const isSignedIn = () => {
    const token = $cookies.get("token");

    return token ? true : false;
  };

  const parseToken = (stateParamString) => {
    return stateParamString.split("=")[1].split("&")[0];
  };

  const authorize = () => {
    $window.location = "https://oauth.yandex.ru/authorize?response_type=token&client_id=" + $window.localStorage.getItem("clientId");
  };

  return { getToken, setToken, isSignedIn, authorize, parseToken};
};

authorizationFactory.$inject = ["$window", "$cookies"];

export default authorizationFactory;
