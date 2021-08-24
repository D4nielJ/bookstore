/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable camelcase */
class ApiAccess {
  request = (url, params = {}, method = 'GET') => {
    let newUrl = url;
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };

    const options = {
      method,
      headersList,
    };
    if (method === 'GET') {
      newUrl += `?${new URLSearchParams(params).toString()}`;
    } else if (method === 'DELETE') {
      newUrl += `/${params.item_id}`;
    }

    return fetch(newUrl, options);
  };

  get = async (url, params, callback) => {
    const response = await this.request(url, params, 'GET');
    if (response.ok) {
      if (callback !== undefined) {
        callback();
      }
      return response.json();
    }
    return '';
  };

  post = async (url, params = {}) => {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };

    const body = params;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headersList,
    });
    return response;
  };

  delete = async (url, params) => {
    const response = await this.request(url, params, 'DELETE');
    return response;
  };
}

const apiAccess = new ApiAccess();
export default apiAccess;
