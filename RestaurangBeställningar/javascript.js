const RestaurantInformation = {
    name: "The Obama Hut,",
    est: "Since 1951",
    story: "Quality food and pepsi is what is valuable to us. As the 16th generation of Obama Hut owners we make sure the tradition of Obama runs through our restaurant. All hail Obama.",
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

// Här tester jag att skriva ut olika texter med hjälp av JavaScript.

  document.querySelector("#storeName").innerHTML = RestaurantInformation.name;
  document.querySelector("#storeEst").innerHTML = RestaurantInformation.est;

function StoryHandler()
{
    if (document.querySelector("#storyCheckbox").checked)
    {
        document.querySelector("#storeStory").innerHTML = RestaurantInformation.story;
    }
    if (document.querySelector("#storyCheckbox").checked == false)
    {
        document.querySelector("#storeStory").innerHTML = ""
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

function AddDataRowToTable()
{
    
    let myDataTable = document.querySelector("#DataTable")
    let nyRad = document.createElement("tr")
    let formContent = `
    <td>${document.querySelector("#hamburger").checked}</td> 
    <td>${document.querySelector("#fries").checked}</td> 
    <td>${document.querySelector("#coke").checked}</td> 
    `;
    
    
    nyRad.innerHTML = formContent;
    myDataTable.append(nyRad)

    console.log("rumpa")
}