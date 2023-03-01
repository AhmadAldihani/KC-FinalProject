let cards = [
  {
    img: "https://www.urtrips.com/wp-content/uploads/2022/03/Entertainment-places-in-Kuwait-1.jpg",
    title: "اكواريوم الكويت",
    location: "https://goo.gl/maps/PYfG3qVoxKd6vJEK9",
  },
  {
    img: "https://fastly.4sqi.net/img/general/width960/11119942_spM7OhSaCDxdmnEejFmEjxkbzjxb-D2tnqgxix9W8S0.jpg",
    title: "سكاي زون",
    location: "https://goo.gl/maps/55srKibULzBYXYiP6",
  },
  {
    img: "https://www.aljarida.com/uploads/imported_images/images/1581267938088407900/1581268549000/1280x960.jpg",
    title: "حديقة الشهيد",
    location: "https://goo.gl/maps/cygonLwuHQx7qzkK8",
  },
  {
    img: "https://i.ytimg.com/vi/EtfO6U23Pa4/maxresdefault.jpg",
    title: "Escape Land",
    location: "https://goo.gl/maps/R1ypGCzDmxgUDfpUA",
  },
  {
    img: "https://www.ednewsdaily.com/wp-content/uploads/2017/03/Zidzania.jpeg",
    title: "Kidzania",
    location: "https://g.page/KidZaniaKuwait?share",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPvnlzezz2jcJAGFCd8REfaiHk0O32Nvk08HTV0=s680-w680-h510",
    title: "WinterLand",
    location: "https://goo.gl/maps/9m3fRKZDBGXy7woY9",
  },
];
cards.forEach((item) => {
  let sec = document.getElementById("section");
  sec.innerHTML += `
  <div class="card">
  <img src="${item.img}" alt="تعذر عرض الصوره" class="card-img" />
  <div class="card-title">
    <h1>${item.title}</h1>
  </div>
  <a href="${item.location}" target="_blank">
    <button class="card-btn">اذهب</button>
  </a>
</div>
`;
});
