const RestaurantInformation = {
    name: "The Obama Hut",
    est: 1951,
    story: "Quality food and pepsi is what is valuable to us. As the 5th generation of Obama Hut owners we make sure the tradition of Obama runs through our restaurant. All hail Obama",
    owner: "Obama",
    
    restaurantOpen: true,

    closeRestaurant: function (openStatus)
    {
        this.restaurantOpen = openStatus;
    }

}

//Kopierar från 

function AddDataToTable ()
{
    const myDataTable = document.querySelector("DataTable")
    const nyRad = document.createElement("tr")
    const formContent = `
    <td>${document.querySelector("förrätt").checked}</td> 
    <td>${document.querySelector("varmrätt").checked}</td> 
    <td>${document.querySelector("efterrätt").checked}</td> 
    `;

    nyRad.innerHTML = formcontent;
    myDataTable.append(nyRad)

    console.log("rumpa")
}