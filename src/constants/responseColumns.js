import { COLUMN_DATA_STRING, COLUMN_DATA_LINK, COLUMN_DATA_NUM } from './dataType';

export const COLUMNS = [
    {
        header: 'Имя',
        col: 'name',
        type: COLUMN_DATA_STRING
    },
    {
        header: 'Путь',
        col: 'html_url',
        type: COLUMN_DATA_LINK,
    },
    {
        header: 'Размер',
        col: 'size',
        type: COLUMN_DATA_NUM
    }];