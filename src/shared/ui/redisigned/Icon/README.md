## Компонент Icon

### Описание:

Компонент отображающий иконки. Может быть кликабельным.

### Параметры:

- `className?: string;`
- `Svg: FC<SVGProps<SVGSVGElement>>;`
- `'data-testid'?: string;`
- `'data-selected'?: boolean;`
- `onMouseLeave?: () => void;`
- `onMouseEnter?: () => void;`
- `clickable: true;`
- `onClick: () => void;`

### Сторибук:

- `Default`

### Тесты:

- Компонент рендерится
- Компонент рендерится с кнопкой и иконкой с пропсом clickable
- Переданная функция вызывается при нажатии
