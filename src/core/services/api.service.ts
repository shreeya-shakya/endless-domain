const apiEndpoint = `${process.env.domainUrl}/${process.env.apiUrl}/${process.env.version}/${process.env.apiType}/${process.env.resellerID}`;

export function getApi(url: string) {
  return fetch(apiEndpoint + url, {
    method: 'GET',
    // mode: 'no-cors',
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((response) => {
      return response;
    })
    .catch(async (errors) => {
      const errMessage: Error = errors;
      console.log(errMessage);
      if (errors.status) {
        const error = await errors.text();
        if (JSON.parse(error).errors instanceof Array) {
          const errorInvalid = JSON.parse(error).errors.filter((e: any) => e.code === 'DOMAIN_NAME_INVALID')[0];
          throw errorInvalid;
        } else if (typeof JSON.parse(error).errors === 'string') {

        }
        throw error;
      }
      throw errMessage.message;
    });
}
