import shopData from "./shopData.jsx";

const getFetchRequest = async (url) => {
  const pattern = /[1-9]/g;
  const lastParam = url.split("/").pop();
  const singleProduct = lastParam.match(pattern);

  return await new Promise((resolve, reject) => {
    if (singleProduct) {
      const product = shopData.find((data) => {
        if (data.id === Number(lastParam)) return data;
      });

      product ? resolve(product) : reject(new Error("Product not found"));
    } else {
      resolve(shopData);
    }
  });
};

export default getFetchRequest;
