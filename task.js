var planets = [];
/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
  this.name = name;
  this.position = position;
  this.capacity = capacity;
  this.cargo = 0;
}

Vessel.prototype.onPlanet = function () {
  var result = false;
  
  for (i = 0; i < planets.length; i++){
    var planet = planets[i];
    if(planet.position[0] == this.position[0] && planet.position[1] == this.position[1]){
      result = planet;
    };
  };
  
  return result;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
  var result = "Грузовой корабль. ";
  
  var planet = this.onPlanet();
  if(planet){
    result += "Местоположение: " + planet.name + ". ";
  } else{
    result += "Местоположение: " + this.position[0] + "," + this.position[1] + ". ";
  };
  
  if(this.cargo && this.cargo > 0){
    result += "Груз: " + this.cargo + "т. ";
  } else{
    result += "Товаров нет. ";
  };
  
  return  result;
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
  return (this.capacity - this.cargo);
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
  return this.cargo
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
  if(newPosition[0] && newPosition[1]){
    this.position = newPosition;
  } else if(newPosition.position){
    this.position = newPosition.position;
  };
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
  this.name = name;
  this.position = position;
  this.availableAmountOfCargo = availableAmountOfCargo;
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {}

/**
 * Загружает на корабль заданное количество груза.
 * 
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {}

/**
 * Выгружает с корабля заданное количество груза.
 * 
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {}
