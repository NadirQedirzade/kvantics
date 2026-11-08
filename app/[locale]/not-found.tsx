import { headers } from "next/headers";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/Section";
import { defaultLocale, isLocale, localeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";

export default async function NotFound() {
  // not-found receives no route params; the middleware forwards the locale as a header.
  const requested = (await headers()).get("x-locale");
  const locale = isLocale(requested) ? requested : defaultLocale;
  const dict = getDictionary(locale);
  return (
    <PageHeader title={dict.notFound.title} lead={dict.notFound.text}>
      <Button href={localeHref(locale)}>{dict.notFound.back}</Button>
    </PageHeader>
  );
}
