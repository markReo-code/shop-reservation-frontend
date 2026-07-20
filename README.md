# shop-reservation-frontend

Shop Reservation のフロントエンドリポジトリです。

Spring Boot で作成した予約管理 API から予約一覧を取得し、Vue.js の画面に表示することを目的とした学習用プロジェクトです。

## 関連リポジトリ

- `shop-reservation-api`
  - Java / Spring Boot / PostgreSQL
  - 予約データを扱うバックエンド API
- `shop-reservation-frontend`
  - Vue.js / TypeScript / Vite
  - 予約一覧を表示するフロントエンド
- `shop-reservation-infra`
  - AWS API Gateway などを管理する予定
  - 現時点では未着手

## 実装済みの内容

- Vue 3 + TypeScript + Vite によるフロントエンド構成
- Vue Router による画面表示
- `GET /api/reservations` の呼び出し
- API URL の環境変数化
- 予約一覧のテーブル表示
- ローディング、エラー、空状態の表示
- `Reservation` / `ReservationStatus` の型定義
- ステータスごとのバッジ表示
- PC 向けのテーブル表示
- スマートフォン向けの横スクロール対応
- `global.css` と Vue ファイル内の `scoped CSS` によるスタイル分離

## 使用技術

- Vue.js
- TypeScript
- Vite
- Vue Router
- ESLint
- oxlint
- Prettier

## セットアップ

依存関係をインストールします。

```sh
npm install
```

プロジェクトルートに `.env.local` を作成し、バックエンド API の URL を設定します。

```env
VITE_API_BASE_URL=http://localhost:8080
```

バックエンド API を起動した状態で、フロントエンドを起動します。

```sh
npm run dev
```

ブラウザで以下にアクセスします。

```txt
http://localhost:5173
```

## API 連携

現在は、ローカルで起動している Spring Boot API に直接アクセスしています。

```txt
GET http://localhost:8080/api/reservations
```

フロントエンドでは、以下の環境変数を使って API のベース URL を切り替えます。

```ts
import.meta.env.VITE_API_BASE_URL
```

将来的に AWS API Gateway を導入する場合も、フロントエンド側の実装は大きく変えず、環境変数の値を API Gateway の URL に変更する想定です。

## ディレクトリ構成

```txt
src/
├─ api/
│  └─ reservations.ts
├─ assets/
│  └─ styles/
│     └─ global.css
├─ router/
│  └─ index.ts
├─ types/
│  └─ reservation.ts
├─ views/
│  └─ ReservationListView.vue
├─ App.vue
└─ main.ts
```

## スタイル設計

共通のページレイアウトやアプリ全体に関わる設定は `src/assets/styles/global.css` に配置しています。

予約一覧画面に固有のテーブル、件数表示、ステータスバッジなどのスタイルは `ReservationListView.vue` の `scoped CSS` に配置しています。

## 開発用コマンド

開発サーバーを起動します。

```sh
npm run dev
```

型チェックと本番ビルドを実行します。

```sh
npm run build
```

Lint を実行します。

```sh
npm run lint
```

フォーマットを実行します。

```sh
npm run format
```

## 今後の予定

- AWS API Gateway の導入
- API Gateway 経由での予約一覧取得
- 予約の作成、更新、削除
- 画面やコンポーネントの分割
- 必要に応じた OpenAPI による型生成の検討
