const AlphaX = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('system_stats');
let WType = Config.WORKTYPE == 'public' ? false : true

const HELP_MSG = '========== *🆘 General Help 🆘* ==========\n\n🔹 ```' + Config.AM_KEY + ':``` _Checks if the bot is running._\n\n🔹 ```' + Config.CL_KEY + ':``` _Shows the complete list of commands._\n🔹 ```.setvar:``` _It settings config without entering Heroku._\n\n========== *End General Help* ========== \n\n'

// ==================== COMMAND DESC =======================
var DESC = ''
if (Config.LANG == 'EN') DESC = 'Gives information about using the bot from the Help menu.'
	if (Config.LANG == 'SI') DESC = 'උදව් මෙනුවෙන් බොට් භාවිතා කිරීම පිළිබඳ තොරතුරු ලබා දෙයි.'
		if (Config.LANG == 'KN') DESC = 'ಸಹಾಯ ಮೆನುವಿನಿಂದ ಬೋಟ್ ಅನ್ನು ಬಳಸುವ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ನೀಡುತ್ತದೆ.'
			if (Config.LANG == 'ID') DESC = 'Memberikan informasi tentang penggunaan bot dari menu Bantuan.'
				if (Config.LANG == 'AZ') DESC = 'Kömək menyusundan botdan istifadə haqqında məlumat verir.'
					if (Config.LANG == 'ML') DESC = 'സഹായ മെനുവിൽ നിന്ന് ബോട്ട് ഉപയോഗിക്കുന്നതിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ നൽകുന്നു.'
						if (Config.LANG == 'PT') DESC = 'Fornece informações sobre como usar o bot no menu Ajuda.'
							if (Config.LANG == 'RU') DESC = 'Предоставляет информацию об использовании бота из меню «Справка».'
								if (Config.LANG == 'TR') DESC = 'Yardım menüsünden bot kullanımı hakkında bilgi verir.'
// ==================== END COMMAND DESC ====================

