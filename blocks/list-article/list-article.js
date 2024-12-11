import { createOptimizedPicture } from "../../scripts/aem.js";
async function fetchData(jsonURL) {
  const resp = await fetch(jsonURL);
  const data = await resp.json();
  const dataValue = data;
  const reqDataValue = dataValue.data;

  const titleDescCont = document.createElement("ul");
  titleDescCont.classList.add("title-desc-details");

  reqDataValue.forEach((el) => {
    // console.log(el.path);
    if (el.template.includes("magazine") || el.template.includes("articles")) {
      const li = document.createElement("li");

      const image = document.createElement("img");
      image.src = el.image;
      const pictureElement = createOptimizedPicture(el.image);
      pictureElement.classList.add("allarticle-img");
      titleDescCont.appendChild(pictureElement);

      const allTitle = document.createElement("p");
      allTitle.classList.add("allarticle-title");
      allTitle.innerHTML = el.title;
      titleDescCont.appendChild(allTitle);

      const allDec = document.createElement("p");
      allDec.classList.add("allarticle-descr");
      allDec.innerHTML = el.description;
      titleDescCont.appendChild(allDec);

      li.append(pictureElement);
      li.append(allTitle);
      li.append(allDec);
      titleDescCont.append(li);
    }
  });

  return titleDescCont;
}

export default async function decorate(block) {
  const termsCondJson = block.querySelector('a[href$=".json"]');
  // document.querySelector(`meta[name="template"]`).content;
  const completeData = document.createElement("div");
  completeData.classList.add("terms-cond-block");
  const allHrefs = termsCondJson.href;
  if (termsCondJson) {
    const details = await fetchData(allHrefs);
    completeData.append(details);
    termsCondJson.replaceWith(completeData);
  }
}
