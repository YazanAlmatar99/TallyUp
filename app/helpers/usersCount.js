import { helper } from "@ember/component/helper";

function usersCount(users) {
  return users[0].length;
}
export default helper(usersCount);
