var list = [
  {
    restName: "Veggie Grill",
    restAddress: "123 veggie st",
    restWebsite: "www.veggiegrill.com",
    restDescription: "Lorem ipsum dolor sit amet",
    restLocation: "southBay",
    restCuisine: "fastFood",
  },
  {
    restName: "Pizza Flora",
    restAddress: "123 pizza st",
    restWebsite: "www.pizzaflora.com",
    restDescription: "Ipsum dolor sit amet, consectetur",
    restLocation: "southBay",
    restCuisine: "pizza",
  },
];

function addCard() {
  list.push({
    restName: document.getElementById("name").value,
    restAddress: document.getElementById("address").value,
    restWebsite: document.getElementById("website").value,
    restDescription: document.getElementById("description").value,
    restLocation: document.getElementById("location").value,
    restCuisine: document.getElementById("cuisine").value,
  });
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("website").value = "";
  document.getElementById("description").value = "";
  document.getElementById("location").value = "location";
  document.getElementById("cuisine").value = "cuisine";
  // // create a var for restCard
  // var restCard = document.createElement('div')

  // //update innerHTML with the child elements
  // restCard.innerHTML = `
  //         <section class="column">
  //             <div>${list[i].restName}</div>
  //             <div>${list[i].restAddress}</div>
  //             <div>${list[i].restWebsite}</div>
  //         </section>
  //         <aside>
  //            ${list[i].restDescription}
  //         </aside>
  // `;
  // document.getElementById('list').appendChild(restCard)
  //     }
  renderRestCard();
}

var renderRestCard = function () {
  var clearList = document.getElementById("list");
  clearList.textContent = "";

  for (var i = 0; i < list.length; i++) {
    // create a var for restCard
    var restCard = document.createElement("div");

    //update innerHTML with the child elements
    restCard.innerHTML = `
            <div class="arrayCard">   
                <section class="column" id="arraySection">
                    <div id="restCardTitle">${list[i].restName}</div>
                    <div>${list[i].restAddress}</div>
                    <div><a href="http://${list[i].restWebsite}">${list[i].restWebsite}</a></div>
                </section>
                <aside>
                ${list[i].restDescription}
                </aside>
            </div>
        `;
    document.getElementById("list").appendChild(restCard);
  }
};

var filterButton = function () {
  var clearList = document.getElementById("list");
  clearList.textContent = "";

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
                            <div>${list[i].restAddress}</div>
                            <div><a href="http://${list[i].restWebsite}">${list[i].restWebsite}</a></div>
                        </section>
                        <aside>
                        ${list[i].restDescription}
                        </aside>
                    </div>
                `;
      document.getElementById("list").appendChild(restCard);
    }
  }

  // grab list
  // for loop
  // if statement
  // inside if statement it has to be based off of what is selected from the options
  // if it evaluates to true, do the render card function
};
