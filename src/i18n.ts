import fs from 'fs';
import { z } from 'zod';
import { createTranslations } from 'src/lib/i18nTools';

const content = JSON.parse(
  fs.readFileSync(`./${process.env.CONTENT_DIR}/i18n.json`, 'utf8')
);

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
