exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${PROF}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: _PROF_
║├≽️🛡️ *DESIGNER*: _PROF_
║├≽️🛡️ *YOUTUBE*: _PROFESOR ACC_
╠════════════════════
╠════════════════════
║  *${PROF}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${PROF}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY PROF-ACC*
╚════════════════════`
}
