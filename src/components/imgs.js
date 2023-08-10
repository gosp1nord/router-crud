export default function imgLink() {
  const numImg = Math.floor(Math.random() * (5 - 1)) + 1;
  const strSrc = `../imgs/${numImg}.jpg`
  return strSrc
}

