const items = [];

$("#add-item").on("click", (event) => {
  event.preventDefault();
  items.push({
    text: $("#text-input").val(),
    checked: false,
  });
  $("#text-input").val("");
  updateItemDisplay();
});

// Attach a directly bound event handler
$("ul").on("click", ".check-btn", function (event) {
  items[$(this).data("index")].checked = !items[$(this).data("index")].checked;
  updateItemDisplay();
});

// Attach a directly bound event handler
$("ul").on("click", ".delete-btn", function (event) {
  items.splice($(this).data("index"), 1);
  updateItemDisplay();
});

function updateItemDisplay() {
  $("ul").empty();
  let index = 0;
  for (const item of items) {
    $("ul").append(`
    <div class="card ${item.checked ? "checked-item" : ""}">
        <p>${item.text}</p>
        <div class="buttons-container">
            <button class="check-btn" data-index="${index}">check</button>
            <button class="delete-btn" data-index="${index}">delete</button>
        </div>
    </div>
    `);
    index++;
  }
}
