//frag bullets go first, main bullets go last

const intralProjFrag = extend(LaserBulletType, {
  damage: 75,
  lifetime: 25,
  width: 8,
  length: 8 * 16,
});

const intralProj = extend(BasicBulletType, {
  damage: 150,
  speed: 3,
  lifetime: 60 * 3,
  width: 8 * 2,
  height: 8 * 2,
  fragBullets: 5,
  fragBullet: intralProjFrag,
});

const nullifierProj = extend(BasicBulletType, {
  damage: Number.MAX_VALUE,
  speed: 5,
  lifetime: 60 * 4.5,
  width: 8 * 3,
  height: 8 * 3,
  hitEffect: Fx.unitCapKill,
});

module.exports = {
  intralProj: intralProj,
  nullifierProj: nullifierProj,
};