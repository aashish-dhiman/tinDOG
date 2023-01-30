"use strict";

const appleBtn = document.querySelectorAll(".btn-apple");
const androidBtn = document.querySelectorAll(".btn-android");
// console.log(androidBtn);

for (let btn of appleBtn) {
    btn.addEventListener("click", () => {
        window.open("https://apps.apple.com/au/app/tindog-app/id1550504196");
    });
}

for (let btn of androidBtn) {
    btn.addEventListener("click", () => {
        window.open(
            "https://play.google.com/store/apps/details?id=com.tindog.tindog&hl=en_IN&gl=US&pli=1"
        );
    });
}
