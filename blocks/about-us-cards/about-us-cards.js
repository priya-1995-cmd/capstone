async function fetchData(jsonURL) {
  const resp = await fetch(jsonURL);
  const data = await resp.json();
  const dataValue = data;
  const reqDataValue = dataValue.data;

  const titleDescCont = document.createElement('div');
  titleDescCont.classList.add('title-desc-details');

  reqDataValue.forEach((el) => {
    const allImages = document.createElement('div');
    allImages.classList.add('image-list');
    allImages.innerHTML = el.Image;
    titleDescCont.appendChild(allImages);

    const allName = document.createElement('div');
    allName.classList.add('name-list');
    allName.innerHTML = el.Name;
    titleDescCont.appendChild(allName);

    const allTeach = document.createElement('div');
    allTeach.classList.add('teach-list');
    allTeach.innerHTML = el.Teachnology;
    titleDescCont.appendChild(allTeach);

    const allIcons = document.createElement('div');
    allIcons.classList.add('icons-list');
    allIcons.innerHTML = el.Icons;
    titleDescCont.appendChild(allIcons);
  });

  return titleDescCont;
}

export default async function decorate(block) {
  const termsCondJson = block.querySelector('a[href$=".json"]');
  const completeData = document.createElement('div');
  completeData.classList.add('terms-cond-block');

  const allHrefs = termsCondJson.href;

  if (termsCondJson) {
    const details = await fetchData(allHrefs);
    completeData.append(details);
    termsCondJson.replaceWith(completeData);
  }
}
