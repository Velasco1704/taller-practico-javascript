const priceInput = document.querySelector("#precio");
const discountInput = document.querySelector("#descuento");
const buttonCalculate = document.querySelector("#buttonCalculate");
const total = document.querySelector("#total");

const couponsList = document.querySelector("#couponsList");
const priceOfCouponInput = document.querySelector("#priceOfCoupons");
const discountOfCouponInput = document.querySelector("#discountOfCoupons");
const totalOfCoupon = document.querySelector("#totalOfCoupon");
const buttonCalculateOfCoupon = document.querySelector(
  "#buttonCalculateOfCoupon"
);

buttonCalculate.addEventListener(
  "click",
  () =>
    (total.innerText =
      +discountInput.value >= 100
        ? "The discount cannot be more than 100"
        : +priceInput.value && +discountInput.value
        ? `Total: $${(+priceInput.value * (100 - +discountInput.value)) / 100}`
        : "Fill out the form")
);

buttonCalculateOfCoupon.addEventListener("click", () => {
  const coupons = Array.from(couponsList.childNodes)
    .filter((node) => node.nodeName === "LI")
    .map((item) => ({
      name: item.outerText,
      discount: Math.floor(Math.random() * 99),
    }));
  const validateCoupon = coupons.find(
    (item) => item.name === discountOfCouponInput.value
  );

  if (!validateCoupon) {
    return (totalOfCoupon.innerText = "That coupon code is useless.");
  } else if (!+priceOfCouponInput.value) {
    return (totalOfCoupon.innerText = "You must set a price.");
  } else {
    return (totalOfCoupon.innerText = `Your coupon had a ${
      validateCoupon.discount
    }% discount and now the total is $${
      (+priceOfCouponInput.value * (100 - validateCoupon.discount)) / 100
    }`);
  }
});
