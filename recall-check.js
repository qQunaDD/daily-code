function isTubless(valveType) {
    return valveType === 'Presta' ? true : false;
}
console.log(isTubless('Presta'));
console.log(isTubless('Shreder'));