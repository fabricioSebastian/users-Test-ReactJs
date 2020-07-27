

export const apiget = (url) => () => fetch(url).then(v => v.json());