// ==================== WORK TYPE ===========================
var WT = ''
if (Config.LANG == 'EN') WT = 'Making your bot public will make the commands public. After it is made public, the user can only use personal and admin commands. User cannot use commands other than this.\n To make your bot public, type *.setvar WORK_TYPE:public*'
	if (Config.LANG == 'SI') WT = 'ඔබගේ bot පොදු කිරීම විධානයන් පොදු කරයි. එය ප්‍රසිද්ධියට පත් කිරීමෙන් පසුව, පරිශීලකයාට භාවිතා කළ හැක්කේ පුද්ගලික සහ පරිපාලක විධාන පමණි. පරිශීලකයාට මෙය හැර වෙනත් විධාන භාවිතා කළ නොහැක.\nඔබේ බොට් ප්‍රසිද්ධ කිරීමට, *.setvar WORK_TYPE:public* ටයිප් කරන්න'
		if (Config.LANG == 'KN') WT = 'ನಿಮ್ಮ ಬೋಟ್ ಅನ್ನು ಸಾರ್ವಜನಿಕಗೊಳಿಸುವುದು ಆಜ್ಞೆಗಳನ್ನು ಸಾರ್ವಜನಿಕಗೊಳಿಸುತ್ತದೆ. ಇದನ್ನು ಸಾರ್ವಜನಿಕಗೊಳಿಸಿದ ನಂತರ, ಬಳಕೆದಾರರು ವೈಯಕ್ತಿಕ ಮತ್ತು ನಿರ್ವಾಹಕ ಆಜ್ಞೆಗಳನ್ನು ಮಾತ್ರ ಬಳಸಬಹುದು. ಬಳಕೆದಾರರು ಇದನ್ನು ಹೊರತುಪಡಿಸಿ ಬೇರೆ ಆಜ್ಞೆಗಳನ್ನು ಬಳಸಲಾಗುವುದಿಲ್ಲ.\n ನಿಮ್ಮ ಬೋಟ್ ಅನ್ನು ಸಾರ್ವಜನಿಕಗೊಳಿಸಲು, *.setvar WORK_TYPE:public* ಎಂದು ಟೈಪ್ ಮಾಡಿ'
			if (Config.LANG == 'ID') WT = 'Membuat bot Anda publik akan membuat perintah publik. Setelah dipublikasikan, pengguna hanya dapat menggunakan perintah pribadi dan admin. Pengguna tidak dapat menggunakan perintah selain ini.\n Untuk menjadikan bot Anda publik, ketik *.setvar WORK_TYPE:public*'
				if (Config.LANG == 'AZ') WT = 'Botunuzu ictimai etmək əmrləri ictimai edəcək. İctimaiyyətə təqdim edildikdən sonra istifadəçi yalnız şəxsi və admin əmrlərindən istifadə edə bilər. İstifadəçi bundan başqa əmrlərdən istifadə edə bilməz.\n Botunuzu ictimai etmək üçün *.setvar WORK_TYPE:public* yazın.'
					if (Config.LANG == 'ML') WT = 'നിങ്ങളുടെ ബോട്ട് പബ്ലിക് ആക്കുന്നത് കമാൻഡുകൾ പൊതുവായതാക്കും. ഇത് പരസ്യമാക്കിയ ശേഷം, ഉപയോക്താവിന് വ്യക്തിഗത, അഡ്‌മിൻ കമാൻഡുകൾ മാത്രമേ ഉപയോഗിക്കാൻ കഴിയൂ. ഇതല്ലാതെയുള്ള കമാൻഡുകൾ ഉപയോക്താവിന് ഉപയോഗിക്കാൻ കഴിയില്ല.\n നിങ്ങളുടെ ബോട്ട് പൊതുവായതാക്കാൻ, *.setvar WORK_TYPE:public* എന്ന് ടൈപ്പ് ചെയ്യുക'
						if (Config.LANG == 'PT') WT = 'Tornar seu bot público tornará os comandos públicos. Depois de tornado público, o usuário só pode usar comandos pessoais e administrativos. O usuário não pode usar comandos diferentes deste. \ N Para tornar seu bot público, digite * .setvar WORK_TYPE: public *'
							if (Config.LANG == 'RU') WT = 'Сделав вашего бота общедоступным, вы сделаете команды общедоступными. После того, как он станет общедоступным, пользователь сможет использовать только личные и административные команды. Пользователь не может использовать другие команды. \ N Чтобы сделать вашего бота общедоступным, введите * .setvar WORK_TYPE: public *'
								if (Config.LANG == 'TR') WT = 'Botunuzu herkese açık hale getirmek, komutları herkese açık hale getirecektir. Herkese açık hale getirildikten sonra, kullanıcı yalnızca kişisel ve yönetici komutlarını kullanabilir. Kullanıcı bunun dışındaki komutları kullanamaz.\n Botunuzu herkese açık hale getirmek için *.setvar WORK_TYPE:public* yazın.'
// ==================== END WORK TYPE ========================

