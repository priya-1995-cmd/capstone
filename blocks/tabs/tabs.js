// eslint-disable-next-line import/no-unresolved
import { toClassName } from "../../scripts/aem.js";

const tabData = {
  all: [
    {
      image:
        "https://wknd.site/us/en/adventures/_jcr_content/root/container/teaser.coreimg.60.1600.jpeg/1660323801921/adobestock-216674449.jpeg",
      title: "Bali Surf Camp",
      description: "Surfing in Bali is on the bucket",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/beervana-portland/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323790531/adobestock-200192344.jpeg",
      title: "Beervana in Portland",
      description: "This adventure will provide insider",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/climbing-new-zealand/_jcr_content/root/container/carousel/item_1571266094599.coreimg.60.1600.jpeg/1660323785724/sport-climbing.jpeg",
      title: "Climbing New Zealand",
      description: "Let us help you make your New Zealand",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/colorado-rock-climbing/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789363/adobestock-201222633.jpeg",
      title: "Colorado Rock Climbing",
      description: "With all of Colorados beautiful",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/cycling-southern-utah/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323777766/adobestock-185324648.jpeg",
      title: "Cycling Southern Utah",
      description: "Join us as we explore the rugged, st",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/cycling-tuscany/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789294/adobestock-59459597.jpeg",
      title: "Cycling Tuscany",
      description: "Visiting Tuscany on a bicycle is about",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/downhill-skiing-wyoming/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323784078/adobestock-185234795.jpeg",
      title: "Downhill Skiing Wyoming",
      description: "A skiers paradise far from crowds a",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/gastronomic-marais-tour/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323786247/adobestock-294203896.jpeg",
      title: "Gastronomic Marais Tour",
      description: "Take a VIP gastronomic tour through",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/napa-wine-tasting/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323791204/adobestock-280313729.jpeg",
      title: "Napa Wine Tasting",
      description: "Enjoy spectacular wine tasting in t",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/riverside-camping-australia/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323783461/adobe-waadobe-wa-mg-2466.jpeg",
      title: "Riverside Camping",
      description: "Siegel River Australia",
    },
  ],
  climbing: [
    {
      image:
        "https://wknd.site/us/en/adventures/climbing-new-zealand/_jcr_content/root/container/carousel/item_1571266094599.coreimg.60.1600.jpeg/1660323785724/sport-climbing.jpeg",

      title: "Climbing New Zealand",
      description: "Let us help you make your New Zealand",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/colorado-rock-climbing/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789363/adobestock-201222633.jpeg",
      title: "Colorado Rock Climbing",
      description: "With all of Colorados beautiful peak",
    },
  ],
  cycling: [
    {
      image:
        "https://wknd.site/us/en/adventures/whistler-mountain-biking/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789625/adobestock-122615840.jpeg",
      title: "Whistler Mountain Biking",
      description: "Whistler is often considered North",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/cycling-tuscany/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789294/adobestock-59459597.jpeg",
      title: "Cycling Tuscany",
      description: "Visiting Tuscany on a bicycle is about",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/west-coast-cycling/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323786740/adobestock-151584995.jpeg",
      title: "West Coast Cycling",
      description: "Join us for this once in a lifetime bi",
    },
  ],
  skiing: [
    {
      image:
        "https://wknd.site/us/en/adventures/downhill-skiing-wyoming/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323784078/adobestock-185234795.jpeg",
      title: "Downhill Skiing Wyoming",
      description: "A skiers paradise far from crowds and close to nature",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/ski-touring-mont-blanc/_jcr_content/root/container/carousel/item_1571168419252.coreimg.60.1600.jpeg/1660323789507/adobestock-238230356.jpeg",
      title: "Ski Touring Mont Blanc",
      description: "This adventure includes 5 days of sk",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/tahoe-skiing/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323785476/adobestock-184591344.jpeg",
      title: "Tahoe Skiing",
      description: "Great weather, crystal clear lake water,",
    },
  ],
  surfing: [
    {
      image:
        "https://wknd.site/us/en/adventures/bali-surf-camp/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323792187/adobestock-175749320.jpeg",
      title: "Bali Surf Camp",
      description: "Surfing in Bali is on the bucket list of every surfer",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/surf-camp-costa-rica/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323786122/adobestock-278302117.jpeg",
      title: "Surf Camp in Costa Rica",
      description: "Costa Rica is the ideal location for a f",
    },
  ],

  travel: [
    {
      image:
        "https://wknd.site/us/en/adventures/beervana-portland/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323790531/adobestock-200192344.jpeg",
      title: "Beervana in Portland",
      description: "This adventure will provide insider a",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/cycling-tuscany/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323789294/adobestock-59459597.jpeg",
      title: "Cycling Tuscany",
      description:
        "Visiting Tuscany on a bicycle is about experiencing the old world charm of Italy on your own terms.",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/gastronomic-marais-tour/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323786247/adobestock-294203896.jpeg",
      title: "Gastronomic Marais Tour",
      description:
        "Take a VIP gastronomic tour through the vibrant Marais, one of the oldest, colorful and historical",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/napa-wine-tasting/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323791204/adobestock-280313729.jpeg",
      title: "Napa Wine Tasting",
      description: "Enjoy spectacular wine tasting in the Napa Valley",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/riverside-camping-australia/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323783461/adobe-waadobe-wa-mg-2466.jpeg",
      title: "Riverside Camping",
      description: "Siegel River Australia",
    },
    {
      image:
        "https://wknd.site/us/en/adventures/yosemite-backpacking/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1660323790695/adobestock-231698835.jpeg",
      title: "Yosemite Backpacking",
      description:
        "Yosemite National Park, designated a World Heritage Site in 1984",
    },
  ],
};
//   sample data tabs
export default async function decorate(block) {
  // Build the tablist
  const tablist = document.createElement("div");
  tablist.className = "tabs-list";
  tablist.setAttribute("role", "tablist");

  const tabs = [...block.children].map((child) => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);

    // Decorate tabpanel
    const tabpanel = block.children[i];
    tabpanel.className = "tabs-panel";
    tabpanel.id = `tabpanel-${id}`;
    tabpanel.setAttribute("aria-hidden", !!i);
    tabpanel.setAttribute("aria-labelledby", `tab-${id}`);
    tabpanel.setAttribute("role", "tabpanel");

    // Create card grid dynamically
    const cardGrid = document.createElement("div");
    cardGrid.className = "card-grid";

    // Populate card grid based on tab data
    const cards = tabData[id] || [];
    cards.forEach(({ image, title, description }) => {
      const cardItem = document.createElement("div");
      cardItem.className = "card-item";
      cardItem.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      cardGrid.appendChild(cardItem);
    });

    tabpanel.appendChild(cardGrid);

    // Build tab button
    const button = document.createElement("button");
    button.className = "tabs-tab";
    button.id = `tab-${id}`;
    button.innerHTML = tab.innerHTML;
    button.setAttribute("aria-controls", `tabpanel-${id}`);
    button.setAttribute("aria-selected", !i);
    button.setAttribute("role", "tab");
    button.setAttribute("type", "button");
    button.addEventListener("click", () => {
      block.querySelectorAll("[role=tabpanel]").forEach((panel) => {
        panel.setAttribute("aria-hidden", true);
      });
      tablist.querySelectorAll("button").forEach((btn) => {
        btn.setAttribute("aria-selected", false);
      });

      tabpanel.setAttribute("aria-hidden", false);
      button.setAttribute("aria-selected", true);
    });
    tablist.append(button);
    tab.remove();
  });

  block.prepend(tablist);
}
