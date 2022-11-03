// This code is copy from:
// https://github.com/maoberlehner/distributed-vue-applications-loading-components-via-http/blob/master/src/utils/external-component.js

export default async function (url) {
  const name = url
    .split(`/`)
    .reverse()[0]
    .match(/^(.*?)\.umd/)[1];

  if (window[name]) return window[name];

  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement(`script`);
    script.async = true;
    script.addEventListener(`load`, () => {
      resolve(window[name]);
    });
    script.addEventListener(`error`, () => {
      reject(new Error(`Error loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });

  return window[name];
}
