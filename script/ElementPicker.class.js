export default class ElementPicker {
  constructor(data) {
    try {
      this.type = localStorage.getItem("mode");
    } catch (e) {
      this.type = "name";
    }

    this.elements = data;
    this.availableNumbers = data.map((item) => item.id);
  }

  randomNumber() {
    const choiseID = Math.floor(Math.random() * this.availableNumbers.length);
    const choise = this.availableNumbers[choiseID];
    this.availableNumbers.splice(choiseID, 1);
    document.getElementById("element_name").textContent =
      this.type === "symbol"
        ? this.elements[choise - 1].symbol
        : this.elements[choise - 1].name;
    localStorage.setItem("lookingFor", JSON.stringify({ id: choise }));
    console.log("ID: ", choise);
    return choise;
  }
}
