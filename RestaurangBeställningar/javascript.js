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

let listOfIds= [document.querySelector("#hamburger"), 
                document.querySelector("#fries"),
                document.querySelector("#coke"),
                document.querySelector("#falafel"),
                document.querySelector("#fattoush"),
                document.querySelector("#kofta"),
                document.querySelector("#chocolate"),
                document.querySelector("#cake"),
                document.querySelector("#pie"),
                document.querySelector("#water"),
                document.querySelector("#wine"),
                document.querySelector("#pepsi"),]

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

function CheckStatusAndComposeData(listOfIds, formContent)
{

    // Lägg till For-loop så att du kan gå genom alla dina ID såsom du tänkt. (Alltså definierar du "i")
    // for (let i = 0; i < 12; i++)
    // {
    //     if (document.querySelector("[id=" + listOfIds[i] + "]").checked == true)
    //     {


    //         if (listOfIds[i].classList.value == "förrätt")
    //         {
    //             formContent = ""
    //         }
    //         if (listOfIds[i].classList.value == "varmrätt")
    //         {
                
    //         }
    //         if (listOfIds[i].classList.value == "efterrätt")
    //         {
                
    //         }
    //         if (listOfIds[i].classList.value == "dryck")
    //         {
                
    //         }
    //     }
    // }

  
}



function AddDataRowToTable()
{
    let myDataTable = document.querySelector("#DataTable")
    let nyRad = document.createElement("tr")
    let formContent = ""
    //CheckStatusAndComposeData(listOfIds, formContent)

    for (let i = 0; i < 12; i++)
    {
        if (listOfIds[i].checked == true)
        {
            formContent += ` 
            <td>${listOfIds[i].id}</td>
            `
        }
    }
  


    nyRad.innerHTML = formContent;
    myDataTable.append(nyRad);
}