// recoil
import { RecoilRoot } from 'recoil';

// MUI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Text
import t from '@/app/text/text';

// Get SaaSke Works Data from API
async function getData() {
  // 後々、APIからデータを取得するようにする
  // 一旦、mockからデータを取得して実装する
  return await import('@/mock/apps.json');
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const worksData = await getData();
  return (
    <RecoilRoot>
      <html lang="ja">
        <head>
          <title>{t.appTitle}</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    </RecoilRoot>
  );
}
