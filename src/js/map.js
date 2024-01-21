if ($("#map").length > 0) {


  ymaps.ready(init);

  function init() {
    var contactsMap = new ymaps.Map("map", {
      center: [55.429415, 37.276958],
      zoom: 17,
      controls: []
    });

    // MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
    //   '\t\t<div class="contacts-ballon">\n' +
    //   '\t\t\t\t\t\t\t\t\tНаш офис расположен в здании\n' +
    //   '\t\t\t\t\t\t\t\t\tАдминистрации МО Пороховые.\n' +
    //   '\t\t\t\t\t\t\t\t\tВход через проходную, по центру\n' +
    //   '\t\t\t\t\t\t\t\t\tздания. Для посещения Вам\n' +
    //   '\t\t\t\t\t\t\t\t\tпотребуется предъявить документ,\n' +
    //   '\t\t\t\t\t\t\t\t\tудостоверяющий личность.\n' +
    //   '\t\t\t\t\t\t\t\t\t<button onClick="closeBalloon()" class="balloon__close">×</button>\n' +
    //   '\t\t\t\t\t\t\t\t</div>'
    //
    // );
    closeBalloon = function () {
      contactsMap.balloon.close();
    };


    var contactsPlacemark = new ymaps.Placemark(
      [55.429471, 37.275072],
      {},
      {
        iconLayout: "default#imageWithContent",
        iconImageHref: "../img/myicon.svg",
        iconImageSize: [36, 50],
        iconImageOffset: [-10, -70],
        // balloonLayout: MyBalloonLayout,
        hideIconOnBalloonOpen: false
      }
    );
    contactsMap.geoObjects.add(contactsPlacemark);
//
// // Создадим пользовательский макет ползунка масштаба.
//     (ZoomLayout = ymaps.templateLayoutFactory.createClass("",
//       {
//         // Переопределяем методы макета, чтобы выполнять дополнительные действия
//         // при построении и очистке макета.
//         build: function () {
//           // Вызываем родительский метод build.
//           ZoomLayout.superclass.build.call(this);
//
//           // Привязываем функции-обработчики к контексту и сохраняем ссылки
//           // на них, чтобы потом отписаться от событий.
//           this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
//           this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
//
//           // Начинаем слушать клики на кнопках макета.
//           $("#zoom-in").bind("click", this.zoomInCallback);
//           $("#zoom-out").bind("click", this.zoomOutCallback);
//         },
//
//         clear: function () {
//           // Снимаем обработчики кликов.
//           $("#zoom-in").unbind("click", this.zoomInCallback);
//           $("#zoom-out").unbind("click", this.zoomOutCallback);
//
//           // Вызываем родительский метод clear.
//           ZoomLayout.superclass.clear.call(this);
//         },
//
//         zoomIn: function () {
//           var map = this.getData().control.getMap();
//           map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
//         },
//
//         zoomOut: function () {
//           var map = this.getData().control.getMap();
//           map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
//         }
//       })),
//       (zoomControl = new ymaps.control.ZoomControl({
//         options: {
//           layout: ZoomLayout,
//           position: {
//             left: 370,
//             top: 20
//           }
//         }
//       }));
    contactsMap.geoObjects.add(contactsPlacemark);
    contactsMap.controls.add(zoomControl);
    contactsMap.behaviors.disable("scrollZoom");
    contactsMap.behaviors.disable('drag');
  }


}
