# marie.mon — 仕事を、つなぐ。

まりえもんに集まる依頼と講座生をつなぐ、案件マッチング・営業運用の提案LPです。

## ローカル起動

依存パッケージのインストールは不要です。Python 3で配信できます。

```sh
cd /workspace/marie.mon
python3 -m http.server 3000 --bind 0.0.0.0
```

`index.html`、`style.css`、`script.js` がページ本体です。相談メモはブラウザー上で作成し、テキストファイルとして保存します。外部サービスへの送信やフォーム受付機能はありません。制度・役割・報酬は今後相談して決める前提です。

## 見た目を確認する

### PC版

![PC版のLP](previews/desktop.png)

### スマートフォン版

![スマートフォン版のLP](previews/mobile.png)

## 自分のパソコンで開く

GitHubの「Code」→「Download ZIP」でファイル一式をダウンロードし、ZIPを解凍して `index.html` をChromeやSafariで開いてください。サーバーを起動しなくても、表示と相談メモの保存が使えます。

リポジトリを非公開のまま使えます。GitHub PagesによるWeb公開は設定していません。
