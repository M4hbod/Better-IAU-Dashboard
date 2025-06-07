// ==UserScript==
// @name         IAU Evaluation Autofill
// @namespace    https://github.com/M4hbod/Better-IAU-Dashboard
// @version      1.0
// @description  Adds a panel to auto-select evaluation scores for all questions in the IAU evaluation form.
// @author       m4hbod
// @match        https://stdn.iau.ir/Student/studentProffEvaluation.do*
// @icon         https://stdn.iau.ir/favicon.ico
// @grant        none
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/M4hbod/Better-IAU-Dashboard/main/Tampermonkey/iau-evaluation-autofill.user.js
// @downloadURL  https://raw.githubusercontent.com/M4hbod/Better-IAU-Dashboard/main/Tampermonkey/iau-evaluation-autofill.user.js
// ==/UserScript==

(function () {
    'use strict';

    const OPTIONS = ["خیلی خوب", "خوب", "متوسط", "قابل قبول", "ضعیف"];

    function createControlPanel() {
        const panel = document.createElement("div");
        panel.style.position = "fixed";
        panel.style.top = "20px";
        panel.style.left = "20px";
        panel.style.background = "#fff";
        panel.style.border = "1px solid #ccc";
        panel.style.padding = "10px";
        panel.style.zIndex = "9999";
        panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
        panel.style.fontFamily = "sans-serif";
        panel.dir = "rtl";

        const select = document.createElement("select");
        select.id = "ratingSelector";
        OPTIONS.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });

        const button = document.createElement("button");
        button.textContent = "اعمال به همه";
        button.style.marginRight = "10px";
        button.onclick = () => {
            const selected = document.getElementById("ratingSelector").value;
            applySelection(selected);
        };

        panel.appendChild(select);
        panel.appendChild(button);
        document.body.appendChild(panel);
    }

    function applySelection(label) {
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            if (radio.title.trim() === label) {
                radio.checked = true;
                radio.click();
            }
        });
    }

    window.addEventListener("load", () => {
        createControlPanel();
    });
})();
