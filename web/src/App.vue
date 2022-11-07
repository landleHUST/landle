<template>
  <transition name="loadingOut">
    <div v-if="loading" id="loading" style="overflow:hidden;position:relative;text-align: center;width:auto;height:auto;background-color: black;padding-top: 40vh;padding-bottom: 50vh;" @click="loadingTohome">  
      <div style="font-size: 6vh;color: white;filter: contrast(15);" id="placeFirst"></div>
      <div style=";font-size: 6vh;color: white;filter: contrast(15);" id="featureFirst"></div>
      <div style=";font-size: 6vh;color: white;filter: contrast(15);" id="static"></div>
    </div>
  </transition>
  <transition name="homePage">
    <div id="homePage" v-if="homePage" style="padding-top:10vh;weight:auto;height:auto;text-align: center;position: absolute;">
      <div style="font-size:10vh">landle</div>
      <br><br><br><br><br><br>
      <main>
          <n-space vertical style=";z-index: 100;">
            <n-button quaternary  @click="signup=true"><img style="width:4vh" src="./assets/images/person-circle.svg"> 为你起个名字吧:)</n-button>
            <br>
            <n-button type="tertiary"  @click="homeToRule">开始游戏</n-button>
          </n-space>
          <div id="signup" v-if="signup" style="position:absolute;padding:20vh 35vw;z-index: 101;">
          <n-card  hoverable  style="width:30vw;height: 15vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical justify="center">
                <n-input
                  v-model:value="name"
                  placeholder="name......"
                />
                <n-button type="tertiary" @click="submitName">提交</n-button>
              </n-space>
            </template>
          </n-card>
        </div>
            <div class="icons" ref="icons">
                <div ref="vue" style="display: none">
                    <img src="./assets/images/mask.png" style="width:20vw">
                </div>
                <div ref="nuxt" style="display: none">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M113.219 92.5837L84.4309 41.1999C82.0637 37.0148 75.9288 37.0148 73.5562 41.1956L70.4761 46.6868L74.0527 53.0381L79.0287 44.324L107.738 95.3584H97.5114C98.0419 98.6099 95.2321 101.789 91.2293 101.789H107.778C112.508 101.793 115.5 96.6502 113.219 92.5837V92.5837Z"
                            fill="#158876" />
                        <path
                            d="M43.7171 95.3592H20.2924L55.653 32.4284L67.1429 52.684L70.4822 46.6919L60.4269 28.832C59.9529 27.9725 59.2566 27.2562 58.4109 26.758C57.5652 26.2598 56.6012 25.998 55.6197 26C54.6381 26.002 53.6752 26.2678 52.8315 26.7695C51.9879 27.2712 51.2946 27.9903 50.8241 28.8518L14.7221 93.3852C12.6054 97.1672 15.3955 101.794 19.797 101.794H49.9992C45.9964 101.794 43.1865 98.6161 43.716 95.3592H43.7171Z"
                            fill="#41B38A" />
                        <path
                            d="M97.5122 95.3592C97.4109 94.752 97.205 94.167 96.9037 93.6302L74.0579 53.0388L70.4824 46.6875L67.1431 52.6796L44.3215 93.6357C44.0225 94.17 43.8167 94.7514 43.7129 95.3548C43.1824 98.6062 45.9966 101.784 49.995 101.784H91.2257C95.2285 101.79 98.0384 98.6161 97.5122 95.3592V95.3592ZM50.2894 95.3592L70.6735 59.2616L90.9368 95.3592H50.2894V95.3592Z"
                            fill="#243746" />
                    </svg>
                </div>
                <div ref="quasar" style="display: none">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M64 114C91.6143 114 114 91.6142 114 64C114 36.3858 91.6143 14 64 14C36.3858 14 14 36.3858 14 64C14 91.6142 36.3858 114 64 114Z"
                            fill="white" />
                        <path
                            d="M72.1825 63.9997C72.1825 68.519 68.5224 72.1791 64.0031 72.1791C59.4838 72.1791 55.8237 68.5147 55.8237 63.9997C55.8237 59.4804 59.4881 55.8203 64.0031 55.8203C68.5181 55.8203 72.1825 59.4804 72.1825 63.9997Z"
                            fill="#263238" />
                        <path
                            d="M100.314 43.0316C98.5353 39.973 96.3745 37.1505 93.8871 34.6331L84.4319 40.0932C81.4849 37.5758 78.1341 35.647 74.5599 34.3711C71.3294 37.6446 68.7647 41.3004 66.9175 45.2741C77.4424 44.5567 88.3154 48.3671 98.4064 56.2544L104.356 52.8177C103.428 49.3982 102.071 46.1118 100.314 43.0316Z"
                            fill="#1976D2" />
                        <path
                            d="M100.313 84.9644C102.074 81.8929 103.44 78.6108 104.377 75.1999L94.9214 69.7398C95.6303 65.9293 95.6216 62.063 94.9386 58.3298C90.4923 57.17 86.0418 56.7747 81.6729 57.1657C87.5582 65.925 89.6933 77.2447 87.9105 89.9262L93.8603 93.3629C96.3605 90.8412 98.53 88.0231 100.313 84.9644V84.9644Z"
                            fill="#42A5F5" />
                        <path
                            d="M64.0051 105.928C67.545 105.92 71.0676 105.46 74.4914 104.562V93.6421C78.1472 92.349 81.4895 90.4116 84.3849 87.9543C83.1649 83.5209 81.2832 79.4742 78.7616 75.8828C74.1177 85.3553 65.3841 92.8688 53.5103 97.6673V104.541C56.9341 105.447 60.461 105.911 64.0051 105.928Z"
                            fill="#1976D2" />
                        <path
                            d="M27.6909 84.9689C29.4694 88.0276 31.6302 90.85 34.1175 93.3674L43.5728 87.9073C46.5198 90.4247 49.8706 92.3535 53.4448 93.6294C56.6753 90.3559 59.24 86.7001 61.0872 82.7264C50.5623 83.4438 39.6893 79.6334 29.5983 71.7461L23.6484 75.1828C24.5764 78.6024 25.9339 81.8887 27.6909 84.9689V84.9689Z"
                            fill="#42A5F5" />
                        <path
                            d="M27.688 43.0352C25.9266 46.1068 24.5605 49.3888 23.624 52.7998L33.0793 58.2599C32.3705 62.0703 32.3791 65.9367 33.0621 69.6698C37.5084 70.8297 41.9589 71.2249 46.3279 70.834C40.4425 62.0746 38.3074 50.7549 40.0902 38.0734L34.1404 34.6367C31.6445 37.1541 29.475 39.9765 27.688 43.0352V43.0352Z"
                            fill="#1976D2" />
                        <path
                            d="M64.0004 22.0723C60.4606 22.0809 56.9379 22.5405 53.5141 23.4384V34.3585C49.8582 35.6516 46.516 37.5891 43.6206 40.0463C44.8406 44.4797 46.7222 48.5264 49.2439 52.1178C53.8878 42.6453 62.6214 35.1318 74.4953 30.3333V23.4598C71.0714 22.5534 67.5445 22.0894 64.0004 22.0723Z"
                            fill="#42A5F5" />
                    </svg>
                </div>
                <div ref="vuepress" style="display: none">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.3004 38.7151L73.3707 30.986C74.7635 30.7802 76.2258 31.6223 76.6403 32.873L98.1827 97.7885C98.7102 99.3827 97.8899 100.951 96.3406 101.287L38.0282 113.929C37.1972 114.107 36.3295 113.949 35.6155 113.488C34.9014 113.027 34.3993 112.302 34.2194 111.471L19.0496 41.5456C18.7598 40.2079 19.7699 38.9427 21.3004 38.7151Z"
                            fill="url(#paint0_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.6246 38.0174L73.6978 30.2868C75.0892 30.081 76.55 30.9231 76.9645 32.1738L98.5084 97.0893C99.0373 98.6835 98.2156 100.252 96.6677 100.588L38.3553 113.23C37.5246 113.408 36.6573 113.249 35.9433 112.789C35.2294 112.328 34.7271 111.604 34.5465 110.774L19.3738 40.8478C19.084 39.5087 20.0941 38.2449 21.6246 38.0174Z"
                            fill="url(#paint1_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.5623 30.2485L78.2558 22.6686C79.6413 22.4657 81.1109 23.315 81.5399 24.5687L103.385 88.3464C103.911 89.8798 103.117 91.3842 101.607 91.7001L45.0089 103.59C44.1998 103.755 43.3584 103.602 42.6585 103.164C41.9586 102.726 41.4536 102.036 41.248 101.236L24.4115 33.0615C24.0825 31.7282 25.0478 30.4716 26.5623 30.2499V30.2485Z"
                            fill="url(#paint2_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.889 29.5512L78.5811 21.9714C79.9666 21.7685 81.4362 22.6177 81.8652 23.8714L103.712 87.6492C104.237 89.1811 103.444 90.6869 101.934 91.0028L45.3342 102.891C44.5253 103.056 43.684 102.904 42.9842 102.466C42.2843 102.028 41.7792 101.339 41.5733 100.539L24.7382 32.3628C24.4092 31.0295 25.373 29.7715 26.889 29.5497V29.5512Z"
                            fill="url(#paint3_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M32.1167 22.0637L83.3667 14.7259C84.7421 14.5288 86.2074 15.3708 86.645 16.61L108.732 79.2109C109.258 80.7066 108.485 82.1689 106.995 82.4718L51.2807 93.859C49.6416 94.1937 47.9676 93.1633 47.5474 91.5618L30.0224 24.8289C29.6746 23.5159 30.6167 22.2782 32.1167 22.0637Z"
                            fill="url(#paint4_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M32.4419 21.365L83.692 14.0286C85.0673 13.8315 86.5326 14.6736 86.9703 15.9127L109.058 78.5136C109.584 80.0093 108.81 81.4702 107.32 81.7746L51.606 93.1617C49.9668 93.495 48.2929 92.466 47.8726 90.8631L30.3477 24.1331C30.0013 22.8172 30.9419 21.5809 32.4419 21.365Z"
                            fill="url(#paint5_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M60.1174 62.5794L82.6945 58.3953C83.0148 58.3373 83.3307 58.5257 83.4278 58.8373L87.2178 70.881C87.2447 70.9676 87.2531 71.059 87.2424 71.1491C87.2317 71.2392 87.2021 71.326 87.1556 71.4039C87.1091 71.4818 87.0468 71.5491 86.9726 71.6013C86.8984 71.6536 86.814 71.6896 86.725 71.7071L63.8232 76.1666C63.6642 76.1974 63.4995 76.1675 63.3615 76.0827C63.2236 75.9978 63.1225 75.8643 63.0783 75.7086L59.6115 63.3895C59.5873 63.3031 59.5813 63.2126 59.594 63.1237C59.6067 63.0348 59.6377 62.9495 59.6852 62.8733C59.7326 62.7971 59.7954 62.7316 59.8696 62.681C59.9437 62.6304 60.0276 62.5958 60.1159 62.5794H60.1174ZM58.1666 63.6519L61.5782 76.0709C61.706 76.535 62.0041 76.9337 62.413 77.1876C62.8219 77.4415 63.3115 77.5318 63.7841 77.4405L86.9612 72.9346C87.2262 72.8832 87.4772 72.7762 87.6978 72.6207C87.9184 72.4652 88.1035 72.2648 88.241 72.0325C88.3785 71.8003 88.4652 71.5415 88.4954 71.2734C88.5256 71.0052 88.4987 70.7336 88.4163 70.4766L84.5902 58.5156C84.4492 58.0751 84.1533 57.7007 83.7572 57.4619C83.3611 57.223 82.8919 57.136 82.4365 57.217L59.6739 61.2634C59.4124 61.3102 59.1635 61.4109 58.9432 61.5592C58.7228 61.7074 58.5357 61.9 58.3939 62.1246C58.2521 62.3492 58.1586 62.6008 58.1195 62.8636C58.0804 63.1263 58.0964 63.3943 58.1666 63.6504V63.6519ZM62.671 64.6635L65.0566 73.0404L67.6218 72.4564L66.2493 67.6331L69.7508 70.3737L71.4538 66.5157L72.8494 71.4143L75.3379 70.8824L72.9262 62.7852L70.2856 63.2417L68.6856 66.7954L65.2334 64.1794L62.671 64.6635V64.6635ZM81.2481 65.7896L79.9698 61.4924L77.3133 61.9475L78.6611 66.2823L76.2741 66.7447L81.1785 70.0172L83.6655 65.32L81.2481 65.7896V65.7896Z"
                            fill="#BCC0CF" />
                        <path
                            d="M87.1615 71.3968L86.8905 71.9577L86.8064 72.136C86.7598 72.206 86.6997 72.266 86.6295 72.3123C86.5592 72.3586 86.4804 72.3903 86.3977 72.4055L63.4988 76.8694C63.3394 76.8991 63.1746 76.8684 63.0366 76.7832C62.8986 76.698 62.7973 76.5644 62.7524 76.4085L59.2886 64.0895C59.2475 63.9466 59.2578 63.7937 59.3176 63.6576L59.3408 63.6112L59.364 63.5648L59.6249 63.004C59.5776 63.1268 59.5725 63.2619 59.6104 63.388L59.7031 63.7199L63.0756 75.7085C63.1202 75.8646 63.2213 75.9986 63.3594 76.0841C63.4974 76.1696 63.6624 76.2005 63.822 76.1708L86.7137 71.7113H86.7209C86.8128 71.6945 86.8998 71.6576 86.9757 71.6032C87.0516 71.5489 87.1146 71.4784 87.1601 71.3968H87.1615ZM88.1224 72.1968C88.2088 71.8593 88.1987 71.5043 88.0934 71.1722L84.2658 59.2155C84.1235 58.7751 83.827 58.4009 83.4307 58.1618C83.0345 57.9227 82.5652 57.8347 82.1093 57.914L59.3495 61.9634C58.848 62.0489 58.4248 62.3257 58.1553 62.7112C58.2352 62.3462 58.4223 62.0133 58.6927 61.7553C58.963 61.4974 59.3043 61.326 59.6727 61.2634L82.4411 57.2198C82.8953 57.1376 83.3638 57.2237 83.7591 57.4619C84.1545 57.7001 84.4495 58.0741 84.589 58.514L88.4151 70.4794C88.6152 71.0881 88.4847 71.7273 88.1224 72.1968ZM83.6644 65.3214L83.2875 66.0301L80.9237 66.491L79.6455 62.1953L77.5048 62.5648L77.3121 61.9489L79.9686 61.4938L81.2469 65.791L83.6644 65.3214ZM78.1512 66.3837L78.6585 66.2837L78.3367 66.9837L77.0121 67.2388L76.2729 66.746L78.1512 66.3837V66.3837ZM68.6728 66.7924L68.3569 67.4924L64.9075 64.8822L62.8365 65.2678L62.6669 64.6663L65.2322 64.1808L68.6728 66.7924V66.7924ZM75.3338 70.8794L74.8323 70.9881L72.6004 63.4808L69.967 63.9431L70.283 63.2416L72.9236 62.788L75.3338 70.8809V70.8794ZM66.5945 68.8548L66.2467 67.6316L65.925 68.3316L67.1337 72.5664L67.6177 72.4592L66.5945 68.8548V68.8548Z"
                            fill="#A2A6B3" />
                        <path
                            d="M53.0429 30.8031L46.3906 31.7263L70.0432 53.7164L78.5447 26.7363L72.2606 27.845L67.2706 43.738L53.0429 30.8031V30.8031Z"
                            fill="url(#paint6_linear)" />
                        <path
                            d="M53.043 30.8023L59.1416 29.8776L64.4997 34.682L66.533 28.7689L72.2621 27.8457L67.2722 43.7372L53.043 30.8023V30.8023Z"
                            fill="url(#paint7_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="58.6719" y1="114" x2="58.6719" y2="30.9541"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1D2130" />
                                <stop offset="1" stop-color="#3E445A" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="58.9962" y1="113.303" x2="58.9962" y2="30.2564"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#262B3F" />
                                <stop offset="1" stop-color="#656E91" />
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="63.9469" y1="103.657" x2="63.9469" y2="22.6382"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#267550" />
                                <stop offset="1" stop-color="#79B881" />
                            </linearGradient>
                            <linearGradient id="paint3_linear" x1="64.2736" y1="102.96" x2="64.2736" y2="21.9409"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#279264" />
                                <stop offset="1" stop-color="#A4F3AA" />
                            </linearGradient>
                            <linearGradient id="paint4_linear" x1="69.423" y1="93.9227" x2="69.423" y2="14.6969"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.59" stop-color="#CECFD0" />
                                <stop offset="1" stop-color="#DFDFDF" />
                            </linearGradient>
                            <linearGradient id="paint5_linear" x1="69.7483" y1="93.2255" x2="69.7483" y2="13.9996"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EAEEF0" />
                                <stop offset="0.41" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint6_linear" x1="54.2081" y1="2.21712" x2="87.6376" y2="111.562"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.22" stop-color="#73CB8D" />
                                <stop offset="0.4" stop-color="#2F9869" />
                            </linearGradient>
                            <linearGradient id="paint7_linear" x1="49.9328" y1="-7.61715" x2="102.271" y2="144.387"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.25" stop-color="#586080" />
                                <stop offset="0.35" stop-color="#2C3247" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div ref="gridsome" style="display: none">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M104.412 55.325C109.221 55.0935 113.479 58.8244 113.894 63.6379C115.693 86.925 94.3784 113.013 64.3471 113.846C39.0382 114.471 14.0071 94.2089 14.0071 63.5713C14.0071 58.7434 17.9971 54.8301 22.812 54.8301C27.6269 54.8301 31.53 58.7434 31.53 63.5713C31.53 83.7238 47.7345 96.7661 63.9188 96.3667C83.8426 95.8139 96.7952 78.563 96.1208 64.4758C95.8893 59.6537 99.6028 55.5566 104.412 55.325V55.325Z"
                            fill="url(#paint0_linear)" />
                        <path
                            d="M82.6309 64.2499C82.6309 59.3062 86.6629 55.2988 91.637 55.2988H104.763C109.736 55.2988 113.892 59.3076 113.892 64.2499C113.892 69.1936 109.736 73.1995 104.762 73.1995H91.637C86.6629 73.1995 82.6309 69.1921 82.6309 64.2499ZM55.0932 64.2629C55.0932 59.312 59.0991 55.2988 64.0356 55.2988C68.9721 55.2988 72.9794 59.312 72.9794 64.2629C72.9794 69.2124 68.9721 73.227 64.0356 73.227C59.0991 73.227 55.0918 69.2124 55.0918 64.2629H55.0932Z"
                            fill="#00A672" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M72.7323 22.3812C72.9321 27.2063 69.1939 31.2787 64.3819 31.4799C43.6143 32.3439 30.9367 48.6671 31.5546 64.1653C31.7457 68.9903 28.0799 73.057 23.2678 73.2495C18.4573 73.442 14.2271 69.549 14.0346 64.7254C13.0288 39.4656 34.0583 14.4982 63.6597 14.0076C68.4703 13.8079 72.5312 17.5562 72.7323 22.3798V22.3812Z"
                            fill="#00A672" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="64.0027" y1="54.8286" x2="64.0027" y2="113.861"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00583E" />
                                <stop offset="1" stop-color="#00835C" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </main>
    </div>
  </transition>
  <transition name="rule">
  <div class="g-container" v-if="rule">
    <div class="word">点击</div>
    <div class="word">任意</div>
    <div class="word">icon</div>
    <div class="word">寻找绿色tag</div>
    <div class="word">快来解锁</div>
    <div class="word">你的谜底</div>
    <n-button type="tertiary" @click="toMainPage" style="float:right;">skip</n-button>
   </div>
  </transition>
  <n-space id="mainPage" vertical  v-if="mainPage" ref="mainPage">
    <n-layout-header style="position:relative;z-index: 1000000;border-radius: 2vh;" ref="header">
        <n-space justify="center">
        <n-button quaternary  @click="toHomePage"><img src="./assets/images/house-fill.svg">Home</n-button>
        <n-input v-on:keyup="searchRelative" v-model:value="value" type="text" placeholder="输入可能正确的景点......" />
        <n-button type="tertiary" @click="submit">
            提交
        </n-button>
        <n-button quaternary @click="rankClick"><img src="./assets/images/boxes.svg" >rank</n-button>
        <n-button quaternary @click="comment=true"><img src="./assets/images/chat-square-text.svg">comment</n-button>
      </n-space>
      <n-list v-if="search" hoverable clickable style="width:50vw;margin-left:25vw;border-radius: 2vh;">
        <n-list-item v-for="place in relativePlaceList" @click="relativeSearch(place)">
          <n-thing>
            {{place}}
          </n-thing>
        </n-list-item>
      </n-list>
    </n-layout-header>
    <n-layout content-style="padding: 0px;border-radius: 2vh;height:80vh" has-sider sider-placement="left">
      <div id="map" style="position:absolute;width:100%; height: 100%; border-radius:2vh">
        <div class="wrap" style="z-index:10000">
          <transition name="fade">
            <div v-show="show">
              <img src="./assets/images/mask.png" style="width:100vw;height:70vh">
            </div>
          </transition>
          <button @click="show=!show" style="z-index:1000">switch</button>
        </div>
      </div>
      <div id="result" v-if="card" style="padding:5vh 10vw">
          <n-card hoverable closable @close="this.card = false" style="width:80vw;height: 70vh;border-radius: 2vh;">
              <template #header-extra>
                  <n-button-group>
                      <n-button ghost @click="displayRelationM(id)"> result </n-button>
                      <n-button ghost @click="displayIntroduciton">introduction</n-button>
                    </n-button-group>
              </template>
              <template #action>
                  <div id="relation" style="width: 100%; height: 50vh"></div>
                  <n-space justify="center"><n-button type="tertiary" v-if="correctRe" @click="rePlay">再来一局</n-button></n-space>
              </template>
          </n-card>
      </div>
      <div id="comment" v-if="comment" style="padding:10vh 10vw;overflow:scroll;">
          <n-card title="评论" hoverable closable @close="this.comment = false" style="width:80vw;height: 60vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical>
                <n-input
                  v-model:value="comments"
                  type="textarea"
                  placeholder="可以发表关于这个网站的评论，或者谈谈选中的景点在你眼中的印象......"
                />
                <n-button type="tertiary" @click="submitComment">提交</n-button>
                <n-card v-for="singleComment in commentsList">
                  <template #header>
                    {{singleComment}}
                  </template>
                    User:{{user}} <br> {{time}}
                </n-card>
              </n-space>
            </template>
          </n-card>
      </div>
      <div id="rank" v-if="rank" style="padding:10vh 10vw;overflow:scroll;">
          <n-card title="排行" hoverable closable @close="this.rank = false" style="width:80vw;height: 60vh;border-radius: 2vh;">
            <template #action>
              <n-space vertical>
                <n-card v-for="i in rankList.length">
                  <template #header>
                    第{{i}}名 : {{rankList[i-1]}}
                  </template>
                </n-card>
              </n-space>
            </template>
          </n-card>
      </div>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="true"
        :show-collapsed-content="false"
        style="height: 80vh;position:absolute;opacity: 1;z-index: 10000;"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuList"
          style="opacity: 1;z-index: 10000;"
        />
      </n-layout-sider>
    </n-layout>
    <n-layout-footer style="border-radius: 2vh;" ref="footer">
      <n-space>
        <a href="https://github.com/landleHUST/landle" target="_blank" style="float: right;"><img style="width:5vh;" src="./assets/images/github.svg"></a>
        <n-tag v-for="feature in correctFeatureList" type="success">
        {{feature}}
      </n-tag>
      </n-space>
    </n-layout-footer>
  </n-space>
