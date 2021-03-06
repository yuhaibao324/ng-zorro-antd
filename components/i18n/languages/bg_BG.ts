import Calendar from './calendar/bg_BG';
import DatePicker from './date-picker/bg_BG';
import Pagination from './pagination/bg_BG';
import TimePicker from './time-picker/bg_BG';

export default {
  locale: 'bg',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Филтриране',
    filterConfirm: 'Добре',
    filterReset: 'Нулриане',
    selectAll: 'Избор на текуща страница',
    selectInvert: 'Обръщане',
  },
  Modal: {
    okText: 'Добре',
    cancelText: 'Отказ',
    justOkText: 'Добре',
  },
  Popconfirm: {
    okText: 'Добре',
    cancelText: 'Отказ',
  },
  Transfer: {
    searchPlaceholder: 'Търсене',
    itemUnit: 'избор',
    itemsUnit: 'избори',
  },
  Upload: {
    uploading: 'Качване...',
    removeFile: 'Премахване',
    uploadError: 'Грешка при качването',
    previewFile: 'Преглед',
  },
  Empty: {
    description: 'Няма данни',
  },
};
