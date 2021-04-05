import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { A as emberArray } from "@ember/array";

export default class LandingComponent extends Component {
  @tracked users = emberArray([]);
  @tracked name = "";
  @tracked expense = "";
  @tracked amount;
  @tracked showAmounts = false;
  @action inputHandler(event) {
    this[event.target.getAttribute("data-tag")] = event.target.value;
  }

  @action addUser(event) {
    event.preventDefault();
    const id = Math.random().toString(36).substring(1, 5);
    var newUser = {
      id,
      name: this.name,
      expense: this.expense,
      amount: this.amount,
    };
    this.users.addObject(newUser);
    this.name = "";
    this.expense = "";
    this.amount = 0;
  }

  @action deleteUser(id) {
    const users = this.users.filter((user) => {
      return user.id !== id;
    });
    this.users = users;
  }
  @action tallyUp() {
    this.showAmounts = true;
  }
}
