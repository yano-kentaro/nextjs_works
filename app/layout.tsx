// recoil
import { RecoilRoot } from 'recoil';

// MUI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Text
import t from '@/app/text/text';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <html lang="ja">
        <head>
          <title>{t.appTitle}</title>
        </head>
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
