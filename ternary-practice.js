const rider = {
    id: 'rider-1',
    hasGoggles: false,
    defaultTint: 'clear'
};
const brakes = [
    { id: 'brake-1', brakeBrand: 'Shimano' },
    { id: 'brake-2', brakeBrand: 'Magura' }
];

let lensType;
lensType = rider.hasGoggles ? 'dark-tint' : rider.defaultTint;

function checkBrakeFluid(brakeBrand) {
    return brakeBrand === 'Shimano' ? 'Mineral Oil' : 'DOT 5.1';
}

console.log('Тип линзы:', lensType);
console.log('Тормоз 1:', checkBrakeFluid(brakes[0].brakeBrand));
console.log('Тормоз 2:', checkBrakeFluid(brakes[1].brakeBrand));