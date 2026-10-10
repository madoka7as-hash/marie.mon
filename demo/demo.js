const seed = window.DEMO_DATA;
let data = structuredClone(seed);
let filter = 'すべて';
let selectedId = null;
let activeTab = 'brief';
const dialog = document.querySelector('#detail');
const escapeText = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const dayDifference = date => (Date.parse(date) - Date.parse(seed.referenceDate)) / 86400000;
const isComplete = p => Boolean(p.delivered && p.accepted && p.clientPaid && p.talentPaid);
const field = (label,name,value='',type='text',required=false) => `<label class="field"><span>${label}${required?'（必須）':''}</span><input type="${type}" name="${name}" value="${escapeText(value)}" ${required?'required':''}></label>`;
const textArea = (label,name,value='') => `<label class="field"><span>${label}</span><textarea name="${name}" rows="3">${escapeText(value)}</textarea></label>`;
function render(){
  const statuses=['募集前','募集中','作業中','納品確認中','完了'];
  document.querySelector('#summary').innerHTML=statuses.map(status=>`<div><span>${status==='完了'?'支払いまで完了':status}</span><strong>${data.projects.filter(p=>p.status===status).length}<span> 件</span></strong></div>`).join('');
  const projects=data.projects.filter(p=>filter==='すべて'||p.status===filter);
  document.querySelector('#projects').innerHTML=projects.map(p=>{
    const count=data.applications.filter(a=>a.project===p.id).length;
    const complete=isComplete(p); const days=p.nextCheck?dayDifference(p.nextCheck):Infinity;
    const tone=complete?'complete':days<0?'urgent':days<=3?'soon':'';
    return `<tr class="${tone}" data-project="${p.id}"><td data-label="案件"><strong>${escapeText(p.title)}</strong><small>${p.id} / ${p.client}</small></td><td data-label="状況"><span class="badge">${p.status==='完了'?'支払いまで完了':p.status}</span><small>${escapeText(p.pattern)}</small></td><td data-label="応募">${count} 名</td><td data-label="担当者">${escapeText(p.assignee)}</td><td data-label="納期">${p.deadline}</td><td data-label="次回確認">${p.nextCheck||'—'}<small>${escapeText(p.nextAction)}</small></td><td data-label="書式"><button class="row-button" data-open="${p.id}" aria-label="${escapeText(p.title)}の書式を確認">書式を確認 ↗</button></td></tr>`;
  }).join('') || '<tr><td colspan="7">該当する案件はありません。</td></tr>';
  document.querySelector('#result-count').textContent=`${projects.length}件を表示 / 全${data.projects.length}件`;
  document.querySelector('#talents').innerHTML=data.talents.map(t=>`<tr><td>${escapeText(t.name)}</td><td>${escapeText(t.skills)}<small>${escapeText(t.preference)}</small></td><td>週 ${t.hours} 時間</td><td>${t.available}</td><td>${t.response}</td><td>${dayDifference(t.response)<-14?'再確認が必要':'紹介前に対応可否を確認'}</td></tr>`).join('');
}
const details = pairs => `<dl class="details">${pairs.map(([name,value])=>`<div><dt>${name}</dt><dd>${escapeText(value||'未定・要確認')}</dd></div>`).join('')}</dl>`;
function renderDetail(){
 const p=data.projects.find(p=>p.id===selectedId);if(!p)return;
 document.querySelector('#detail-id').textContent=p.id+' / '+p.client;
 document.querySelector('#detail-title').textContent=p.title;
 document.querySelector('#feedback').textContent='';
 document.querySelectorAll('[data-tab]').forEach(b=>{b.classList.toggle('active',b.dataset.tab===activeTab);b.setAttribute('aria-pressed',b.dataset.tab===activeTab);});
 let html='';
 if(activeTab==='brief') html=`<p class="detail-notice">① クライアントへの条件確認書の記入例。未確定項目を確認してから募集します。</p>${details([['依頼する仕事・成果物',p.deliverable],['必要なスキル',p.skills],['想定予算（架空）',p.budget.toLocaleString()+'円 / 税・費用の扱いは要確認'],['納期',p.deadline],['想定稼働',p.hours],['募集締切',p.recruitDeadline],['面談・選定方法','営業担当が推薦・面談調整。決定方法は相談。'],['修正範囲・検収条件','要相談・募集前に確認'],['契約主体・支払条件','要相談・契約前に確認'],['担当者の役割',p.note]])}`;
 if(activeTab==='apply'){
 const open=p.status==='募集中'&&dayDifference(p.recruitDeadline)>=0;
 html=`<p class="detail-notice">② Googleフォームにする場合の質問・表示案です。${open?'デモ応募を追加すると、③の応募者一覧に反映されます。':'この案件は現在応募を受け付けていない想定です。質問案のみ表示します。'}</p>${details([['案件条件',p.deliverable+' / '+p.skills],['想定予算・納期',p.budget.toLocaleString()+'円（架空・条件要確認） / '+p.deadline],['想定稼働・募集締切',p.hours+' / '+p.recruitDeadline]])}<form id="apply-form"><div class="detail-grid">${field('氏名（デモ名で入力）','talent','','text',true)}${field('連絡先（架空の例）','contact','','email',true)}${field('開始可能日','start','','date',true)}${field('週あたり対応可能時間','hours','','number',true)}</div>${textArea('応募理由','reason')}${textArea('経験・参考作品の説明','experience')}<label class="checkbox"><input type="checkbox" required>案件条件を確認しました。応募だけで契約が決まるものではありません。</label><div class="form-footer"><button class="primary" ${open?'':'disabled'}>デモ応募を追加する</button></div></form><p class="muted">実名・連絡先などの個人情報は入力しないでください。外部送信・永続保存は行いません。</p>`;
 }
 if(activeTab==='applicants'){
 const applicants=data.applications.filter(a=>a.project===p.id);
 html='<p class="detail-notice">③ 応募者の比較・選定用。推薦や面談結果は営業担当が記録する想定です。</p>'+(applicants.length?applicants.map(a=>`<article class="applicant"><h3>${escapeText(a.talent)}</h3><p>応募理由：${escapeText(a.reason)}</p><p>経験：${escapeText(a.experience)}</p><p>週${a.hours}時間 / 開始可能日 ${a.start}</p><p>選定状況：${a.status} / 面談：${a.interview||'未調整'} / 結果：${a.result}</p></article>`).join(''):'<div class="empty">応募者はまだいません。空き状況を確認して、個別紹介を検討する例です。</div>');
 }
 if(activeTab==='progress') html=`<p class="detail-notice">④ 基準日から次回確認日まで3日以内は黄色、確認日を過ぎると赤色。変更後に一覧へ反映されます。通知は送信しません。</p><form id="progress-form"><div class="detail-grid"><label class="field"><span>現在の状況</span><select name="status">${['募集前','募集中','作業中','納品確認中'].map(s=>`<option ${p.status===s?'selected':''}>${s}</option>`).join('')}${isComplete(p)?'<option selected>完了</option>':''}</select></label>${field('担当者','assignee',p.assignee)}${field('納期','deadline',p.deadline,'date',true)}${field('次回確認日','nextCheck',p.nextCheck,'date')}</div>${textArea('次の対応','nextAction',p.nextAction)}<div class="form-footer"><button class="primary">デモの進捗を更新する</button></div></form><p class="muted">完了は⑤の条件が揃ったときだけ設定できます。色は納期そのものではなく、次回確認日を基準にしています。</p>`;
 if(activeTab==='payment') html=`<p class="detail-notice">⑤ 納品書・請求書の元になる確認書。下記の4項目がすべて完了すると、対象行がグレーになります。ここで操作しても実際の請求・送金は行われません。</p>${details([['成果物',p.deliverable],['案件予算（架空）',p.budget.toLocaleString()+'円'],['請求書',p.invoice],['支払期日',p.paymentDue],['人材報酬・営業報酬','未設定。案件予算とは別に相談して決める。']])}<form id="payment-form"><fieldset><legend>終了の確認項目</legend>${[['delivered','納品済み'],['accepted','検収済み（修正対応を含む）'],['clientPaid','クライアントからの入金済み'],['talentPaid','人材への支払い済み']].map(([key,label])=>`<label class="checkbox"><input type="checkbox" name="${key}" ${p[key]?'checked':''}>${label}${p[key]?' / '+p[key]:''}</label>`).join('')}</fieldset><button class="primary">確認状況を更新する</button></form><p class="muted">チェック日にはデモの基準日を使用します。未完了項目がある案件は終了扱いにしません。</p>`;
 if(activeTab==='availability')html=`<p class="detail-notice">⑥ Googleフォームにする場合の空き状況確認案。他の案件名は聞かず、残っている対応可能時間を確認します。</p><form id="availability-form"><div class="detail-grid"><label class="field"><span>デモ人材</span><select name="name">${data.talents.map(t=>`<option>${escapeText(t.name)}</option>`).join('')}</select></label>${field('週あたりの空き時間','hours','','number',true)}${field('開始できる日','available','','date',true)}${field('確認日（デモ基準日）','response',seed.referenceDate,'date',true)}</div>${textArea('希望する案件・確認したいこと','preference')}<div class="form-footer"><button class="primary">デモの空き状況を更新する</button></div></form>`;
 document.querySelector('#detail-content').innerHTML=html;
 document.querySelectorAll('input[type="number"]').forEach(el=>{el.min='0';el.max='168';});
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button);});render();}));
document.querySelector('#projects').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(!b)return;selectedId=b.dataset.open;activeTab='brief';renderDetail();dialog.showModal();});
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{activeTab=b.dataset.tab;renderDetail();}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());
document.querySelector('#reset').addEventListener('click',()=>{data=structuredClone(seed);render();});
document.querySelector('#detail-content').addEventListener('submit',e=>{
 e.preventDefault();const form=e.target;const values=Object.fromEntries(new FormData(form));const p=data.projects.find(p=>p.id===selectedId);let message='デモ内の表示を更新しました。外部への送信はしていません。';
 if(form.id==='apply-form'){
 if(p.status!=='募集中'||dayDifference(p.recruitDeadline)<0)return;
 data.applications.push({id:'DEMO-AP-'+(data.applications.length+1),project:p.id,talent:values.talent,reason:values.reason,experience:values.experience,hours:Number(values.hours),start:values.start,status:'応募受付',interview:'',result:'未確定'});p.pattern='応募あり・選定前';activeTab='applicants';message='デモ応募を追加しました。応募者一覧に反映しています。';
 }
 if(form.id==='progress-form'){
 if(isComplete(p)&&values.status!=='完了'){document.querySelector('#feedback').textContent='完了済み案件の再開は、⑤で未完了の項目を確認してから行ってください。';return;}
 Object.assign(p,values);p.pattern=p.status==='完了'?'検収・入金・人材への支払い完了':'進捗更新済み';
 }
 if(form.id==='payment-form'){
 if(values.accepted&&!values.delivered){document.querySelector('#feedback').textContent='検収済みにする前に、納品済みを確認してください。';return;}
 const wasComplete=isComplete(p);
 for(const key of ['delivered','accepted','clientPaid','talentPaid'])p[key]=values[key]?(p[key]||seed.referenceDate):'';
 if(isComplete(p)){p.status='完了';p.pattern='検収・入金・人材への支払い完了';p.nextCheck='';p.nextAction='対応完了';message='すべての終了条件が揃いました。対象案件をグレーアウトしました。';}
 else if(wasComplete){p.status=p.delivered?'納品確認中':'作業中';p.pattern='終了条件を再確認';p.nextCheck=seed.referenceDate;p.nextAction='未完了項目を確認';}
 }
 if(form.id==='availability-form'){const t=data.talents.find(t=>t.name===values.name);Object.assign(t,values,{hours:Number(values.hours)});}
 render();renderDetail();document.querySelector('#feedback').textContent=message;
});
render();