</template>
<script>
import {ref} from "vue";
import * as echarts from "echarts"
import {placeList} from "./data"
import {featureList} from "./data"
import {gsap} from "gsap"
import {menuList} from "./data"
import {mapList} from "./data"
var myChart;
var map;
var correctId=Math.round(Math.random()*60);
let commentsList=[];
let click=0;
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
window.onload = function () //窗口打开即开始加载
{
  var num1 = document.getElementById("placeFirst");
  var i = 0;
  var id1 = setInterval(frame1, 40);
  function frame1() {
    if (i >= 60) {
      clearInterval(id1);
    } else {
      i++;
      num1.innerHTML = `我们一共收集了${i}个中国景点`;
    }
  }
  var j = 0;
  var num2 = document.getElementById("featureFirst");
  setTimeout(() => {
    var id2 = setInterval(frame2, 20);
    function frame2() {
      if (j >= 208) {
        clearInterval(id2);
      } else {
        j++;
        num2.innerHTML = `整理了${j}个景点标签`;
      }
    }
  }, 3000);

  var num3 = document.getElementById("static");
  setTimeout(() => {
      num3.innerHTML = `这个游戏用标签带你领略祖国大地`;
  }, 8000);
};
export default{
  setup(){
    return{
            value: ref(null),
            comments: ref(null),
            name: ref(null),
        }
  },
  data(){
    return {
      card:false,
      id: 5,
      correctFeatureList:[],
      feature:"",
      search:true,
      place:"",
      placeList: placeList,
      relativePlaceList:[],
      featureList:featureList,
      show:true,
      mainPage:false,
      loading:true,
      intro: true,
      statement: ["OUR", "PROJECT", "IS", "LANDLE", "!"],
      choose: 0,
      chooseId: 0,
      rule:false,
      homePage: false,
      width: window.innerWidth / 2,
      height: (window.innerHeight * 0.8) / 2,
      count: 15,
      index: 0,
      iconsList: ["nuxt", "vue", "quasar", "vuepress", "gridsome"],
      animationStart: false,
      menuList: menuList,
      comment: false,
      rank:false,
      singleComment:"",
      commentsList: [],
      time:"",
      signup: false,
      user:"",
      rank: false,
      rankList:[],
      gameTimes:0,
      correctRe:false,
      i:""
    }
  },
  methods:{
    displayRelationM(id){
      this.card=true;
      this.id=id;
      let mypromise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 100);
    });
    mypromise.then(() => {
        setTimeout(()=>{
        var dom = document.getElementById("relation");
        if (myChart != null && myChart !== "" && myChart !== undefined) {
            try {
                myChart.dispose(); // 销毁
            } catch (error) { }
        }
        dom.innerHTML='';
        myChart = echarts.init(dom);
        var option;
        var datas = [];
        datas[0] = {
            name: placeList[this.id]["name"],
            x: 50,
            y: 60,
            symbolSize: 60,
            colors: "#ffffff",
        };
        let i;
        for(i=0;i<placeList[this.id]["feature"].length;i++)
        {
            if(placeList[correctId]["feature"].indexOf(placeList[this.id]["feature"][i])!==-1)
            {
                if(this.correctFeatureList.indexOf(this.featureList[placeList[this.id]["feature"][i]-1])===-1)
                {
                    this.correctFeatureList.push(this.featureList[placeList[this.id]["feature"][i]-1]);
                }
                datas.push({
                    name: this.featureList[placeList[this.id]["feature"][i]-1],
                    symbolSize: [100,30],
                    symbol: "rect",
                    colors: "#66c18c"
                })
            }
            else
            {
                datas.push({
                    name: this.featureList[placeList[this.id]["feature"][i]-1],
                    symbolSize: [100,30],
                    symbol: "rect",
                    colors: "#d1c2d3"
                })
            }
        }
        var links = [];
        for (i=0;i<placeList[this.id]["feature"].length;i++) 
        {
            links.push({
                source: this.featureList[placeList[this.id]["feature"][i]-1],
                target: placeList[this.id]["name"]
            });
        }
        option = {
            title: {
                text: placeList[this.id]["name"]
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            scaleLimit: {
                min: 1,
                max: 6,
            },
            draggable: true,
            series: [
                {
                    type: "graph",
                    layout: "force",
                    force: {
                        repulsion: 1800,
                    },
                    label: {
                        show: true,
                    },
                    data: datas,
                    // links: [],
                    links: links,
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
                    },
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return params.data.colors; //获取具体的参数
                            },
                        },
                    },
                },
            ],
        };
        console.log(option);
        option && myChart.setOption(option);
        })
    });
    },
    displayMap(){
    let newPormise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 500);
    });
    newPormise.then(() => {
        const dom = document.getElementById("map");
        if (map != null && map !== "" && map !== undefined) {
            try {
                map.dispose(); // 销毁
            } catch (error) { }
        }
        map = echarts.init(dom);
        map.on("click", function (params) {
            window.displayRelationM(params.data["id"]);
            click++;
        })
        var datas = [];
        for (let i = 0; i < placeList.length; i++) {
            if(i!==correctId)
            {
                if(i===25 || i===30 || i===24)
                    datas.push({ id: i,name: placeList[i]["name"], symbol: mapList[i], symbolSize: 400});
                else if(i===12 || i===23)
                    datas.push({ id: i,name: placeList[i]["name"], symbol: mapList[i], symbolSize: 350});
                else if(i===33 || i===35 || i===29)
                    datas.push({ id: i,name: placeList[i]["name"], symbol: mapList[i], symbolSize: 300});
                else if(i===46 || i===41 || i===31 || i===42)
                    datas.push({ id: i,name: placeList[i]["name"], symbol: mapList[i], symbolSize: 250});
                else
                    datas.push({ id: i,name: placeList[i]["name"], symbol: mapList[i], symbolSize: 200});
            }
        }
        var option = {
            backgroundColor: "#fbeed3",
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            layoutAnimation: true,
            scaleLimit: {
                min: 0.5,
                max: 4,
            },
            draggable: true,
            series: [
                {
                    type: "graph",
                    layout: "force",
                    roam: true,
                    force: {
                        repulsion: 2000
                    },
                    label: {
                        show: false,
                    },
                    data: datas,
                    lineStyle: {
                        opacity: 0,
                        width: 2,
                        curveness: 0,
                    },
                },
            ],
        };
        option && map.setOption(option);
    });
},
    displayIntroduciton() {
            var dom = document.getElementById("relation");
            dom.innerHTML = `
        <p>${placeList[this.id]["introduction"]}</p>
        `;
        },
    submit()
    {
        click++;
        let i;
        this.search=false;
        for(i=0;i<placeList.length;i++)
        {
            if(this.value===placeList[i]["name"])
            {
              this.id=i;
              window.displayRelationM(this.id);
              if(i==correctId)
              {
                this.correctRe=true;
                this.congratulation();
              }
              break;
            }
        }
    },
    submitName()
    {
        this.user=this.name;
        this.name="";
        this.signup=false;
    },
    submitComment()
    {
        let date=new Date();
        this.time=`${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        this.commentsList=commentsList;
        this.commentsList.push(this.comments);
        commentsList=this.commentsList;
        this.comments="";
    },
    rankClick()
    {
      setTimeout(()=>{
        this.rank=true;
      },10);
    },
    searchRelative(){
      this.relativePlaceList=[];
      this.search=true;
      let i;
      for(i=0;i<this.placeList.length;i++)
      {
        if(this.placeList[i]["name"].indexOf(this.value)!==-1 && this.value!="")
        {
          this.relativePlaceList.push(this.placeList[i]["name"]);
        }
      }
    },
    relativeSearch(place)
    {
      this.value=place;
      this.search=false;
    },
    toMainPage()
    {
      this.rule=false;
      this.mainPage=true;
      this.displayMap()
    },
    toHomePage()
    {
        this.chooseId=0;
        this.choose=0;
        this.mainPage=false;
        this.homePage=true;
        this.popIcons();
    },
    switchStatement() {
      this.intro = !this.intro;
      var dom;
      setTimeout(() => {
        if (!this.choose) {
          this.chooseId++;
          this.chooseId=this.chooseId%this.statement.length;
          this.choose=1;
          dom = document.getElementById("second");
          dom.innerHTML = this.statement[this.chooseId];
        } else {
          this.chooseId++;
          this.chooseId=this.chooseId%this.statement.length;
          this.choose=0;
          dom = document.getElementById("first");
          dom.innerHTML = this.statement[this.chooseId];
        }
      }, 0);
    },
    loadingTohome()
    {
        this.loading=false;
        this.homePage=true;
        setTimeout(this.popIcons(),10);
    },
    homeToRule()
    {
        this.homePage=false;
        this.rule=true;
        setTimeout(this.popIcons(),10);
    },
    rePlay()
    {
      this.correctRe=false;
      console.log(click);
      this.rankList.push(click);
      click=0;
      this.rankList=this.rankList.sort();
      correctId=Math.round(Math.random()*60);
      this.correctFeatureList=[];
      console.log(this.rankList);
      this.card=false;
      this.displayMap();
    },
    popIcons() {
                let className = null;
                if (!this.animationStart) {
                    className = this.iconsList[this.index];
                    this.animationStart = true;
                } else {
                    this.index =
                        this.index == this.iconsList.length - 1 ? 0 : this.index + 1;
                    className = this.iconsList[this.index];
                }
                setTimeout(()=>{
                  const icons = this.$refs.icons;
                  const target = this.$refs[className];
                  target.style = "";
                  target.classList.add(className);
                  const targetCopy = target.cloneNode(true);
                  const newNodeList = [];
                  for (let i = this.count; i--;) {
                      let node = targetCopy.cloneNode(true);
                      newNodeList.push(node);
                      icons.appendChild(node);
                  }
                  const animationTask = [];
                  var nodes = document.getElementsByClassName(className);
                  nodes = Array.from(nodes);
                  nodes.forEach((node) => {
                      animationTask.push(this.animation(node));
                  });
                  Promise.all(animationTask).then(() => {
                      newNodeList.forEach((node) => {
                          node.parentNode.removeChild(node);
                      });
                      this.popIcons();
                  });
                },10)
            },
            animation(node) {
                const width = this.width;
                const height = this.height;
                return new Promise((resolve, reject) => {
                    try {
                        const v = gsap.to(node, 0.3, {
                            x: 2 * (Math.random() - 0.5) * width,
                            y: 2 * (Math.random() - 0.5) * height,
                            autoAlpha: Math.random() * 0.4 + 0.2,
                            scale: Math.random() * 0.5 + 0.3,
                            rotate: 2 * (Math.random() - 0.5) * 40,
                        });
                        setTimeout(() => {
                            v.reverse().then(() => {
                                resolve();
                            });
                        }, 3000);
                    } catch (e) {
                        reject(e);
                    }
                });
            },
            congratulation(){
    !function (t, e) { !function t(e, n, a, i) { var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL); function r() { } function l(t) { var a = n.exports.Promise, i = void 0 !== a ? a : e.Promise; return "function" == typeof i ? new i(t) : (t(r, r), null) } var c, s, u, d, f, h, m, g, b, v = (u = Math.floor(1e3 / 60), d = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function (t) { var e = Math.random(); return d[e] = requestAnimationFrame((function n(a) { f === a || f + u - 1 < a ? (f = a, delete d[e], t()) : d[e] = requestAnimationFrame(n) })), e }, s = function (t) { d[t] && cancelAnimationFrame(d[t]) }) : (c = function (t) { return setTimeout(t, u) }, s = function (t) { return clearTimeout(t) }), { frame: c, cancel: s }), p = (g = {}, function () { if (h) return h; if (!a && o) { var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n"); try { h = new Worker(URL.createObjectURL(new Blob([e]))) } catch (t) { return void 0 !== typeof console && "function" == typeof console.warn && console.warn("馃帄 Could not load worker", t), null } !function (t) { function e(e, n) { t.postMessage({ options: e || {}, callback: n }) } t.init = function (e) { var n = e.transferControlToOffscreen(); t.postMessage({ canvas: n }, [n]) }, t.fire = function (n, a, i) { if (m) return e(n, null), m; var o = Math.random().toString(36).slice(2); return m = l((function (a) { function r(e) { e.data.callback === o && (delete g[o], t.removeEventListener("message", r), m = null, i(), a()) } t.addEventListener("message", r), e(n, o), g[o] = r.bind(null, { data: { callback: o } }) })) }, t.reset = function () { for (var e in t.postMessage({ reset: !0 }), g) g[e](), delete g[e] } }(h) } return h }), y = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: .9, gravity: 1, drift: 0, ticks: 200, x: .5, y: .5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 }; function M(t, e, n) { return function (t, e) { return e ? e(t) : t }(t && null != t[e] ? t[e] : y[e], n) } function w(t) { return t < 0 ? 0 : Math.floor(t) } function x(t) { return parseInt(t, 16) } function C(t) { return t.map(k) } function k(t) { var e = String(t).replace(/[^0-9a-f]/gi, ""); return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), { r: x(e.substring(0, 2)), g: x(e.substring(2, 4)), b: x(e.substring(4, 6)) } } function I(t) { t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight } function S(t) { var e = t.getBoundingClientRect(); t.width = e.width, t.height = e.height } function T(t, e, n, o, r) { var c, s, u = e.slice(), d = t.getContext("2d"), f = l((function (e) { function l() { c = s = null, d.clearRect(0, 0, o.width, o.height), r(), e() } c = v.frame((function e() { !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), d.clearRect(0, 0, o.width, o.height), u = u.filter((function (t) { return function (t, e) { e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += e.wobbleSpeed, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble); var n = e.tick++ / e.totalTicks, a = e.x + e.random * e.tiltCos, i = e.y + e.random * e.tiltSin, o = e.wobbleX + e.random * e.tiltCos, r = e.wobbleY + e.random * e.tiltSin; return t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), "circle" === e.shape ? t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, a, i, o, r, l, c) { t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore() }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks }(d, t) })), u.length ? c = v.frame(e) : l() })), s = l })); return { addFettis: function (t) { return u = u.concat(t), f }, canvas: t, promise: f, reset: function () { c && v.cancel(c), s && s() } } } function E(t, n) { var a, i = !t, r = !!M(n || {}, "resize"), c = M(n, "disableForReducedMotion", Boolean), s = o && !!M(n || {}, "useWorker") ? p() : null, u = i ? I : S, d = !(!t || !s) && !!t.__confetti_initialized, f = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches; function h(e, n, i) { for (var o, r, l, c, s, d = M(e, "particleCount", w), f = M(e, "angle", Number), h = M(e, "spread", Number), m = M(e, "startVelocity", Number), g = M(e, "decay", Number), b = M(e, "gravity", Number), v = M(e, "drift", Number), p = M(e, "colors", C), y = M(e, "ticks", Number), x = M(e, "shapes"), k = M(e, "scalar"), I = function (t) { var e = M(t, "origin", Object); return e.x = M(e, "x", Number), e.y = M(e, "y", Number), e }(e), S = d, E = [], F = t.width * I.x, N = t.height * I.y; S--;)E.push((o = { x: F, y: N, angle: f, spread: h, startVelocity: m, color: p[S % p.length], shape: x[(c = 0, s = x.length, Math.floor(Math.random() * (s - c)) + c)], ticks: y, decay: g, gravity: b, drift: v, scalar: k }, r = void 0, l = void 0, r = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), { x: o.x, y: o.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(.11, .1 * Math.random() + .05), velocity: .5 * o.startVelocity + Math.random() * o.startVelocity, angle2D: -r + (.5 * l - Math.random() * l), tiltAngle: (.5 * Math.random() + .25) * Math.PI, color: o.color, shape: o.shape, tick: 0, totalTicks: o.ticks, decay: o.decay, drift: o.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * o.gravity, ovalScalar: .6, scalar: o.scalar })); return a ? a.addFettis(E) : (a = T(t, E, u, n, i)).promise } function m(n) { var o = c || M(n, "disableForReducedMotion", Boolean), m = M(n, "zIndex", Number); if (o && f) return l((function (t) { t() })); i && a ? t = a.canvas : i && !t && (t = function (t) { var e = document.createElement("canvas"); return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e }(m), document.body.appendChild(t)), r && !d && u(t); var g = { width: t.width, height: t.height }; function b() { if (s) { var e = { getBoundingClientRect: function () { if (!i) return t.getBoundingClientRect() } }; return u(e), void s.postMessage({ resize: { width: e.width, height: e.height } }) } g.width = g.height = null } function v() { a = null, r && e.removeEventListener("resize", b), i && t && (document.body.removeChild(t), t = null, d = !1) } return s && !d && s.init(t), d = !0, s && (t.__confetti_initialized = !0), r && e.addEventListener("resize", b, !1), s ? s.fire(n, g, v) : h(n, g, v) } return m.reset = function () { s && s.reset(), a && a.reset() }, m } function F() { return b || (b = E(null, { useWorker: !0, resize: !0 })), b } n.exports = function () { return F().apply(this, arguments) }, n.exports.reset = function () { F().reset() }, n.exports.create = E }(function () { return void 0 !== t ? t : "undefined" != typeof self ? self : this || {} }(), e, !1), t.confetti = e.exports }(window, {});
    var duration = 10 * 400;
    var animationEnd = Date.now() + duration;
    var defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0
    };

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 150 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2
            }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2
            }
        }));
    }, 250);
}
            
  },
  created () {   
      window.displayRelationM= this.displayRelationM; 
  }
}
</script>
<style scoped>
.n-layout-header,
.n-layout-footer {
    background: rgba(146, 209, 245, 0.4);
    padding: 2.5vh;
    height: 8vh;
}

.n-layout-sider {
    background: rgba(255, 175, 175, 0.2);
}

.n-layout-content {
    background: rgba(255, 175, 175, 0.2);
    height: 80vh;
}

@keyframes bounce-in{
  0% {
                transform: scale(1);
                /*开始为原始大小*/
                opacity: 1;
            }

            25% {
                transform: scale(1.5);
                /*放大1.1倍*/
                opacity: 0.75;
            }

            50% {
                transform: scale(2);
                opacity: 0.3;
            }

            75% {
                transform: scale(5);
                opacity: 0;
            }

            100% {
                transform: scale(10);
                opacity: 0;
            }
}
.fade-enter-active {
  transform-origin: left center;
  animation:bounce-in 1s;
}

@keyframes loadingOut{
    0%{
      opacity: 1;
      filter: blur(0px);
    }
    100%{
      opacity: 0;
      filter: blur(100px);
    }
}
.loadingOut-leave-active{
  animation: loadingOut 2s ease;
}
.rule-leave-active{
  animation: loadingOut 2s ease;
}

@keyframes homePageIn{
  0%{
      opacity: 0;
      filter: blur(100px);
    }
  100%{
      opacity: 1;
      filter: blur(0px);
    }
}
.homePage-enter-active{
  animation: homePageIn 2s ease;
}
@keyframes ruleIn{
  0%{
      opacity: 0;
      filter: blur(100px);
    }
  100%{
      opacity: 1;
      filter: blur(0px);
    }
}
.rule-enter-actice{
  animation: ruleIn 2s ease;
}

@keyframes in {
  0% {
    filter: blur(80px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes out {
  0% {
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    filter: blur(80px);
    opacity: 0;
  }
}
.first-enter-active,
.second-enter-active {
  animation: in 1s ease;
}
.first-leave-active,
.second-leave-active {
  animation: out 4s ease;
}
</style>
<style lang="scss" scoped>
    @mixin flex() {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #homePage {
        overflow: hidden;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    $speed: 12s;
    $wordCount: 6;
    .g-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #000;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 120px;
    filter: contrast(15);
}
.word {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: change $speed infinite ease-in-out;

    @for $i from 0 to $wordCount {
        &:nth-child(#{$i + 1}) {
            animation-delay: ($speed / ($wordCount + 1) * $i) - $speed;
        }
    }
}
@keyframes change {
    0%,
    5%,
    100% {
        filter: blur(0px);
        opacity: 1;
    }
    50%,
    80% {
        filter: blur(80px);
        opacity: 0;
    }
}
    main {
        height: 85%;
        border-bottom: 1px solid fade-out(#313131, 0.7);

        .vue,
        .nuxt,
        .quasar,
        .vuepress,
        .gridsome {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            z-index: -1;
        }
    }

    .icons {
        position: relative;
        height: 100%;
    }
</style>