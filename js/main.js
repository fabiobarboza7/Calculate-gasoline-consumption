function calc() {
    this.quilometros = ko.observable();
    this.litros = ko.observable();
  
    this.total = ko.computed(function() {
      let total = this.quilometros() / this.litros()
      if(isNaN(total)){
        return "Consumo"
      } else {
        return total.toFixed(2) + " Km/L"; 
      }
    }, this);
}

ko.applyBindings(calc);