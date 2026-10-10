window.DEMO_DATA = {
  "referenceDate": "2026-10-10",
  "projects": [
    {"id":"DEMO-001","client":"架空クライアントA","title":"社内研修資料の図解化","status":"募集前","pattern":"依頼内容を整理中","deliverable":"研修スライドの図解5点","skills":"情報整理・図解制作","budget":50000,"deadline":"2026-11-06","recruitDeadline":"2026-10-16","nextCheck":"2026-10-12","nextAction":"予算・成果物の範囲をクライアントに確認","assignee":"未定","hours":"週5時間程度","contract":"未締結","delivered":"","accepted":"","invoice":"未発行","paymentDue":"","clientPaid":"","talentPaid":"","note":"条件が確定するまで募集を開始しない。"},
    {"id":"DEMO-002","client":"架空クライアントB","title":"イベント告知用の図解制作","status":"募集中","pattern":"応募なし","deliverable":"告知用図解2点","skills":"図解・SNS画像制作","budget":30000,"deadline":"2026-10-30","recruitDeadline":"2026-10-12","nextCheck":"2026-10-10","nextAction":"空き状況を確認し、候補者に個別紹介","assignee":"未定","hours":"週3時間程度","contract":"未締結","delivered":"","accepted":"","invoice":"未発行","paymentDue":"","clientPaid":"","talentPaid":"","note":"個別紹介でも本人の意向と稼働状況を確認する。"},
    {"id":"DEMO-003","client":"架空クライアントC","title":"サービス紹介スライドの可視化","status":"募集中","pattern":"応募3名・選定中","deliverable":"サービス紹介スライド8枚","skills":"構成整理・スライド制作","budget":60000,"deadline":"2026-11-05","recruitDeadline":"2026-10-14","nextCheck":"2026-10-11","nextAction":"3名の応募内容・作品・稼働時間を比較","assignee":"未定","hours":"週5時間程度","contract":"未締結","delivered":"","accepted":"","invoice":"未発行","paymentDue":"","clientPaid":"","talentPaid":"","note":"応募数だけで判断せず、案件条件との相性を確認する。"},
    {"id":"DEMO-004","client":"架空クライアントD","title":"ワークショップ記録の可視化","status":"募集中","pattern":"推薦済み・面談調整中","deliverable":"記録の図解3点","skills":"要点整理・記録の可視化","budget":45000,"deadline":"2026-11-10","recruitDeadline":"2026-10-09","nextCheck":"2026-10-12","nextAction":"クライアントと候補者の面談日程を確定","assignee":"候補：デモ人材A","hours":"週4時間程度","contract":"未締結","delivered":"","accepted":"","invoice":"未発行","paymentDue":"","clientPaid":"","talentPaid":"","note":"募集は締切済み。推薦していても契約はまだ確定していない。"},
    {"id":"DEMO-005","client":"架空クライアントE","title":"業務フロー図の制作","status":"作業中","pattern":"初稿制作中","deliverable":"業務フロー図4点","skills":"業務整理・フロー図制作","budget":40000,"deadline":"2026-10-12","recruitDeadline":"2026-09-29","nextCheck":"2026-10-09","nextAction":"初稿の進捗確認・納期を再確認","assignee":"デモ人材B","hours":"週6時間程度","contract":"締結済み","delivered":"","accepted":"","invoice":"未発行","paymentDue":"2026-11-10","clientPaid":"","talentPaid":"","note":"次回確認日を過ぎている例。未対応なら赤色で表示。"},
    {"id":"DEMO-006","client":"架空クライアントF","title":"調査結果のインフォグラフィック","status":"納品確認中","pattern":"納品済み・検収待ち","deliverable":"インフォグラフィック3点","skills":"データ整理・図解制作","budget":55000,"deadline":"2026-10-08","recruitDeadline":"2026-09-25","nextCheck":"2026-10-13","nextAction":"クライアントに検収・修正の有無を確認","assignee":"デモ人材C","hours":"週5時間程度","contract":"締結済み","delivered":"2026-10-08","accepted":"","invoice":"未発行","paymentDue":"2026-11-05","clientPaid":"","talentPaid":"","note":"納品済みでも検収と支払いが終わるまではグレーアウトしない。"},
    {"id":"DEMO-007","client":"架空クライアントG","title":"講座案内リーフレットの図解","status":"完了","pattern":"検収・入金・人材への支払い完了","deliverable":"リーフレット用図解2点","skills":"図解・レイアウト","budget":35000,"deadline":"2026-09-20","recruitDeadline":"2026-09-05","nextCheck":"","nextAction":"対応完了","assignee":"デモ人材D","hours":"稼働終了","contract":"締結済み","delivered":"2026-09-19","accepted":"2026-09-22","invoice":"発行済み","paymentDue":"2026-10-05","clientPaid":"2026-10-02","talentPaid":"2026-10-05","note":"納品・検収・クライアント入金・人材への支払いが揃った完了例。"}
  ],
  "applications": [
    {"id":"AP-001","project":"DEMO-003","talent":"デモ人材A","reason":"構成整理の経験を活かしたい","experience":"スライド制作の経験あり","hours":5,"start":"2026-10-15","status":"選定中","interview":"","result":"未確定"},
    {"id":"AP-002","project":"DEMO-003","talent":"デモ人材B","reason":"図解の仕事に挑戦したい","experience":"講座の課題で図解を制作","hours":3,"start":"2026-10-18","status":"選定中","interview":"","result":"未確定"},
    {"id":"AP-003","project":"DEMO-003","talent":"デモ人材C","reason":"サービスの魅力を整理したい","experience":"参考作品あり","hours":6,"start":"2026-10-15","status":"選定中","interview":"","result":"未確定"},
    {"id":"AP-004","project":"DEMO-004","talent":"デモ人材A","reason":"記録の可視化が得意","experience":"ワークショップ記録の経験あり","hours":4,"start":"2026-10-20","status":"推薦済み","interview":"調整中","result":"未確定"},
    {"id":"AP-005","project":"DEMO-005","talent":"デモ人材B","reason":"業務フロー整理に関心がある","experience":"参考作品確認済み","hours":6,"start":"2026-10-01","status":"契約・稼働中","interview":"2026-09-28","result":"合意"},
    {"id":"AP-006","project":"DEMO-006","talent":"デモ人材C","reason":"データの図解を担当したい","experience":"参考作品確認済み","hours":5,"start":"2026-09-28","status":"納品確認中","interview":"2026-09-26","result":"合意"},
    {"id":"AP-007","project":"DEMO-007","talent":"デモ人材D","reason":"リーフレット制作を希望","experience":"参考作品確認済み","hours":4,"start":"2026-09-10","status":"完了","interview":"2026-09-07","result":"合意"}
  ],
  "talents": [
    {"name":"デモ人材A","skills":"構成整理・記録の可視化","hours":5,"available":"2026-10-15","response":"2026-10-08","preference":"スライド・ワークショップ記録","note":"他の仕事を含めた空き時間。紹介前に再確認。"},
    {"name":"デモ人材B","skills":"図解・業務フロー","hours":3,"available":"2026-10-18","response":"2026-10-09","preference":"図解制作","note":"現在の作業終了後の予定。"},
    {"name":"デモ人材C","skills":"データ整理・図解","hours":6,"available":"2026-10-15","response":"2026-09-15","preference":"データの可視化","note":"回答が古いため再確認が必要。"},
    {"name":"デモ人材D","skills":"図解・レイアウト","hours":4,"available":"2026-10-12","response":"2026-10-09","preference":"SNS画像・リーフレット","note":"応募なし案件の個別紹介候補。対応可否は未確認。"}
  ]
}
;