// ==================== BLOCK CHAT ===========================
var BC = ''
if (Config.LANG == 'EN') BC = 'Closes BlockChat bot to group, person or multiple chats you specify.\n To use it, first go to chat and type *.jid* Then copy to incoming code. (Except @g.us or @whatsapp.net!)\nThen use this command *.setvar BLOCK_CHAT:id && id1,id2..*'
	if (Config.LANG == 'SI') BC = 'BlockChat bot ඔබ සඳහන් කරන කණ්ඩායම්, පුද්ගලයා හෝ කතාබස් කිහිපයකට වසයි.\n එය භාවිතා කිරීමට, පළමුව කතාබස් වෙත ගොස් *.jid* ටයිප් කරන්න, ඉන්පසු එන කේතයට පිටපත් කරන්න. (@g.us හෝ @whatsapp.net හැර!)\nඉන්පසු මෙම විධානය භාවිතා කරන්න *.setvar BLOCK_CHAT:id && id1,id2..*'
		if (Config.LANG == 'KN') BC = 'ನೀವು ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಗುಂಪು, ವ್ಯಕ್ತಿ ಅಥವಾ ಬಹು ಚಾಟ್‌ಗಳಿಗೆ BlockChat ಬಾಟ್ ಅನ್ನು ಮುಚ್ಚುತ್ತದೆ.\n ಇದನ್ನು ಬಳಸಲು, ಮೊದಲು ಚಾಟ್‌ಗೆ ಹೋಗಿ ಮತ್ತು *.jid* ಟೈಪ್ ಮಾಡಿ ನಂತರ ಒಳಬರುವ ಕೋಡ್‌ಗೆ ನಕಲಿಸಿ. (@g.us ಅಥವಾ @whatsapp.net ಹೊರತುಪಡಿಸಿ!)\nನಂತರ ಈ ಆಜ್ಞೆಯನ್ನು ಬಳಸಿ *.setvar BLOCK_CHAT:id && id1,id2..*'
			if (Config.LANG == 'ID') BC = 'Menutup bot BlockChat ke grup, orang, atau beberapa obrolan yang Anda tentukan.\n Untuk menggunakannya, buka obrolan terlebih dahulu dan ketik *.jid* Lalu salin ke kode yang masuk. (Kecuali @g.us atau @whatsapp.net!)\nKemudian gunakan perintah ini *.setvar BLOCK_CHAT:id && id1,id2..*'
				if (Config.LANG == 'AZ') BC = 'BlockChat botunu qeyd etdiyiniz qrupa, şəxsə və ya birdən çox söhbətə bağlayır.\n Onu istifadə etmək üçün əvvəlcə söhbətə gedin və *.jid* yazın, sonra gələn koda kopyalayın. (@g.us və ya @whatsapp.net istisna olmaqla!)\nSonra bu əmrdən istifadə edin *.setvar BLOCK_CHAT:id && id1,id2..*'
					if (Config.LANG == 'ML') BC = 'നിങ്ങൾ വ്യക്തമാക്കുന്ന ഗ്രൂപ്പിലേക്കോ വ്യക്തികളിലേക്കോ ഒന്നിലധികം ചാറ്റുകളിലേക്കോ BlockChat ബോട്ട് അടയ്‌ക്കുന്നു.\n ഇത് ഉപയോഗിക്കുന്നതിന്, ആദ്യം ചാറ്റിലേക്ക് പോയി *.jid* എന്ന് ടൈപ്പ് ചെയ്യുക, തുടർന്ന് ഇൻകമിംഗ് കോഡിലേക്ക് പകർത്തുക. (@g.us അല്ലെങ്കിൽ @whatsapp.net ഒഴികെ!)\nപിന്നെ ഈ കമാൻഡ് ഉപയോഗിക്കുക *.setvar BLOCK_CHAT:id && id1,id2..*'
						if (Config.LANG == 'PT') BC = 'Fecha o bot BlockChat para um grupo, pessoa ou vários chats que você especificar. \ N Para usá-lo, primeiro vá para o chat e digite * .jid * Em seguida, copie para o código de entrada. (Exceto @ g.us ou @ whatsapp.net!) \ NEntão use este comando * .setvar BLOCK_CHAT: id && id1, id2 .. *'
							if (Config.LANG == 'RU') BC = 'Закрывает бот BlockChat для групповых, личных или нескольких указанных вами чатов. \ N Чтобы использовать его, сначала войдите в чат и введите * .jid * Затем скопируйте во входящий код. (Кроме @ g.us или @ whatsapp.net!) \ NЗатем используйте эту команду * .setvar BLOCK_CHAT: id && id1, id2 .. *'
								if (Config.LANG == 'TR') BC = 'BlockChat botunu belirlediğiniz grup, kişi veya çoklu sohbetlere kapatır.\n Bunu kullanmak için önce sohbete gidin ve *.jid* yazın, ardından gelen koda kopyalayın. (@g.us veya @whatsapp.net! hariç)\nArdından bu komutu kullanın *.setvar BLOCK_CHAT:id && id1,id2..*'
// ==================== END BLOCK CHAT ========================

