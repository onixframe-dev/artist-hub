import { getFeedbacks } from '../api/feedback-api.js';
import refs from '../refs';
import 'swiper';

const russianFeedbacks = [
  {
    name: 'Мария Петрова',
    descr:
      'Отличное приложение! Удобный интерфейс, легко находить новых исполнителей и слушать их музыку.',
  },
  {
    name: 'Алексей Иванов',
    descr:
      'Очень понравилась подборка артистов. Все работает быстро, а поиск помогает сразу найти нужный жанр.',
  },
  {
    name: 'Екатерина Смирнова',
    descr:
      'Пользуюсь Artist Hub каждый день. Здесь удобно открывать новую музыку и сохранять любимых исполнителей.',
  },
  {
    name: 'Дмитрий Соколов',
    descr:
      'Приятный дизайн и понятная навигация. Нашел несколько классных артистов буквально за пару минут.',
  },
  {
    name: 'Анна Кузнецова',
    descr:
      'Сервис помогает быстро познакомиться с музыкантами и выбрать тех, кто действительно подходит по настроению.',
  },
  {
    name: 'Илья Морозов',
    descr:
      'Хорошая платформа для поиска новой музыки. Отзывы, фильтры и карточки артистов сделаны очень удобно.',
  },
  {
    name: 'Ольга Васильева',
    descr:
      'Мне нравится, что все собрано в одном месте: исполнители, жанры, описание и удобные элементы управления.',
  },
  {
    name: 'Никита Орлов',
    descr:
      'Интерфейс понятный даже с первого посещения. Быстро нашел интересных музыкантов и добавил их в избранное.',
  },
  {
    name: 'София Лебедева',
    descr:
      'Очень атмосферный проект. Музыку искать приятно, страницы загружаются быстро, а дизайн не отвлекает.',
  },
  {
    name: 'Роман Волков',
    descr:
      'Отличный способ открыть для себя новых исполнителей. Особенно понравились фильтры и карточки артистов.',
  },
];

async function creatFeedbackList() {
  const feedbacks = await getFeedbacks();

  const markupFeedbacks = feedbacks.data
    .map(({ rating }, index) => {
      const { name, descr } = russianFeedbacks[index % russianFeedbacks.length];
      const decimal = rating - Math.floor(rating); // целое число
      const integer = Math.floor(rating); // дроброное  число
      let ratingNormalized;

      if (decimal >= 0.1 && decimal <= 0.2) {
        ratingNormalized = integer;
      } else if (decimal > 0.2 && decimal < 0.8) {
        ratingNormalized = `${integer}-${'5'}`;
      } else if (decimal >= 0.8 && decimal <= 0.9) {
        ratingNormalized = integer + 1;
      } else {
        ratingNormalized = integer;
      }

      return `
         <li class="swiper-slide">
            <div class="wrapper">
              <div class="stars-static rating-set-${ratingNormalized}">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <p class="user-feedback">
              ${descr}
              </p>
              <p class="user-name">${name}</p>
            </div>
          </li>`;
    })
    .join('');

  refs.listFeedbacks.insertAdjacentHTML('beforeend', markupFeedbacks);
}

creatFeedbackList();
