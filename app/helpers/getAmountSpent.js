import { helper } from "@ember/component/helper";

function getAmountSpent(users) {
  var totalAmount = 0;
  users[0].forEach((user) => {
    totalAmount = totalAmount + parseInt(user.amount);
  });
  return totalAmount;
}
export default helper(getAmountSpent);
