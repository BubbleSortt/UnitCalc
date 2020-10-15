$(document).ready(function () {
  let isHandbook = document.querySelector('main').dataset.handbook;

  if (isHandbook) {
    const ALL_METRICS = document.querySelectorAll('.handbook__metrics');//все div'ы с понятиями
    const HANDBOOK_NAV = document.querySelector('.handbook__nav');
    const ALL_NAV_BUTTONS = HANDBOOK_NAV.querySelectorAll('button');// все кнопки навигации

    ALL_NAV_BUTTONS.forEach(button => {
      button.addEventListener('click', evt => {
        evt.preventDefault();
        const metric = evt.target.dataset.metrics;//находим букву по которой будем фильтровать метрики и переключать кнопки
        filterMetrics(metric);
        toggleActiveButton(metric);
      })
    })

    function filterMetrics(metric) {
      if (metric === 'all') {
        showHiddenMetric('all');
      } else {
        ALL_METRICS.forEach(elem => {
          if (elem.dataset.metrics === metric) {
            const foundMetric = elem;
            showHiddenMetric(foundMetric);
          }
        })
      }

    }

    function showHiddenMetric(metric) {
      if (metric === 'all') {
        ALL_METRICS.forEach(elem => {
          if (elem.classList.contains('hidden')) {
            elem.classList.remove('hidden')
          }
        })
      } else {
        ALL_METRICS.forEach(elem => {
          elem.classList.add('hidden');
        })
        metric.classList.remove('hidden')
      }
    }

    function toggleActiveButton(metric) {
      const prevActive = HANDBOOK_NAV.querySelector('.handbook__button-nav_active');
      const currentButton = HANDBOOK_NAV.querySelector(`button[data-metrics="${metric}"]`);
      if (prevActive) {
        prevActive.classList.remove('handbook__button-nav_active');
        currentButton.classList.add('handbook__button-nav_active');
      }
    }
  }
});

