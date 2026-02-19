
import loadBerichten from '@/i18n';

export function generateStaticParams() {
  return ['en'].map((locale) => ({locale}));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;


  const messages = await loadBerichten(locale); // Preloads messages for this locale



  return children
//  return <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>;
}
