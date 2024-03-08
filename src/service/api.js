import axios from "axios";

class ApiRoutes {
  constructor(baseURL) {
    if (!baseURL) {
      throw new Error("La URL base es obligatoria");
    }

    if (typeof baseURL !== "string") {
      throw new Error("La URL base debe ser una cadena de texto");
    }

    if (!baseURL.startsWith("http://") && !baseURL.startsWith("https://")) {
      throw new Error("La URL base debe comenzar con http:// o https://");
    }

    if (baseURL.endsWith("/")) {
      baseURL = baseURL.slice(0, -1);
    }

    this._endpoints = {};
    this._baseURL = baseURL;

    const token = localStorage.getItem("token");

    const config = {
      baseURL: this._baseURL,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };

    this._fetch = axios.create(config);
  }

  addEndpoint(endpointName, path) {
    if (this._endpoints[endpointName]) {
      console.warn(`El endpoint "${endpointName}" ya existe. No se agregará.`);
      return;
    }
    const endpointURL = `${this._baseURL}${path}`;

    this._endpoints[endpointName] = endpointURL;
  }

  fetchGetEndpoint(endpointName, params) {
    return this._fetch.get(this._endpoints[endpointName], { params });
  }

  fetchPostEndpoint(endpointName, data) {
    return this._fetch.post(this._endpoints[endpointName], data);
  }

  saveAuthToken(token) {
    if (!token) {
      throw new Error("El token es obligatorio");
    }

    if (typeof token !== "string") {
      throw new Error("El token debe ser una cadena de texto");
    }

    const tokenFormatted = token.startsWith("Bearer")
      ? token
      : `Bearer ${token}`;

    localStorage.setItem("token", tokenFormatted);
    this._fetch.defaults.headers.common["Authorization"] = tokenFormatted;
  }

  removeAuthToken() {
    delete this._fetch.defaults.headers.common["Authorization"];
  }
}

// const api = new ApiRoutes("https://zenify-apirest.onrender.com/");
const api = new ApiRoutes("http://localhost:4000/");

// User's endpoints
// Auth
console.log(api._endpoints["register"]);
api.addEndpoint("register", "/user/auth/register");
api.addEndpoint("login", "/user/auth/login");
// Email
api.addEndpoint("sendOneEmail", "/user/email/send");
api.addEndpoint("sendBulkEmail", "/user/email/send/bulk");

console.log(api._endpoints["register"]);

export default api;
