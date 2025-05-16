import shopData from "./shopData.jsx";

const getFetchRequest = async () => {
  return await new Promise((resolve) => resolve(shopData));
};

export default getFetchRequest;
