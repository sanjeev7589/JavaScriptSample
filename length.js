function convert()
{
    const value =Number(document.getElementById("input").value);
    const inchvalue = value/2.54;
    const result = document.getElementById("result");
    result.innerHTML = inchvalue.toFixed(2)+" "+"inches";
}
