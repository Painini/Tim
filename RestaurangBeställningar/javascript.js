const RestaurantInformation = {
    name: "The Obama Hut",
    est: 1951,
    story: "Quality food and pepsi is what is valuable to us. As the 16th generation of Obama Hut owners we make sure the tradition of Obama runs through our restaurant. All hail Obama",
    owner: "Obama",
    
    restaurantOpen: true,

    closeRestaurant: function (openStatus)
    {
        this.restaurantOpen = openStatus;
        console.log("closed")
    }

}



function SwitchToActive()
{
    document.querySelector("#DataTable").classList.add("active");
    console.log("active");
}

function SwitchOffActive()
{
    document.querySelector("#DataTable").classList.remove("active");
    console.log("omarkerat")
}
//Kopierar från 

function AddDataRowToTable ()
{
    
    const myDataTable = document.querySelector("#DataTable")
    const nyRad = document.createElement("tr")
    const formContent = `
    <td>${document.querySelector("förrätt").checked}</td> 
    <td>${document.querySelector("varmrätt").checked}</td> 
    <td>${document.querySelector("efterrätt").checked}</td> 
    `;

    nyRad.innerHTML = formContent;
    myDataTable.append(nyRad)

    console.log("rumpa")
}

if (document.querySelector("#hamburger").checked)
{
    AddDataRowToTable();
}