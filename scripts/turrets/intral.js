const CTProj = require("proj/projectiles");

const intral = extend(PowerTurret, "intral", {
  health: 2528 * 10,
  size: 3,
  reloadTime: 60,
  rotateSpeed: 25,
  range: 67.5 * 8,
  category: Category.turret,
  //what, you thought you can sneak this into campaign?
  buildVisibility: BuildVisibility.sandboxOnly,
  shootSound: Sounds.artillery,
  bullet: CTProj.intralProj,
});