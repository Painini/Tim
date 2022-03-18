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
        document.querySelector("#DataTable").classList.toggle("closed");
        document.createElement("h1")
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

function AddDataRowToTable()
{
    
    let myDataTable = document.querySelector("#DataTable")
    let nyRad = document.createElement("tr")
    let formContent = `
    <td>${document.querySelector("#hamburger").checked}</td> 
    <td>${document.querySelector("#hamburger").checked}</td> 
    <td>${document.querySelector("#hamburger").checked}</td> 
    `;

    nyRad.innerHTML = formContent;
    myDataTable.append(nyRad)

    console.log("rumpa")
}