function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", path, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function render_graph(div_tag, spec_filename) {
    loadJSON(spec_filename, (json) => {
        vegaEmbed("#" + div_tag, JSON.parse(json), { renderer: "svg", actions: false });
    });
}

vega.scheme("my_cool_scheme", [
    "#ffffff",
    "#61f4fb",
    "#3ddff0",
    "#2bc8e2",
    "#12b1d4",
    "#039ac7",
    "#0082b9",
    "#086da7",
    "#1e588a",
    "#2e4463",
    "#323232", // mid
    "#343434", // mid
    "#643633",
    "#8c3a36",
    "#b03e38",
    "#d14632",
    "#e75d1e",
    "#eb7e20",
    "#ed9c25",
    "#efb92d",
    "#f3d431",
    "#ffeb2c",
]);