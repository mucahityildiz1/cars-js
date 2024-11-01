let cars = [
  {
    brand: "Ford",
    model: "Mustang",
    color: "Mavi"
  },
  {
    brand: "BMW",
    model: "3 Serisi",
    color: "Siyah"
  },
  {
    brand: "Mercedes-Benz",
    model: "E Serisi",
    color: "Kırmızı"
  },
  {
    brand: "Toyota",
    model: "Corolla",
    color: "Beyaz"
  },
  {
    brand: "Honda",
    model: "Civic",
    color: "Gri"
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    color: "Yeşil"
  },
  {
    brand: "Audi",
    model: "A4",
    color: "Turuncu"
  },
  {
    brand: "Porsche",
    model: "911",
    color: "Sarı"
  },
  {
    brand: "Ferrari",
    model: "488 GTB",
    color: "Lacivert"
  },
  {
    brand: "Lamborghini",
    model: "Aventador",
    color: "Altın"
  },
  {
    brand: "Tesla",
    model: "Model S",
    color: "Gümüş"
  },
  {
    brand: "Subaru",
    model: "Impreza",
    color: "Mor"
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    color: "Turkuaz"
  },
  {
    brand: "Hyundai",
    model: "Tucson",
    color: "Kahverengi"
  },
  {
    brand: "Kia",
    model: "Sportage",
    color: "Pembe"
  },
  {
    brand: "Nissan",
    model: "Altima",
    color: "Beyaz"
  },
  {
    brand: "Jaguar",
    model: "F-Type",
    color: "Siyah"
  },
  {
    brand: "Land Rover",
    model: "Range Rover",
    color: "Gri"
  },
  {
    brand: "Volvo",
    model: "XC90",
    color: "Yeşil"
  },
  {
    brand: "Mazda",
    model: "MX-5",
    color: "Kırmızı"
  }
];


btnList.addEventListener('click', handleListBtn);

function handleListBtn() {
  ListCars();
}

function ListCars() {
  if (carsList.innerHTML.length > 0) {
    carsList.innerHTML = "";
  } else {
    for (const car of cars) {
      carsList.innerHTML += `<li>
          <ul class="car-item">
            <li><h4 class="li-head">Marka: </h4> ${car.brand}</li>
            <li><h4 class="li-head">Model: </h4> ${car.model}</li>
            <li><h4 class="li-head">Renk: </h4>  ${car.color}</li>
          </ul>
        </li>`;
    }
  }
}