function calculate() {
    let baseValue = Number(document.getElementById('baseValue').value);
    let heightValue = Number(document.getElementById('heightValue').value);
    let areaResult = (baseValue * heightValue) / 2;

    document.getElementById("areaResult").value = areaResult;
}