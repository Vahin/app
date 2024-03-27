## Компонент AppimageWrapper

### Описание:

Компонент-обертка для [Appimage](/src/shared/ui/redisigned/Appimage). Загружает изображение и в зависимости от статуса возвращает его, либо компоненты ошибки/загрузки.

### Параметры:

- `ratio?: RatioType` - соотношение сторон(вертикальное/горизонтальное 4:3/16:9 либо `none`)
- `objectFit?: ObjectFitType` - 'contain' | 'cover'
- `classNameContainer?: string` - класс для контейнера
- `width?: WidthType` - ширина стандартная либо максимальная

### Сторибук:

- `Default`
- `HorizontalCover`
- `HorizontalWideCover`
- `VerticalCover`
- `VerticalWideCover`
- `HorizontalContain`
- `HorizontalWideContain`
- `VerticalContain`
- `VerticalWideContain`

### Тесты:

- Компонент рендерится
- Компонент рендерится с классом fit-contain
- Компонент рендерится с классом fit-cover
- Компонент рендерится с классом ratio-horizontal
- Компонент рендерится с классом ratio-horizontal-wide
- Компонент рендерится с классом ratio-vertical
- Компонент рендерится с классом ratio-vertical-wide
- Компонент рендерится с классом ratio-none
- Компонент рендерится с классом width-max
