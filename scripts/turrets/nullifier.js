const CTProj = require("proj/projectiles");

const nullifier = extend(PowerTurret, "nullifier", {
  health: 1626 * 10,
  size: 4,
  shots: 25,
  inaccuracy: 20,
  targetAir: true,
  targetGround: true,
  reloadTime: 25,
  rotateSpeed: 25,
  range: 168.75 * 8,
  powerUse: 60 * 1,
  category: Category.turret,
  buildVisibility: BuildVisibility.sandboxOnly,
  shootSound: Sounds.artillery,
  shootType: CTProj.nullifierProj,
});