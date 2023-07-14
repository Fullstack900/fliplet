const axios = require("axios");

async function parse(inputArray) {
  const apiUrl = "https://api.fliplet.com/v1/widgets/assets";

  const parsePackages = (assetList) => {
    if (!assetList) {
      return [];
    }

    return inputArray.reduce((result, packageName) => {
      const matchingAssets = assetList.filter((asset) =>
        asset.includes(packageName)
      );
      return result.concat(matchingAssets);
    }, []);
  };

  const fetchAssetList = async () => {
    try {
      const response = await axios.get(apiUrl);
      const assetData = response?.data?.assets;

      const assets = Object.keys(assetData).map((key) => key);
      return assets;
    } catch (error) {
      console.error("Error retrieving asset list:", error);
      return [];
    }
  };

  try {
    const assetList = await fetchAssetList();
    const parsedAssets = parsePackages(assetList);
    return parsedAssets;
  } catch (error) {
    console.error("Error parsing assets:", error);
    return [];
  }
}

parse(["bootstrap", "fliplet-core", "moment", "jquery"]).then(function (
  assets
) {
  console.log("The list is", assets);
});