// ==================== SUDO ==================================
var SUDO = ''
if (Config.LANG == 'EN') SUDO = 'SUDO, Shares your bot to the user you choose with all its powers.If you put ,0 at the end of the number, the user can also use it in the group.\nTo use, type *.setvar SUDO:90xxxx && 90xx,90xxx [with county code, (❌ +90xx • ✅ 90xx)]*'
	if (Config.LANG == 'SI') SUDO = 'SUDO, ඔබ තෝරා ගන්නා පරිශීලකයාට එහි සියලු බලතල සමඟ ඔබේ බොට් බෙදා දෙයි. ඔබ අංකයේ අවසානයේ ,0 තැබුවහොත්, පරිශීලකයාට එය සමූහය තුළද භාවිත කළ හැක.\nභාවිතා කිරීමට, *.setvar SUDO:90xxxx && 90xx ලෙස ටයිප් කරන්න. ,90xxx [ප්‍රාන්ත කේතය සමඟ, (❌ +90xx • ✅ 90xx)]*'
		if (Config.LANG == 'KN') SUDO = 'SUDO, ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಬಳಕೆದಾರರಿಗೆ ನಿಮ್ಮ ಬೋಟ್ ಅನ್ನು ಅದರ ಎಲ್ಲಾ ಅಧಿಕಾರಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ. ನೀವು ಸಂಖ್ಯೆಯ ಕೊನೆಯಲ್ಲಿ ,0 ಅನ್ನು ಹಾಕಿದರೆ, ಬಳಕೆದಾರರು ಅದನ್ನು ಗುಂಪಿನಲ್ಲಿಯೂ ಬಳಸಬಹುದು.\nಬಳಸಲು, ಟೈಪ್ ಮಾಡಿ *.setvar SUDO:90xxxx && 90xx ,90xxx [ಕೌಂಟಿ ಕೋಡ್‌ನೊಂದಿಗೆ, (❌ +90xx • ✅ 90xx)]*'
			if (Config.LANG == 'ID') SUDO = 'SUDO, Membagikan bot Anda kepada pengguna yang Anda pilih dengan semua kekuatannya.Jika Anda meletakkan ,0 di akhir angka, pengguna juga dapat menggunakannya dalam grup.\nUntuk menggunakannya, ketik *.setvar SUDO:90xxxx && 90xx ,90xxx [dengan kode wilayah, (❌ +90xx • 90xx)]*'
				if (Config.LANG == 'AZ') SUDO = 'SUDO, Botunuzu bütün səlahiyyətləri ilə seçdiyiniz istifadəçi ilə paylaşır. Əgər nömrənin sonuna ,0 qoysanız, istifadəçi onu qrupda da istifadə edə bilər.\nİstifadə etmək üçün *.setvar SUDO:90xxxx && 90xx yazın. ,90xxx [ilçe kodu ilə, (❌ +90xx • ✅ 90xx)]*'
					if (Config.LANG == 'ML') SUDO = 'SUDO, നിങ്ങളുടെ ബോട്ട് നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന ഉപയോക്താവുമായി അതിന്റെ എല്ലാ ശക്തികളോടും കൂടി പങ്കിടുന്നു. നമ്പറിന്റെ അവസാനം ,0 എന്ന് നൽകിയാൽ, ഉപയോക്താവിന് അത് ഗ്രൂപ്പിലും ഉപയോഗിക്കാം.\nഉപയോഗിക്കാൻ, *.setvar SUDO:90xxxx && 90xx എന്ന് ടൈപ്പ് ചെയ്യുക ,90xxx [കൗണ്ടി കോഡിനൊപ്പം, (❌ +90xx • ✅ 90xx)]*'
						if (Config.LANG == 'PT') SUDO = 'SUDO, compartilha seu bot com o usuário que você escolher com todos os seus poderes. Se você colocar 0 no final do número, o usuário também pode usá-lo no grupo. \ NPara usar, digite * .setvar SUDO: 90xxxx && 90xx , 90xxx [com código do condado, (❌ + 90xx • ✅ 90xx)] *'
							if (Config.LANG == 'RU') SUDO = 'SUDO, делится вашим ботом с пользователем, которого вы выбираете, со всеми его полномочиями. Если вы поставите 0 в конце числа, пользователь также может использовать его в группе. \ NЧтобы использовать, введите * .setvar SUDO: 90xxxx && 90xx , 90xxx [с кодом округа, (❌ + 90xx • ✅ 90xx)] *'
// ==================== END SUDO ==============================

    AlphaX.addCommand({pattern: 'help$', fromMe: WType, desc: DESC}, (async (message, match) => {

// send a list message!
const rows = [
 {title: '🎮 ᴡᴏʀᴋ ᴛʏᴘᴇ', description: '\n\n' + WT, rowId:"rowid1"},
 {title: '🎭 sᴜᴅᴏ ᴍᴏᴏᴅ', description: '\n\n' + SUDO, rowId:"rowid2"},
 {title: '🔕 ʙʟᴏᴄᴋ ᴄʜᴀᴛ', description: '\n\n' + BC, rowId:"rowid3"}

]

const sections = [{title: "📣 ♡ ʜᴇʟᴘ ᴍᴇɴᴜ ♡ 📣", rows: rows}]

const button = {
 buttonText: 'MORE HELP',
 description: HELP_MSG,
 sections: sections,
 listType: 1
}
            await message.client.sendMessage(
                message.jid,
                button,
                MessageType.listMessage
            );

	}));
