const intralProjFrag = extend(LaserBulletType, {
  damage: 25,
  lifetime: 25,
  width: 8,
  length: 8 * 8,
});

const intralProj = extend(BasicBulletType, {
  damage: 50,
  speed: 3,
  lifetime: 60 * 3,
  width: 8 * 2,
  height: 8 * 2,
  fragBullets: 5,
  fragBullet: intralProjFrag,
});

module.exports = {
  intralProj: intralProj,
  intralProjFrag: intralProjFrag,
};