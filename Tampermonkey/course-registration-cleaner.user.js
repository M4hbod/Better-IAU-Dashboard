// ==UserScript==
// @name         Course Registration Cleaner
// @namespace    http://github.com/M4hbod
// @version      1.0
// @description  Filters out classes that are fully booked or exclusively for members of the opposite sex, helping you stay focused.
// @author       http://github.com/M4hbod
// @match        https://stdn.iau.ir/Student/registerationAction.do
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iau.ir
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL   https://github.com/M4hbod/Better-IAU-Dashboard/raw/main/Tampermonkey/course-registration-cleaner.meta.js
// @downloadURL https://github.com/M4hbod/Better-IAU-Dashboard/raw/main/Tampermonkey/course-registration-cleaner.user.js
// ==/UserScript==


function getOppositeSex(sex) {
    return sex == "مرد" ? "زن" : "مرد"
}

(function() {
    'use strict';

    GM_registerMenuCommand("Set User Sex", () => {
        const currentSex = GM_getValue("userSex", "مرد");
        const newSex = prompt("Enter your sex (زن or مرد):", currentSex).trim();
        if (newSex) {
            if (!["زن", "مرد"].includes(newSex)) {
                return alert(`Your input was neither زن nor مرد`);
            }
            GM_setValue("userSex", newSex);
            alert(`Your sex has been set to: ${newSex}`);
        }
    });

    window.addEventListener('load', () => {
        setInterval(() => {
            const userSex = GM_getValue("userSex", "مرد");
            const headings = [...document.querySelectorAll("table[id^='scrollabledlg_'] > thead > tr > th")];
            const rows = [...document.querySelectorAll("table[id^='scrollabledlg_'] > tbody > tr")];
            if (headings && rows) {
                let sexCollumnIndex = -1;
                let remainingCapacityCollumnIndex = -1;
                for (const i in headings) {
                    const innerText = headings[i].innerText.trimString();
                    if (innerText === "جنسیت") {
                        sexCollumnIndex = parseInt(i);
                    } else if (innerText === "ظرفيت باقيمانده") {
                       remainingCapacityCollumnIndex = parseInt(i);
                    }
                }
                if (sexCollumnIndex === -1 || remainingCapacityCollumnIndex === -1) {
                    return;
                }
                let lastRow = "odd"
                for (const i in rows) {
                    if (rows[i].querySelectorAll("td")[sexCollumnIndex].innerText == getOppositeSex(userSex) || parseInt(rows[i].querySelectorAll("td")[remainingCapacityCollumnIndex].innerText) === 0) {
                        rows[i].remove();
                    }
                }
            }
        }, 2000);
    });
})();
