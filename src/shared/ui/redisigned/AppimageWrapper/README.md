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

- Нет
