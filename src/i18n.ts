import { z } from 'zod';
import { createTranslations } from 'src/lib/i18nTools';
import content from 'content/i18n.json';

const contentSchema = z.object({
  languages: z.record(z.string()),
  defaultLang: z.string(),
  ui: z.record(z.record(z.string())),
});

const cc = contentSchema.parse(content);

export const languages = content.languages;

export const defaultLang = content.defaultLang;

export const ui = content.ui;

export const i18n = createTranslations(languages, ui, defaultLang);
