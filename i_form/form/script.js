// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "EventListeners");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
selectDom.setAttribute("multiple", true);

// Populate the options in selectDom
arrTopics.forEach((topic, index) => {
    selectDom.options.add(new Option(`${index + 1}. ${topic}`, topic));
});

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
arrTopics.forEach((topic, index) => {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2");
    // selectDom.options[index].classList.add("btn", "btn-primary", "d-block", "m-2");   /* similar */
});

// 12. element.addEventListener()
// Adding an event listener to a button
selectDom.addEventListener("change", () => {

    // get the collection of options from the <select> object
    const collection = selectDom.selectedOptions;

    // iterate through the collection of selected elements
    [...collection].forEach((e, i) => {
        // obtain the selected option from <select>
        const itemValue = e.getAttribute("value");

        // find the selected option in arrSelected
        // const isSelected = arrSelected.includes(itemValue);
        const index = arrSelected.indexOf(itemValue);

        // if selected option cannot be found in arrSelected
        if (index === -1) {
            // create the list item element to be appended to listSelected <ul>
            // list item element should show the text stored in itemValue
            const listItem = document.createElement("li");
            listItem.textContent = itemValue;
            document.getElementById("listSelected").append(listItem);

            // update arrSelected
            arrSelected.push(itemValue);
            // console.log(arrSelected);
        } else {
            // update arrSelected
            arrSelected.splice(index, 1);
            // console.log(arrSelected);

        }

    });
});

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array

const btnclearSelectList = document.getElementById("btnClearSelection");

btnclearSelectList.addEventListener("click", () => {
    // Clear ALL selected items in ul
    document.getElementById("listSelected").innerHTML="";

    // Clear arrSelected
    arrSelected.splice(0, arrSelected.length);
    // console.log(arrSelected.length);
});