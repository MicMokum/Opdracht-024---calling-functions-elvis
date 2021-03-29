// Hey kiddo

const over18 = function(age) {
    return age >= 18;
};

const sayHi = function(age) {
    if (over18(age)) {
        return "Hello there";
    };
    return "Hey kiddo";
};

console.log(sayHi(17));
console.log(sayHi(18));
console.log(sayHi(19));

// VAT 1

const calculateVAT = function(basePrice, percentageVAT) {
    return basePrice * percentageVAT / 100;
};

const totalPrice = function(basePrice, percentageVAT) {
    return basePrice + calculateVAT(basePrice, percentageVAT);
};

console.log(totalPrice(100, 21));
console.log(totalPrice(100, 6));

// VAT 2

const priceWithoutVat = function(priceWithVat, percentageVAT) {
    // console.log(priceWithVat / ((100 + percentageVAT) / 100))
    return priceWithVat / ((100 + percentageVAT) / 100);
};

const reverseVAT = function (priceWithVat, percentageVAT) {
    const basePrice = priceWithoutVat(priceWithVat, percentageVAT);
    const justVat = priceWithVat - basePrice;
    return [basePrice, justVat];
};

console.log(reverseVAT(106, 6)[0]);
console.log(reverseVAT(106, 6)[1]);
console.log(reverseVAT(242, 21)[0]);
console.log(reverseVAT(242, 21)[1]);
