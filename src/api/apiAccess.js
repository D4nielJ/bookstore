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
      newUrl += `?${(new URLSearchParams(params)).toString()}`;
    } else {
      options.body = JSON.stringify(params);
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

  // eslint-disable-next-line no-unused-vars
  // post = async (url, params, callback) => {
  //   const response = await this.request(url, params, 'POST');
  //   if (callback !== undefined && response.ok) {
  //     callback();
  //   }
  //   return response;
  // };

  post = async (item_id, category, title) => {
    const headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
    };

    const body = {
      item_id, category, title,
    };

    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMlwiHaSBLEL62sFo84R/books', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headersList,
    });
    return response;
  }
}

const apiAccess = new ApiAccess();
export default apiAccess;
