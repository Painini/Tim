
var flag = false;

function WriteAbove(event)
{
  if (flag == true)
  {
    ClearTextArea()
    flag = false;
  }
  if (flag == false)
  {
    var x = event.target;
    document.querySelector("#text").innerHTML += x.id;
  }
}

function ClearTextArea()
{
  document.querySelector("#text").innerHTML = ""
}

function Calculate()
{
  var x = document.querySelector("#text").innerHTML;
  document.querySelector("#text").innerHTML = eval(x);
  flag = true;
}

