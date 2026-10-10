const dialog = document.querySelector('#consult-dialog');
document.querySelector('#consult-button').addEventListener('click', () => dialog.showModal());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#download-memo').addEventListener('click', () => {
  const memo = document.querySelector('#memo').value.trim();
  const content = `まりえもん｜案件マッチング・営業運用の相談メモ\n\n目指すこと：依頼はあるのに、受けられない状態を減らす。\n\n相談事項\n・どんな案件から始めるか\n・受付、選定、進行を誰が担うか\n・参加条件と品質確認\n・報酬、費用、契約\n\nメモ\n${memo || '（未記入）'}\n\n制度・役割・報酬は今後相談して決める前提です。\n`;
  const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href = url; link.download = 'marie-mon-consultation.txt'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#memo-status').textContent = '相談メモを保存しました。打ち合わせにご活用ください。';
});
