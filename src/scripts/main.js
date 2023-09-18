import { del } from "./del.js";
import { deleteButton } from "./del.js";
import { addUserButton } from "./add.js";
import { add } from "./add.js";

deleteButton.addEventListener("click", function () {
    del()
})

addUserButton.addEventListener("click", function () {
    add()
})