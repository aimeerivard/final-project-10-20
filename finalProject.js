var list = [
    {
        restName: 'Veggie Grill',
        restAddress: '123 veggie st',
        restWebsite: 'veggiegrill.com',
        restDescription: 'Lorem ipsum dolor sit amet',
    },
    {
        restName: 'Pizza Flora',
        restAddress: '123 pizza st',
        restWebsite: 'pizzaflora.com',
        restDescription: 'Ipsum dolor sit amet, consectetur',
    }
];

function addCard() {
    list.push({
        restName: document.getElementById('name').value,
        restAddress: document.getElementById('address').value,
        restWebsite: document.getElementById('website').value,
        restDescription: document.getElementById('description').value
    })  
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('website').value = '';
    document.getElementById('description').value = '';
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
    renderRestCard()
}

var renderRestCard = function() {

    var clearList = document.getElementById('list');
    clearList.textContent = '';

    for( var i = 0; i < list.length; i++) {

        // create a var for restCard
        var restCard = document.createElement('div')

        //update innerHTML with the child elements
        restCard.innerHTML = `
            <div class="arrayCard">   
                <section class="column" id="arraySection">
                    <div id="restCardTitle">${list[i].restName}</div>
                    <div>${list[i].restAddress}</div>
                    <div>${list[i].restWebsite}</div>
                </section>
                <aside>
                ${list[i].restDescription}
                </aside>
            </div>
        `;
        document.getElementById('list').appendChild(restCard)
    }
}