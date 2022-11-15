const apiEndpointThirdParty = `${process.env.domainUrl}/${process.env.apiUrl}/${process.env.version}/${process.env.apiType}/${process.env.resellerID}`;
const apiEndpoint = `${process.env.apiDomainUrl}/${process.env.apiUrl}/${process.env.apiVersion}`;

export function getApi(url: string) {
  return fetch(apiEndpointThirdParty + url, {
    method: "GET",
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
          const errorInvalid = JSON.parse(error).errors.filter(
            (e: any) => e.code === "DOMAIN_NAME_INVALID"
          )[0];
          throw errorInvalid;
        } else if (typeof JSON.parse(error).errors === "string") {
        }
        throw error;
      }
      throw errMessage.message;
    });
}

export function postApi(url: string, formData: any, headers?: HeadersInit) {
  console.log(formData)
  return fetch(apiEndpoint + url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch(async (errors) => {
      console.log(errors);
      const errMessage: Error = errors;
      if (errors.status) {
        const error = await errors.text();
        if (JSON.parse(error).message instanceof Array) {
          JSON.parse(error).message.map((err: any) => {
            throw err;
          });
        } else if (typeof JSON.parse(error).message === "string") {
          throw JSON.parse(error).message;
        }
      }
      if (errMessage.message.includes("Failed to fetch")) {
        throw errMessage.message;
      }
    });
}
