# maksimprojects.space

Личный веб-сайт и технический блог с проектами, статьями и экспериментами от Максима Миронова.

🌐 **Сайт**: [maksimprojects.space](https://maksimprojects.space)  
📧 **Контакты**: [Ваш Email]

---

## 📋 Содержание

- [Стек технологий](#-стек-технологий)
- [Возможности](#-возможности)
- [Структура проекта](#-структура-проекта)
- [Ключевые компоненты](#-ключевые-компоненты)
- [Начало работы](#-начало-работы)
- [Разработка](#-разработка)
- [Развертывание](#-развертывание)

---

## 🛠 Стек технологий

### Основные технологии
- **Next.js 14.2.35** - Production-ready React фреймворк с SSR и SSG
- **React 18.2.0** - Библиотека для создания пользовательских интерфейсов
- **TypeScript 5.3.3** - Типизированный JavaScript для надежного кода

### Стилизация и дизайн
- **Tailwind CSS 4.0.0-alpha.13** - Utility-first CSS фреймворк
- **PostCSS 8.4.35** - Инструмент для трансформации CSS
- **Geist Font** - Современный шрифт от Vercel (Sans и Mono варианты)

### Управление контентом
- **next-mdx-remote 5.0.0** - Поддержка MDX для интерактивных статей блога
- **sugar-high 0.6.0** - Подсветка синтаксиса для блоков кода

### Аналитика и мониторинг
- **@vercel/analytics** - Отслеживание поведения пользователей
- **@vercel/speed-insights** - Мониторинг производительности

### Пакетный менеджер
- **pnpm** - Быстрый и экономичный пакетный менеджер

---

## ✨ Возможности

### 🏠 Главная страница
- Представление личного бренда
- Превью последних статей блога
- Секции с призывами к действию

### 📝 Система блога
- **Поддержка MDX**: Статьи с Markdown + React компонентами
- **Frontmatter метаданные**: Заголовок, дата, описание для каждого поста
- **Подсветка синтаксиса**: Блоки кода с sugar-high
- **Динамическая маршрутизация**: Роутинг на основе файлов (`/blog/[slug]`)
- **RSS лента**: Автогенерация по адресу `/rss`
- **SEO оптимизация**: Метаданные и Open Graph теги

### 💼 Портфолио проектов
- Витрина личных проектов
- Ссылки на детальные статьи в блоге
- Адаптивная карточная верстка
- Интерактивные hover-эффекты

### 🎨 UI/UX возможности
- **Темная тема**: Определение системных предпочтений
- **Адаптивный дизайн**: Mobile-first подход
- **Кастомная навигация**: Чистый, минималистичный хедер
- **Футер**: Копирайт и ссылка на GitHub
- **Типографика**: Шрифты Geist Sans и Mono
- **Состояния загрузки**: Плавные переходы между страницами

### 🔍 SEO и метаданные
- Кастомные метаданные для каждой страницы
- Динамическая генерация заголовков: `{Страница} | maksimprojects.space`
- Генерация sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Open Graph изображения

### ⚡ Оптимизация производительности
- Server Components для быстрой начальной загрузки
- Code splitting и ленивая загрузка
- Оптимизация изображений через Next.js Image
- Статическая генерация страниц где возможно
- Incremental Static Regeneration (ISR)

---

## 📁 Структура проекта

```
my_site_maksim_mironov/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Корневой layout с метаданными
│   ├── page.tsx                 # Главная страница
│   ├── global.css               # Глобальные стили
│   ├── blog/                    # Раздел блога
│   │   ├── page.tsx            # Страница списка статей
│   │   ├── utils.ts            # Утилиты блога (парсинг MDX)
│   │   ├── [slug]/             # Динамические страницы статей
│   │   │   └── page.tsx
│   │   └── posts/              # MDX статьи блога
│   │       ├── telegram-parser-project.mdx
│   │       ├── dear-edit-project.mdx
│   │       └── chrome-extension-bookmarks.mdx
│   ├── projects/                # Портфолио проектов
│   │   └── page.tsx
│   ├── api/                     # API маршруты
│   │   └── auth/
│   │       └── signin/
│   │           └── page.tsx    # Страница входа
│   ├── components/              # Переиспользуемые компоненты
│   │   ├── nav.tsx             # Навигационная панель
│   │   ├── footer.tsx          # Подвал
│   │   ├── mdx.tsx             # Рендерер MDX с кастомными компонентами
│   │   └── posts.tsx           # Компонент списка статей
│   ├── og/                      # Генерация Open Graph изображений
│   │   └── route.tsx
│   ├── rss/                     # Генерация RSS ленты
│   │   └── route.ts
│   ├── sitemap.ts               # Генерация sitemap
│   ├── robots.ts                # Генерация robots.txt
│   └── not-found.tsx            # Кастомная страница 404
├── package.json                 # Зависимости и скрипты
├── pnpm-lock.yaml               # Lock файл для pnpm
├── tsconfig.json                # Конфигурация TypeScript
├── postcss.config.js            # Конфигурация PostCSS
├── next.config.js               # Конфигурация Next.js
├── .gitignore                   # Правила игнорирования Git
├── README.md                    # Этот файл (English)
└── README.ru.md                 # Этот файл (Русский)
```

---

## 🧩 Ключевые компоненты

### Layout Component (`app/layout.tsx`)
- **Назначение**: Корневая обертка для всех страниц
- **Функции**:
  - Глобальная конфигурация метаданных
  - Загрузка шрифтов (Geist Sans & Mono)
  - Поддержка темной темы через CSS классы
  - Интеграция Analytics и Speed Insights
  - Размещение Navbar и Footer

```typescript
// Конфигурация метаданных
export const metadata: Metadata = {
  title: {
    default: 'maksimprojects.space',
    template: '%s | maksimprojects.space',
  },
  description: 'Личные проекты и технический блог Максима Миронова',
  // ... Open Graph, robots и т.д.
}
```

### Navigation Component (`app/components/nav.tsx`)
- **Назначение**: Верхняя навигационная панель
- **Функции**:
  - Адаптивное меню с ссылками home, blog, projects
  - Кнопка Sign In (выровнена справа)
  - Hover эффекты с плавными переходами
  - Индикация активной ссылки

```typescript
const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/projects': { name: 'my projects' },
}
```

### MDX Component (`app/components/mdx.tsx`)
- **Назначение**: Кастомный рендерер MDX для статей блога
- **Функции**:
  - Кастомные компоненты для заголовков с якорными ссылками
  - Подсветка синтаксиса для блоков кода
  - Оптимизация изображений со скругленными углами
  - Обработка внутренних/внешних ссылок
  - Поддержка таблиц

```typescript
// Переопределение стандартных компонентов
let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  // ... h3-h6
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}
```

### Blog Utilities (`app/blog/utils.ts`)
- **Назначение**: Парсинг MDX файлов и извлечение метаданных
- **Ключевые функции**:
  - `parseFrontmatter()`: Извлечение YAML frontmatter из MDX
  - `getMDXFiles()`: Получение всех .mdx файлов из директории
  - `readMDXFile()`: Чтение и парсинг одного MDX файла
  - `getMDXData()`: Получение всех статей с метаданными
  - `getBlogPosts()`: Публичный API для получения всех постов
  - `formatDate()`: Форматирование дат в читаемый вид

```typescript
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}
```

### Blog Post Page (`app/blog/[slug]/page.tsx`)
- **Назначение**: Динамический рендерер статей блога
- **Функции**:
  - Динамическая генерация метаданных
  - Структурированные данные (JSON-LD) для SEO
  - Обработка 404 для несуществующих постов
  - Генерация статических параметров для времени сборки

```typescript
export function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}
```

### Projects Page (`app/projects/page.tsx`)
- **Назначение**: Витрина портфолио
- **Функции**:
  - Список личных проектов с описаниями
  - Ссылки на детальные статьи в блоге
  - Кастомные SVG иконки стрелок
  - Адаптивная верстка с правильными отступами

### RSS Feed (`app/rss/route.ts`)
- **Назначение**: Генерация RSS 2.0 ленты
- **Функции**:
  - Автогенерация XML ленты из статей блога
  - Включает title, description, pubDate, link
  - Соответствует спецификации RSS 2.0

### Sitemap (`app/sitemap.ts`)
- **Назначение**: XML sitemap для поисковых систем
- **Функции**:
  - Статические маршруты (home, blog, projects)
  - Динамические маршруты из статей блога
  - Даты последних изменений
  - Подсказки по частоте изменений

### Open Graph Image (`app/og/route.tsx`)
- **Назначение**: Динамическая генерация OG изображений
- **Функции**:
  - Кастомные изображения для социальных сетей
  - Динамический рендеринг текста
  - Правильные размеры (1200x630)

---

## 🚀 Начало работы

### Требования
- **Node.js** 18+ (рекомендуется: 20.x)
- **pnpm** (или npm/yarn)

### Установка

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/yourusername/my_site_maksim_mironov.git
   cd my_site_maksim_mironov
   ```

2. **Установить зависимости**
   ```bash
   pnpm install
   ```

3. **Запустить сервер разработки**
   ```bash
   pnpm dev
   ```

4. **Открыть в браузере**
   ```
   http://localhost:3000
   ```

---

## 💻 Разработка

### Доступные скрипты

```bash
# Запуск сервера разработки
pnpm dev

# Сборка для production
pnpm build

# Запуск production сервера
pnpm start
```

### Кастомный порт
```bash
pnpm dev -p 4000  # Запуск на порту 4000
```

### Добавление новой статьи в блог

1. Создайте новый `.mdx` файл в `app/blog/posts/`
   ```bash
   touch app/blog/posts/my-new-post.mdx
   ```

2. Добавьте frontmatter и контент
   ```mdx
   ---
   title: 'Моя новая статья'
   publishedAt: '2026-03-07'
   summary: 'Краткое описание статьи'
   ---

   ## Ваш контент здесь

   Это содержание вашей статьи с поддержкой **Markdown**!
   ```

3. Статья автоматически появится по адресу `/blog/my-new-post`

### Кастомизация стилей

- **Глобальные стили**: Редактируйте `app/global.css`
- **Tailwind конфигурация**: Изменяйте классы прямо в компонентах
- **Шрифты**: Изменяйте в `app/layout.tsx`

### Переменные окружения

Создайте `.env.local` для локальной конфигурации:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🌐 Развертывание

### Vercel (Рекомендуется)

1. **Push в GitHub**
   ```bash
   git push origin main
   ```

2. **Импорт в Vercel**
   - Перейдите на [vercel.com](https://vercel.com)
   - Импортируйте ваш репозиторий
   - Разверните с нулевой конфигурацией

3. **Кастомный домен**
   - Добавьте `maksimprojects.space` в настройках Vercel
   - Обновите DNS записи согласно инструкциям

### Другие платформы

#### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "start"]
```

#### Статический экспорт
```bash
# Добавьте в next.config.js
output: 'export'

# Соберите статические файлы
pnpm build
# Файлы в директории /out
```

---

## 📊 Метрики производительности

- **Lighthouse Score**: 95+ (Desktop & Mobile)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

---

## 🤝 Участие в разработке

Приветствуются любые вклады в проект! Пожалуйста, создавайте Pull Request.

1. Форкните репозиторий
2. Создайте ветку функции (`git checkout -b feature/AmazingFeature`)
3. Закоммитьте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

---

## 📝 Лицензия

Этот проект является open source и доступен под лицензией [MIT License](LICENSE).

---

## 📧 Контакты

**Максим Миронов**
- Сайт: [maksimprojects.space](https://maksimprojects.space)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - React фреймворк
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Платформа для хостинга и деплоя
- [Geist Font](https://vercel.com/font) - Типографика

---

**Создано с ❤️ Максимом Мироновым**
