// Тест
function Test() {
  var v1_init = new Vessel("SpaceX", [1,3], 1000);
  var v2_init = new Vessel("Протон", [2,4], 2000);
  var p1_init = new Planet("Земля", [5,7], 10000);
  var p2_init = new Planet("Марс", [10,7], 20000);
  
  var v1 = new Vessel("SpaceX", [1,3], 1000);
  var v2 = new Vessel("Протон", [2,4], 2000);
  var p1 = new Planet("Земля", [5,7], 10000);
  var p2 = new Planet("Марс", [10,7], 20000);
  
  // Перевозим груз между планетами, летаем в разные точки и возвращаемся в начальную точку
  v1.report();
  v2.report();
  p1.report();
  p2.report();

  p1.unloadCargoFrom(v2, 10000);
  p2.loadCargoTo(v1, 10000);

  v1.flyTo([10,10]);
  v1.report();

  v1.flyTo(p1);
  v2.flyTo([10,7]);
  v1.report();
  v2.report();

  p1.unloadCargoFrom(v1, 10000);
  p2.loadCargoTo(v2, 10000);

  p1.loadCargoTo(v1, 1000);
  p2.loadCargoTo(v2, 1000);

  v1.flyTo(p2);
  v2.flyTo(p1);

  v1.report();
  v2.report();
  p1.report();
  p2.report();

  p1.unloadCargoFrom(v2, 1000);
  p2.unloadCargoFrom(v1, 1000);

  v1.flyTo([1,3]);
  v2.flyTo([2,4]);

  v1.report();
  v2.report();
  p1.report();
  p2.report();
  
  // Проверяем, соответствуют ли полученное состояние начальному начальному
  if (p1.availableAmountOfCargo == p1_init.availableAmountOfCargo 
    && p2.availableAmountOfCargo == p2_init.availableAmountOfCargo
    && v1.cargo == v1_init.cargo && v2.cargo == v2_init.cargo
    && v1.position[0] == v1_init.position[0] && v1.position[1] == v1_init.position[1]
    && v2.position[0] == v2_init.position[0] && v2.position[1] == v2_init.position[1]
  ) {
    return 'ok'
  } else {
    return 'failed'
  };
};