let users =[
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Two levels of the menu mockup", developer: "Robert Fox", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 1567.60, myTime: 15.00, efficiency: "-"},
    {taskName: "Edit pictures", developer: "Dianne Russel, Adam Gordon…Show more (5)", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 678.20, myTime: 67.00, efficiency: "-"},
    {taskName: "Subdomain home pages mockup", developer: "Dianne Russel", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 756.70, myTime: 75.00, efficiency: "-"},
    {taskName: "Landing page mockup", developer: "Dianne Russel", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 345.60, myTime: 45.00, efficiency: "-"},
    {taskName: "Search page mockup", developer: "Courtney Henry,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Landing page mockup", developer: "Courtney Henry, Augusta Walter", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 345.60, myTime: 45.00, efficiency: "-"},
    {taskName: "Search page mockup", developer: "Courtney Henry,Kent Peacock", workType: "Programming,Meetings", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Courtney Henry,Kent Peacock, Nick Johnson, Ralph Edward, Kate Middleton, Dianne Russel", workType: "Programming,Meeting, Markup, Graphic Design", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Landing page mockup", developer: "Courtney Henry, Augusta Walter", workType: "Graphic Design", status: "Non completed", estimation: 0.0, totalTime: 345.60, myTime: 45.00, efficiency: "-"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
    {taskName: "Search page mockup", developer: "Robert Fox,Kent Peacock…Show more (6)", workType: "Programming,Meetings...Show more (3)", status: "Сompleted", estimation: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: "100%"},
];
document.addEventListener('DOMContentLoaded', () => {
let i = 0;
const select = document.querySelector(".paginator__select");
let notesOnPage = parseInt(select.value);
let pagination = document.querySelector(".paginator__list");
let table = document.querySelector(".spreadsheet__body");
let countOfItems = Math.ceil(users.length/notesOnPage);
let items = [];
for(let i = 1; i<=countOfItems; i++){
    let li = document.createElement("li");
    li.innerHTML = i;
    pagination.appendChild(li);
    li.classList.add("paginator__list-link");
    items.push(li);
}
showPage(items[0]);
for(let item of items){
    item.addEventListener("click", ()=>{
        showPage(item);
    });
}
function showPage(item){
        let active = document.querySelector(".active");
        if(active){
            active.classList.remove("active");
        }
        active = item;
        item.classList.add('active');
        let pageNum = +item.innerHTML;
        
        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;

        let notes = users.slice(start, end);
        table.innerHTML = "";
        for(note of notes){
            let tr = document.createElement("tr");
            if(i % 2 === 0){
                tr.classList.add("spreadsheet__row--color--light_grey");
            }else{
                tr.classList.add("spreadsheet__row--color--dark_grey");
            }
            table.appendChild(tr);
            createCell(note.taskName,tr);
            createCell(note.developer,tr);
            createCell(note.workType,tr);
            createCell(note.status,tr);
            createCell(note.estimation,tr);
            createCell(note.totalTime,tr);
            createCell(note.myTime,tr);
            createCell(note.efficiency,tr);
            i++;
        }
    }
    function createCell(text,tr){
        td = document.createElement("td");
        td.innerHTML = text;
        td.classList.add("spreadsheet__cell");
        tr.appendChild(td); 
}
  });


  function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        if (!isNaN(parseFloat(aColText)) && !isNaN(parseFloat(bColText))) {
            aColText = parseFloat(aColText);
            bColText = parseFloat(bColText);
        }
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });
    while(tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }
    tBody.append(...sortedRows);

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell =>{
    headerCell.addEventListener("click",() =>{
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
