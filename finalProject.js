var list = [
  {
    restName: "Veggie Grill",
    restAddress: "3055 Olin Ave, San Jose, CA 95128",
    restWebsite: "www.veggiegrill.com",
    restDescription:
      "Vegan chain offering sandwiches, salads, faux meats & sides in a modern, counter-service setting.",
    restLocation: "southBay",
    restCuisine: "fastFood",
  },
  {
    restName: "Pizza Flora",
    restAddress: "78 S 1st St, San Jose, CA 95113",
    restWebsite: "www.pizzaflora.com",
    restDescription: "Vegan and vegetarian pizzeria in downtown San Jose.",
    restLocation: "southBay",
    restCuisine: "pizza",
  },
  {
    restName: "The Butcher's Sons",
    restAddress: "1954 University Ave, Berkeley, CA 94704",
    restWebsite: "www.thebutchersveganson.com",
    restDescription:
      "Charming, industrial-chic bakery & vegan deli for pastries, coffee & creative vegetable-based mains.",
    restLocation: "eastBay",
    restCuisine: "healthy",
  },
];

function addCard() {
  // take the string inside the input field and add it to the restCard
  list.push({
    restName: document.getElementById("name").value,
    restAddress: document.getElementById("address").value,
    restWebsite: document.getElementById("website").value,
    restDescription: document.getElementById("description").value,
    restLocation: document.getElementById("location").value,
    restCuisine: document.getElementById("cuisine").value,
  });

  // clear input and select after submit button is clicked
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("website").value = "";
  document.getElementById("description").value = "";
  document.getElementById("location").value = "location";
  document.getElementById("cuisine").value = "cuisine";
  renderRestCard();
}

var renderRestCard = function () {
  // clear the list before rendering the next restCard so the list does not populate each time
  var clearList = document.getElementById("list");
  clearList.textContent = "";

  // for loop through each restaurant in list to render each card if it matches the filter
  for (var i = 0; i < list.length; i++) {
    var rest = list[i];
    var filterLoc = document.getElementById("filterLocation").value;
    if (filterLoc == "location") {
      filterLoc = rest.restLocation;
    }
    var filterCuis = document.getElementById("filterCuisine").value;
    if (filterCuis == "cuisine") {
      filterCuis = rest.restCuisine;
    }
    if (rest.restLocation == filterLoc && rest.restCuisine == filterCuis) {
      // create a var for restCard
      var restCard = document.createElement("div");

      //update innerHTML with the child elements
      restCard.innerHTML = `
                    <div class="arrayCard">   
                        <section class="column" id="arraySection">
                            <div id="restCardTitle">${list[i].restName}</div>
                            <div class="restCardDesc">${list[i].restAddress}</div>
                            <div class="restCardDesc"><a href="http://${list[i].restWebsite}">${list[i].restWebsite}</a></div>
                        </section>
                        <aside>
                        ${list[i].restDescription}
                        </aside>
                    </div>
                `;
      document.getElementById("list").appendChild(restCard);
    }
  }
};
