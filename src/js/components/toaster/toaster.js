import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showSuccessToast() {
  iziToast.show({
    title: 'Успешно',
    titleColor: '#fff',
    messageColor: '#fff',
    iconColor: '#fff',
    backgroundColor: '#764191',
    position: 'topCenter',
    message: 'Ваш отзыв успешно отправлен!',
  });
}

export function showErrorToast(value) {
  iziToast.error({
    title: 'Ошибка',
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#af0404',
    position: 'topCenter',
    message: value,
  });
}
