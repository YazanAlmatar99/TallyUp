import { helper } from "@ember/component/helper";

function getTotals(users) {
  var totalAmount = 0;
  users[0].forEach((user) => {
    totalAmount = totalAmount + parseInt(user.amount);
  });
  return Math.round(totalAmount / users[0].length);
}
export default helper(getTotals);
