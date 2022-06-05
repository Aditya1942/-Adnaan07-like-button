(async function () {
    const flushIcon = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M505 4855 c-25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 20 -21
34 -25 80 -25 l55 0 0 -934 c0 -904 1 -935 19 -957 l19 -24 304 -5 303 -5 7
-59 c17 -137 83 -309 165 -433 55 -84 183 -213 269 -273 143 -99 326 -167 497
-185 46 -4 67 -11 64 -18 -30 -82 -367 -1181 -367 -1196 0 -12 11 -33 25 -46
l24 -25 991 0 991 0 24 25 c14 13 25 34 25 46 0 15 -337 1114 -367 1196 -3 7
18 14 64 18 247 26 479 140 650 318 154 161 240 333 278 551 27 157 17 263
-35 374 -37 79 -123 170 -199 211 -118 63 -89 61 -1043 61 l-868 0 0 895 0
896 -26 26 c-24 24 -30 25 -92 20 -80 -7 -164 -36 -232 -82 l-50 -34 0 35 c0
24 -8 43 -25 59 l-24 25 -751 0 -751 0 -24 -25z m1415 -215 l0 -80 -640 0
-640 0 0 80 0 80 640 0 640 0 0 -80z m400 -965 l0 -1035 -120 0 -120 0 2 923
3 922 34 63 c19 35 50 76 70 91 35 28 109 70 124 71 4 0 7 -466 7 -1035z
m-400 -155 l0 -880 -560 0 -560 0 0 880 0 880 560 0 560 0 0 -880z m2376 -672
c75 -40 107 -70 142 -136 18 -33 32 -63 32 -66 0 -3 -448 -6 -995 -6 l-995 0
0 120 0 120 883 -2 882 -3 51 -27z m172 -425 c-46 -295 -254 -560 -527 -672
-165 -69 -125 -66 -981 -66 -849 0 -815 -2 -970 61 -282 115 -493 379 -538
677 l-9 57 1517 0 1517 0 -9 -57z m-832 -1463 c96 -305 174 -556 174 -557 0
-2 -383 -3 -851 -3 -805 0 -850 1 -845 18 3 9 80 256 171 547 91 292 167 536
170 543 3 10 110 12 506 10 l502 -3 173 -555z"/>
</g>
</svg>
`;
    const likeBtnIcon = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>`
    const sleep = (sec) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(sec);
            }, sec * 1000);
        });
    };
    const main = async () => {

        let channelNameElements = document.getElementsByClassName(
            "style-scope ytd-channel-name complex-string"
        );
        while (channelNameElements.length <= 0) {
            console.log("waiting");
            await sleep(1);
            channelNameElements = document.getElementsByClassName(
                "style-scope ytd-channel-name complex-string"
            );
        }
        const channelName = channelNameElements[0].outerText;
        console.log(channelName);
        const likeBtnElement = document.getElementById(
            "top-level-buttons-computed"
        );
        console.dir(
            likeBtnElement.firstElementChild.firstElementChild.firstElementChild
                .firstElementChild.firstElementChild
        );
        if (channelName === "Adnaan 07") {
            likeBtnElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.innerHTML =
                flushIcon;
        } else {
            likeBtnElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.innerHTML =
                likeBtnIcon;
        }
    }
    try {
        // select the target node
        var target = document.querySelector("title");

        // create an observer instance
        var observer = new MutationObserver(function (mutations) {
            // We need only first event and only new value of the title
            main()
        });

        // configuration of the observer:
        var config = { subtree: true, characterData: true, childList: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);
    } catch (error) {

    }
})();
