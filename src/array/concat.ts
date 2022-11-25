const concat = (params: any[]) => {
  return params.map(m => (Array.isArray(m) ? m[0] : m));
};

export default concat;
