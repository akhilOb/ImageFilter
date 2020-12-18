export const filterOutWithKey = (data, key) => {
  const outData = data.filter(word => word.name === key);
  console.log(outData, "OutDayta in utils")
  return outData;
}