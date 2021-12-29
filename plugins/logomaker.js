/* Codded by AlphaXteam ⚙️

Unlimited API for Photooxy, Textpro and Instagram scraper.

Material: https://www.npmjs.com/package/free-textmaker-alpha
Github: https://github.com/SL-Alpha-X/free-textmaker-alpha

This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const AlphaXapi = require('free-textmaker-alpha'); // Import NPM Package

const AlphaX = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const AlphaXnpm = require('alpha-wabot-npm');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'SI') desc_msg = 'අසීමිත ප්‍රවේශයක් සහිත ලොග්මේකර් මෙවලම් පෙන්වයි.'
if (Config.LANG == 'EN') desc_msg = 'Shows logomaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let WType = Config.WORKTYPE == 'public' ? false : true

AlphaX.addCommand({pattern: 'logomaker$', fromMe: WType, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    var t47 = ''
    var t48 = ''
    var t49 = ''
    var t50 = ''
    var t51 = ''
    var t52 = ''
    var t53 = ''
    var t54 = ''
    var t55 = ''
    var t56 = ''
    var t57 = ''
    var t58 = ''
    var t59 = ''
    var t60 = ''
    var t61 = ''
    var t62 = ''
    var t63 = ''
    var t64 = ''
    var t65 = ''
    var t66 = ''
    var t67 = ''
    var t68 = ''
    var t69 = ''
    var t70 = ''
    var t71 = ''
    var t72 = ''
    var t73 = ''
    var t74 = ''
    var t75 = ''
    var t76 = ''
    var t77 = ''
    var t78 = ''
    var t79 = ''
    var t80 = ''
    
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Parıltı Temalı Logo Yapar.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Taş ve Çekiç Temalı Logo Yapar.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = '2. Bir Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html
        t32 = '2. Bir Harry Potter Temalı Logo Yapar.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Renk Gradyan Temalı Logo Yapar.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = '5. Bir Neon Temalı Logo Yapar.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html
        t35 = 'Magme Temalı Logo Yapar.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html 
        t36 = 'Kırık Cam Temalı Logo Yapar.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Kağıt Temalı Logo Yapar.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Metal Temalı Logo Yapar.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Suluboya Temalı Logo Yapar.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Çizim Efekti ile Renkli Logo Yapar.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html 
        t41 = '3 Boyutlu Baskı Temalı Logo Yapar.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = '2. Bir Yıldırım Temalı Logo Yapar.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Transformers Temalı Logo Yapar.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html 
        t44 = 'Kan Temalı Logo Yapar.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = '2. Bir Kan Temalı Logo Yapar.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = '2. Bir Alev Temalı Logo Yapar.' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Siyah ve Pembe Temalı Logo Yapar.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Kum Temalı Logo Yapar.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = '2. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = '3. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = '4. Bir Kum Temalı Logo Yapar.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Dut Temalı Logo Yapar.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = '3. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/break-wall-text-effect-871.html 
        t54 = 'PHub Temalı Logo Yapar.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = '2. Bir Şeytan Temalı Logo Yapar.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Retro Temalı Logo Yapar.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Bilim Kurgu Temalı Logo Yapar.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = '2. Bir Siyah ve Pembe Temalı Logo Yapar.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Yol Temalı Logo Yapar.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Üzgün Temalı Logo Yapar.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Animasyonlu Ayı Logosu Yapar.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Animasyonlu Yavru Köpek Logosu Yapar.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = '2. Bir PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = '3. Bir PUBG Temalı Logo Yapar.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.
        t66 = 'Kalp Animasyonlu Logo Yapar.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = '4. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = '2. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Melek Temalı Logo Yapar.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Yaprak Temalı Logo Yapar.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Altın Temalı Logo Yapar.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = '3. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = '3. Bir Alev Temalı Logo Yapar.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html
        t74 = '5. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Kar Temalı Logo Yapar.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = '2. Bir Renk Gradyan Temalı Logo Yapar.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = '6. Bir Neon Temalı Logo Yapar.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Sıcak Hava Balonu Temalı Logo Yapar.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = '2. Bir Altın Temalı Logo Yapar.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Matrix Temalı Logo Yapar.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Makes Stone and Hammer Themed Logo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Makes a Second With Glitch Effect.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Makes a Second Harry Potter Themed Logo.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Makes a Color Gradient Themed Logo.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Makes a Fifth Neon-Themed Logo.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Makes Magma Themed Logo.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Makes Broken Glass Themed Logo.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Makes Paper Themed Logo.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Makes Metal Themed Logo.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Makes Watercolor Themed Logo.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Makes Colorful Logo with Art Effect.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Makes 3D Printing Themed Logos.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Makes a Second Lightning-Themed Logo.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Makes Transformers Themed Logo.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Makes Blood Themed Logo.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Makes a Second Blood Themed Logo.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Makes a Second Flame Themed Logo' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Makes Black and Pink Themed Logo.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Makes Sand Themed Logo.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Makes a Second Sand Themed Logo.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Makes a Third Sand Themed Logo.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Makes a Fourth Sand Themed Logo.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Makes Mulberry Themed Logo.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Makes a Third Graffiti Themed Logo.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Makes Phub Themed Logo.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Makes a Second Devil-Themed Logo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Makes Retro Themed Logo.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Makes a Sci-Fi Themed Logo.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = 'Makes a Second Black and Pink Themed Logo.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Makes PUBG Themed Video Logo.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Makes Road Themed Logo.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Makes a Sad Themed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Makes Animated Bear Logo.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Makes Animated Puppy Logo.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Makes Second PUBG Themed Video Logo.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Makes Third PUBG Themed Logo.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Makes Heart Animated Logo.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Makes Fourth Graffiti Themed Logo.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Makes a Second Space Themed Logo.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Makes Angel Themed Logo.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Makes Leaf Themed Logo.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Makes Gold Themed Logo.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Makes a Third Space Themed Logo.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Makes Third Flame Themed Logo.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Makes Fifth Graffiti Themed Logo.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Makes Snow Themed Logo.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Makes a Second Color Gradient Themed Logo.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Makes a Sixth Neon Themed Logo.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Makes a Hot Air Balloon Themed Logo.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Makes a Second Gold Themed Logo.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Makes Matrix Themed Logos.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ Örnek: '
        command_cmd = '💻 Komut: '
        desc_cmd = 'ℹ️ Açıklama: '
    } else { 
        usage_cmd = '🔖 Exᴀᴍᴘʟᴇ: '
        command_cmd = Config.C_EMOJI + ' Cᴏᴍᴍᴀɴᴅ: '
        desc_cmd = Config.D_EMOJI + ' Dᴇsᴄ: '
    }
    
    const rows = [
        {title: command_cmd + '.logodevil\n', description: desc_cmd + t1 + '\n' + usage_cmd + '.logodevil WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2devil\n', description: desc_cmd + t55 + '\n' + usage_cmd + '.logo2devil WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logobear\n', description: desc_cmd + t2 + '\n' + usage_cmd + '.logobear WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logowolf\n', description: desc_cmd + t10 + '\n' + usage_cmd + '.logowolf Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoneon\n', description: desc_cmd + t3 + '\n' + usage_cmd + '.logoneon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2neon\n', description: desc_cmd + t4 + '\n' + usage_cmd + '.logo2neon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3neon\n', description: desc_cmd + t18 + '\n' + usage_cmd + '.logo3neon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo4neon\n', description: desc_cmd + t27 + '\n' + usage_cmd + '.logo4neon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo5neon\n', description: desc_cmd + t34 + '\n' + usage_cmd + '.logo5neon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo6neon\n', description: desc_cmd + t77 + '\n' + usage_cmd + '.logo6neon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logolight\n', description: desc_cmd + t5 + '\n' + usage_cmd + '.logolight WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logojoker\n', description: desc_cmd + t6 + '\n' + usage_cmd + '.logojoker WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoninja\n', description: desc_cmd + t7 + '\n' + usage_cmd + '.logoninja Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoglitter\n', description: desc_cmd + t8 + '\n' + usage_cmd + '.logoglitter WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logobokeh\n', description: desc_cmd + t9 + '\n' + usage_cmd + '.logobokeh WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logomarvel\n', description: desc_cmd + t11 + '\n' + usage_cmd + '.logomarvel Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2marvel\n', description: desc_cmd + t12 + '\n' + usage_cmd + '.logo2marvel Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoavengers\n', description: desc_cmd + t13 + '\n' + usage_cmd + '.logoavengers Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logograf\n', description: desc_cmd + t15 + '\n' + usage_cmd + '.logograf Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2graf\n', description: desc_cmd + t16 + '\n' + usage_cmd + '.logo2graf Developer;WhatsApp\n', rowId: "rowid1"},  
        {title: command_cmd + '.logo3graf\n', description: desc_cmd + t53 + '\n' + usage_cmd + '.logo3graf WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo4graf\n', description: desc_cmd + t67 + '\n' + usage_cmd + '.logo4graf WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo5graf\n', description: desc_cmd + t74 + '\n' + usage_cmd + '.logo5graf WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logolion\n', description: desc_cmd + t17 + '\n' + usage_cmd + '.logolion Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoice\n', description: desc_cmd + t19 + '\n' + usage_cmd + '.logoice WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logospace\n', description: desc_cmd + t20 + '\n' + usage_cmd + '.logospace Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2space\n', description: desc_cmd + t68 + '\n' + usage_cmd + '.logo2space WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3space\n', description: desc_cmd + t72 + '\n' + usage_cmd + '.logo3space WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logosmoke\n', description: desc_cmd + t21 + '\n' + usage_cmd + '.logosmoke WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoglow\n', description: desc_cmd + t23 + '\n' + usage_cmd + '.logoglow WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logofire\n', description: desc_cmd + t25 + '\n' + usage_cmd + '.logofire WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2fire\n', description: desc_cmd + t46 + '\n' + usage_cmd + '.logo2fire WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3fire\n', description: desc_cmd + t73 + '\n' + usage_cmd + '.logo3fire WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoharry\n', description: desc_cmd + t26 + '\n' + usage_cmd + '.logoharry WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2harry\n', description: desc_cmd + t32 + '\n' + usage_cmd + '.logo2harry WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logocup\n', description: desc_cmd + t29 + '\n' + usage_cmd + '.logocup WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logocemetery\n', description: desc_cmd + t28 + '\n' + usage_cmd + '.logocemetery WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logostone\n', description: desc_cmd + t30 + '\n' + usage_cmd + '.logostone WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logogradient\n', description: desc_cmd + t33 + '\n' + usage_cmd + '.logogradient WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2gradient\n', description: desc_cmd + t76 + '\n' + usage_cmd + '.logo2gradient WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logomagma\n', description: desc_cmd + t35 + '\n' + usage_cmd + '.logomagma WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logobglass\n', description: desc_cmd + t36 + '\n' + usage_cmd + '.logobglass WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logopaper\n', description: desc_cmd + t37 + '\n' + usage_cmd + '.logopaper WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logometal\n', description: desc_cmd + t38 + '\n' + usage_cmd + '.logometal WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logowcolor\n', description: desc_cmd + t39 + '\n' + usage_cmd + '.logowcolor WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoart\n', description: desc_cmd + t40 + '\n' + usage_cmd + '.logoart WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3d\n', description: desc_cmd + t41 + '\n' + usage_cmd + '.logo3d Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2light\n', description: desc_cmd + t42 + '\n' + usage_cmd + '.logo2light WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logorobo\n', description: desc_cmd + t43 + '\n' + usage_cmd + '.logorobo WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoblood\n', description: desc_cmd + t44 + '\n' + usage_cmd + '.logoblood WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2blood\n', description: desc_cmd + t45 + '\n' + usage_cmd + '.logo2blood WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logopink\n', description: desc_cmd + t47 + '\n' + usage_cmd + '.logopink WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2pink\n', description: desc_cmd + t58 + '\n' + usage_cmd + '.logo2pink WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logosand\n', description: desc_cmd + t48 + '\n' + usage_cmd + '.logosand WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2sand\n', description: desc_cmd + t49 + '\n' + usage_cmd + '.logo2sans WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3sand\n', description: desc_cmd + t50 + '\n' + usage_cmd + '.logo3sand WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo4sand\n', description: desc_cmd + t51 + '\n' + usage_cmd + '.logo4sand WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoberry\n', description: desc_cmd + t52 + '\n' + usage_cmd + '.logoberry WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logohub\n', description: desc_cmd + t54 + '\n' + usage_cmd + '.logohub AlphaX;Hub\n', rowId: "rowid1"},
        {title: command_cmd + '.logoretro\n', description: desc_cmd + t56 + '\n' + usage_cmd + '.logoretro Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logosci\n', description: desc_cmd + t57 + '\n' + usage_cmd + '.logosci WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logopubg\n', description: desc_cmd + t59 + '\n' + usage_cmd + '.logopubg WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoroad\n', description: desc_cmd + t60 + '\n' + usage_cmd + '.logoroad WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logosad\n', description: desc_cmd + t61 + '\n' + usage_cmd + '.logosad WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoabear\n', description: desc_cmd + t62 + '\n' + usage_cmd + '.logoabear WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logopuppy\n', description: desc_cmd + t63 + '\n' + usage_cmd + '.logopuppy WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2pubg\n', description: desc_cmd + t64 + '\n' + usage_cmd + '.logo2pubg WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo3pubg\n', description: desc_cmd + t65 + '\n' + usage_cmd + '.logo3pubg WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoheart\n', description: desc_cmd + t66 + '\n' + usage_cmd + '.logoheart WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoangel\n', description: desc_cmd + t69 + '\n' + usage_cmd + '.logoangel WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoleaf\n', description: desc_cmd + t70 + '\n' + usage_cmd + '.logoleaf WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logogold\n', description: desc_cmd + t71 + '\n' + usage_cmd + '.logogold WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2gold\n', description: desc_cmd + t79 + '\n' + usage_cmd + '.logo2gold WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logosnow\n', description: desc_cmd + t75 + '\n' + usage_cmd + '.logosnow WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoballoon\n', description: desc_cmd + t78 + '\n' + usage_cmd + '.logoballoon WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logomatrix\n', description: desc_cmd + t80 + '\n' + usage_cmd + '.logomatrix WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logoglitch\n', description: desc_cmd + t14 + '\n' + usage_cmd + '.logoglitch Developer;WhatsApp\n', rowId: "rowid1"},
        {title: command_cmd + '.logo2glitch\n', description: desc_cmd + t31 + '\n' + usage_cmd + '.logo2glitch Developer;WhatsApp', rowID: "rowid1"}
        ]
        
        var get_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var time_here = new Date().toLocaleDateString(get_localized_date)
        var Al4X = '```💡 Tɪᴍᴇ > ' + get_time + '```\n```📅 Dᴀᴛᴇ > ' + time_here + '```'

        const sections = [{title: "🎭 ʟᴏɢᴏ ᴍᴀᴋᴇʀ ᴛᴏᴏʟs 🥳", rows: rows}]

        const button = {
         buttonText: '💈 ʟᴏɢᴏ ᴍᴀᴋᴇʀ ᴛᴏᴏʟs 💎',
         description: Al4X + "\n\n *•💵 ʟᴏɢᴏ ᴍᴀᴋᴇʀ ᴛᴏᴏʟs ᴡɪᴛʜ ᴜɴʟɪᴍɪᴛᴇᴅ ᴀᴄᴄᴇss..*\n       _Click the button bellow._\n*╰───────────────────────────╯*\n",
         sections: sections,
         listType: 1
                       }
        
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }
        
    await message.client.sendMessage(message.jid, button , MessageType.listMessage, { contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "꧁༺❤ ʟᴏɢᴏ ᴍᴀᴋᴇʀ ❤༻꧂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

}));
AlphaX.addCommand({pattern: 'logodevil ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/devil.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/devil.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logosci ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/sci.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/sci.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoleaf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logomatrix ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logo2gradient ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logoballoon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logosnow ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logo2gold ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logo5graf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logo3fire ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logo2space ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION})
}));
AlphaX.addCommand({pattern: 'logo3space ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logogold ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logo3space ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logoangel ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logo2pink ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logoabear ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.CAPTION, mimetype: Mimetype.gif })
}));
AlphaX.addCommand({pattern: 'logo6neon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
AlphaX.addCommand({pattern: 'logoheart ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.CAPTION, mimetype: Mimetype.gif })
}));
AlphaX.addCommand({pattern: 'logo4graf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logopuppy ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.CAPTION, mimetype: Mimetype.gif })
}));
AlphaX.addCommand({pattern: 'logoroad ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logosad ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logo3pubg ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var img = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
}));
AlphaX.addCommand({pattern: 'logopubg ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var vid = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.CAPTION, mimetype: Mimetype.mp4 })
}));
AlphaX.addCommand({pattern: 'logo2pubg ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var vid = await AlphaXnpm.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: Config.CAPTION, mimetype: Mimetype.mp4 })
}));
AlphaX.addCommand({pattern: 'logo2devil ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/devil2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/devil2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logohub ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    AlphaXapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/hub.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/hub.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoretro ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    AlphaXapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/retr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/retr.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo3graf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t3gr.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t3gr.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoberry ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/bry.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/bry.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo4sand ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t4snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t4snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo3sand ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t3snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t3snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2sand ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t2snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t2snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logosand ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/snd.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/snd.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2fire ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/fh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/fh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logopink ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tpink.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tpink.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2blood ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/cbld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/cbld.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoblood ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/bld.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/bld.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2light ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t2lgh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t2lgh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logorobo ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/robo.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/robo.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo3d ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    AlphaXapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/3dl.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/3dl.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoart ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tart.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tart.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logowcolor ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/wcolor.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/wcolor.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logomagma ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/magma.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/magma.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logometal ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/metal.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/metal.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logopaper ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/papert.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/papert.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logobglass ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/glass.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/glass.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo5neon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t5neon.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t5neon.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logogradient ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tgrone.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tgrone.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2harry ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/hp2n.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/hp2n.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logostone ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/stone.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/stone.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logobear ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/bear.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/bear.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logowolf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    AlphaXapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/wolf.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/wolf.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoneon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/neon.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/neon.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2neon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/neon2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/neon2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logolight ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/li.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/li.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logojoker ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/joker.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/joker.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoninja ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    AlphaXapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/ninja.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/ninja.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoglitter ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tt.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tt.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logobokeh ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/bkh.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/bkh.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logomarvel ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/marvel.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/marvel.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2marvel ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/mar2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/mar2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoavengers ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/aven.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/aven.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2glitch ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t2gl.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t2gl.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoglitch ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tt2.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tt2.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logograf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/ttgra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/ttgra.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo2graf ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t2gra.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t2gra.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logolion ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/lion.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/lion.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo3neon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/neon3.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/neon3.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoice ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/ice.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/ice.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logospace ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    AlphaXapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/space.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/space.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logosmoke ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/smoke.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/smoke.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoglow ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/media/glowttp.png', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/glowttp.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
    })
}));
AlphaX.addCommand({pattern: 'logofire ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/tfire.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/tfire.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logoharry ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/hp.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/hp.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logo4neon ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/t4n.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/t4n.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logocemetery ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/cmth.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/cmth.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
AlphaX.addCommand({pattern: 'logocup ?(.*)', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
    AlphaXapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/media/cup.png', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/media/cup.png'), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAPTION })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
