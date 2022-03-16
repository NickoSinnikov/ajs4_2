// TODO: write your code here
export default function sortHealth(data) {
  data.sort((a, b) => a.health - b.health).reverse();
  return data;
}
