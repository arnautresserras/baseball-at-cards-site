/* Baseball at Cards - build-free i18n.
 *
 * English is authored inline in every page and is the authoritative version
 * (notably for the Privacy Policy). This script only *replaces* that copy when
 * a non-English locale is active, so the site stays complete and valid with
 * JavaScript disabled, for crawlers, and for App Store reviewers.
 *
 * The translations are embedded below rather than fetched, so the switcher
 * works from file:// and can never fail silently on a bad request.
 *
 * Markup contract:
 *   data-i18n="key"          -> element.innerHTML
 *   data-i18n-content="key"  -> element's content attribute (meta tags)
 *   data-i18n-alt="key"      -> element's alt attribute (images)
 *   data-lang-switcher       -> container the switcher is rendered into
 */
(function () {
  "use strict";

  var TRANSLATIONS = {

    "es-MX": {
      "meta.title.home": "Baseball at Cards — Un juego de cartas roguelike de béisbol",
      "meta.desc.home": "Baseball at Cards es un juego de cartas roguelike de béisbol para un jugador. Arma tu róster, vence a todos los jefes y sobrevive la partida. Gratis para iPhone y iPad.",
      "meta.title.privacy": "Aviso de Privacidad — Baseball at Cards",
      "meta.desc.privacy": "Aviso de Privacidad del juego para iOS Baseball at Cards. Sin cuentas, sin nombre ni correo — solo analíticas anónimas y los datos necesarios para procesar tu compra.",
      "meta.title.support": "Soporte — Baseball at Cards",
      "meta.desc.support": "Soporte y preguntas frecuentes de Baseball at Cards. Ayuda con compras, restauración de tu desbloqueo, solución de problemas y contacto con el desarrollador.",
      "meta.title.credits": "Créditos — Baseball at Cards",
      "meta.desc.credits": "Créditos de Baseball at Cards: desarrollo y una nota sobre el arte y el audio generados con IA que usa el juego.",
      "nav.home": "Inicio",
      "nav.support": "Soporte",
      "nav.privacy": "Privacidad",
      "foot.privacy": "Aviso de Privacidad",
      "foot.credits": "Créditos",
      "foot.contact": "Contacto",
      "foot.copy": "© 2026 Arnau Tresserras. Todos los derechos reservados.",
      "hero.eyebrow": "◆ YA DISPONIBLE EN iOS ◆",
      "hero.lead": "Un roguelike de béisbol, repartido carta por carta.",
      "hero.tagline": "Traza tu ruta, arma tu alineación y batea para las gradas. Vence a todos los jefes, recluta jugadores y descubre hasta dónde llega una sola partida: no hay dos iguales.",
      "cta.store.pre": "Consíguelo en el",
      "cta.learn": "Saber más",
      "tc.rookie": "Carta de Novato",
      "tc.sub": "UN JUGADOR · ROGUELIKE",
      "tc.stat.runs": "Partidas",
      "tc.stat.unlock": "Pago",
      "tc.stat.subs": "Subs",
      "tc.stat.ios": "iPhone·iPad",
      "play.kicker": "◆ ¡PLAY BALL! ◆",
      "play.title": "Cómo se juega",
      "play.sub": "Cada lanzamiento es una carta. Cada partida es un mapa nuevo. Recorre la temporada regular, prepárate para los playoffs y descubre hasta dónde llega tu alineación.",
      "f1.title": "Toca o arrastra para jugar",
      "f1.body": "Lanzamientos, swings, robos y jugadas son cartas en tu mano. Lee la cuenta, elige tu carta y hazlo realidad: sin estorbos, puro béisbol.",
      "f2.title": "Elige tu camino",
      "f2.body": "Cada partida despliega un mapa ramificado de juegos, jefes, tiendas y eventos. Ve a lo seguro por dinero o enfréntate al gauntlet de jefes por mejores reclutas: la ruta es tuya.",
      "f3.title": "Arma tu alineación",
      "f3.body": "Recluta entre más de una docena de arquetipos de jugador: bateadores de poder, especialistas del small ball, pacientes que buscan la base por bolas, controladores de la cuenta. Cada carta de tu mazo viene de los nueve bateadores que elijas.",
      "f4.title": "Jefes con truco",
      "f4.body": "Cada as dobla las reglas: uno esconde su resistencia, otro se cura con los ponches, otro te reparte las cartas boca abajo. Lee el duelo y recluta a tu contra.",
      "f5.title": "Gana y gasta",
      "f5.body": "Gana duelos para juntar Cacahuates y gástalos en la tienda para firmar a los jugadores que de verdad necesitas: el único lugar para arreglar un róster flojo antes de la final.",
      "f6.title": "Empieza gratis",
      "f6.body": "Entra cuando quieras a una Partida de Muestra gratuita. Desbloquea las Survival Runs ilimitadas con un solo pago único: sin suscripciones.",
      "new.kicker": "◆ NUEVO EN LA 1.2 ◆",
      "new.title": "Una partida al día, igual para todos",
      "new.sub": "La versión 1.2 trae el Juego Diario, sobres con All-Stars y 5 nuevos jefes, más The Gold Glove entre los posibles jefes finales.",
      "n1.title": "Partida Diaria",
      "n1.body": "Una partida nueva cada día, igual para todos los jugadores: el mismo mapa, el mismo sobre inicial y la misma Regla de Partida. Un solo intento, sin repeticiones. Los jugadores gratuitos tienen una cada 7 días; el desbloqueo único la abre todos los días. Requiere Game Center.",
      "n2.title": "Reglas de Partida",
      "n2.body": "Cada Partida Diaria (Daily Run) altera el juego con una de 13 reglas hostiles, de Deep Fences a Pitcher’s Ump, además de las reglas propias de cada rival.",
      "n3.title": "Game Center",
      "n3.body": "Tu Partida Diaria se publica en una tabla diaria, y todas tus partidas, en una tabla histórica de Mejor Puntuación (Best Score). Reta a tus amigos a superar tu día. Los 21 logros se sincronizan, 2 de ellos nuevos.",
      "n4.title": "Sobres y All-Stars",
      "n4.body": "Los reclutas ahora llegan en sobres de Pros y All-Stars, y el lanzamiento antes del reparto te dice qué hay dentro. Una pelota que se vuela la barda significa un All-Star.",
      "shots.kicker": "◆ REPETICIÓN INSTANTÁNEA ◆",
      "shots.title": "Capturas",
      "shots.sub": "Un vistazo al dugout.",
      "shot1.alt": "Conectando un home run en Baseball at Cards",
      "shot2.alt": "Jugabilidad principal: jugando una carta durante un turno al bat",
      "shot3.alt": "La habilidad especial de un jefe que dobla las reglas",
      "shot4.alt": "El mapa ramificado de la partida",
      "shot5.alt": "La pantalla de la tienda para gastar Cacahuates",
      "shot6.alt": "Reclutando un nuevo arquetipo de jugador",
      "sup.h1": "Soporte",
      "sup.intro": "¿Necesitas ayuda con Baseball at Cards? Estás en el lugar correcto. Abajo encontrarás la respuesta a la mayoría de las preguntas. Si no encuentras lo que buscas, escríbeme y te ayudo.",
      "sup.contact.callout": "<strong>Contacto:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br />Procuro responder en un plazo de <strong>2 a 3 días hábiles</strong>. Baseball at Cards lo hace un desarrollador independiente, así que gracias por tu paciencia.",
      "sup.quick.h2": "Ayuda rápida",
      "sup.unlock.h3": "¿Cómo desbloqueo el juego completo?",
      "sup.unlock.p1": "Baseball at Cards es gratis y trae una <strong>Partida de Muestra</strong> gratuita (un duelo fijo contra un jefe con un róster predefinido) que puedes jugar cuando quieras.",
      "sup.unlock.p2": "El juego completo — <strong>Survival Runs</strong> ilimitadas, donde vences a todos los jefes, reclutas jugadores nuevos y armas tu róster — se desbloquea con <strong>una sola compra dentro de la app, de pago único</strong>. No hay suscripciones ni cargos recurrentes. Una vez que lo compras, es tuyo.",
      "sup.unlock.p3": "Para desbloquearlo: abre la app, toca <strong>Play Survival Run</strong> y sigue las indicaciones para comprar.",
      "sup.locked.h3": "Compré el juego pero sigue bloqueado. ¿Qué hago?",
      "sup.locked.p1": "Normalmente esto significa que hay que restaurar la compra — por ejemplo, tras reinstalar la app, cambiar de dispositivo o por un problema temporal de red.",
      "sup.locked.list": "<li>Abre la app.</li><li>En el menú principal, toca <strong>Restore Purchase</strong> (Restaurar compra).</li><li>Asegúrate de haber iniciado sesión con el <strong>mismo Apple ID</strong> con el que compraste el juego.</li>",
      "sup.locked.p2": "Tu compra se restaurará sin costo adicional. Si aun así no se desbloquea, escríbeme a <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> e incluye la fecha de compra si la tienes.",
      "sup.device.h3": "Cambié de dispositivo o reinstalé la app. ¿Tengo que pagar otra vez?",
      "sup.device.p1": "No. El desbloqueo del juego completo está ligado a tu Apple ID. Instala la app, toca <strong>Restore Purchase</strong> (Restaurar compra) en el menú principal y verifica que iniciaste sesión con el mismo Apple ID con el que compraste.",
      "sup.refund.h3": "¿Cómo pido un reembolso?",
      "sup.refund.p1": "Los reembolsos de compras en el App Store los gestiona Apple, no yo. Para solicitar uno, entra a <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>, inicia sesión con tu Apple ID, busca Baseball at Cards en tu historial de compras y sigue los pasos. Si quieres, también puedes escribirme y con gusto te ayudo en lo que pueda.",
      "sup.trouble.h2": "Solución de problemas",
      "sup.crash.h3": "El juego se cierra o no abre",
      "sup.crash.p1": "Prueba estos pasos en orden:",
      "sup.crash.list": "<li>Cierra la app por completo y vuelve a abrirla.</li><li>Verifica que el software de tu dispositivo esté actualizado.</li><li>Comprueba que tengas la última versión de Baseball at Cards del App Store.</li><li>Reinicia tu dispositivo.</li>",
      "sup.crash.p2": "Si el problema continúa, escríbeme a <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> con los datos de abajo para que pueda investigarlo.",
      "sup.bug.h3": "Reportar un error",
      "sup.bug.p1": "Cuando reportes un problema, ayuda muchísimo que incluyas:",
      "sup.bug.list": "<li>El modelo de tu dispositivo (por ejemplo, iPhone 14, iPad Air).</li><li>Tu versión de iOS (Ajustes → General → Información → Versión de software).</li><li>La versión de Baseball at Cards que estás usando.</li><li>Una descripción de lo que pasó y de lo que esperabas, además de los pasos para reproducirlo si los conoces.</li><li>Una captura de pantalla o grabación, si viene al caso.</li>",
      "sup.req.h2": "Requisitos del dispositivo",
      "sup.req.p1": "Baseball at Cards funciona en iPhone y iPad. Para la mejor experiencia, mantén tu dispositivo actualizado a una versión reciente de iOS/iPadOS e instala la última versión de la app desde el App Store.",
      "sup.privacy.h2": "Privacidad",
      "sup.privacy.p1": "Para conocer qué datos recopila la app y cómo se manejan, consulta el <a href=\"privacy.html\">Aviso de Privacidad</a>. En resumen: sin cuentas, sin nombre ni correo, y solo analíticas anónimas más la información necesaria para procesar tu compra.",
      "sup.more.h2": "¿Sigues necesitando ayuda?",
      "sup.more.p1": "Escribe a <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> y te respondo lo antes posible.",
      "cred.h1": "Créditos",
      "cred.intro": "Baseball at Cards lo hace un desarrollador independiente, Arnau Tresserras. Esto es lo que ayudó a sacarlo adelante.",
      "cred.dev.h2": "Desarrollo",
      "cred.dev.p1": "Diseño, programación y dirección del juego: Arnau Tresserras.",
      "cred.art.h2": "Arte y audio",
      "cred.art.p1": "El ícono de la app, la pantalla de inicio, los sprites de los arquetipos de jugador y los fondos de estadio/campo se crearon con ayuda de <strong>herramientas de generación de imágenes con IA</strong>. Algunos efectos de sonido y el audio ambiental se crearon con ayuda de <strong>herramientas de generación de audio con IA</strong>. Después, ambos fueron seleccionados, editados e integrados a mano para encajar con el estilo del juego.",
      "cred.q.h2": "¿Preguntas?",
      "cred.q.p1": "Si tienes alguna duda sobre un recurso del juego, escribe a <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>.",
      "priv.h1": "Aviso de Privacidad",
      "priv.meta": "<strong>App:</strong> Baseball at Cards &nbsp;·&nbsp; <strong>Desarrollador:</strong> Arnau Tresserras &nbsp;·&nbsp; <strong>Contacto:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br /><strong>Fecha de entrada en vigor:</strong> 28 de junio de 2026 &nbsp;·&nbsp; <strong>Última actualización:</strong> 7 de octubre de 2026",
      "priv.langnote": "Este aviso se publica en inglés, español, japonés y coreano. La <strong>versión en inglés es la versión oficial</strong>; si una traducción difiere de ella en cualquier punto, prevalece el texto en inglés.",
      "priv.1.h2": "1. Resumen",
      "priv.1.p1": "Baseball at Cards (\"la App\", \"el Juego\") es un juego de cartas de béisbol para un jugador desarrollado y publicado por Arnau Tresserras como desarrollador individual (\"yo\", \"mi\"). Este Aviso de Privacidad explica qué información recopila la App, cómo se usa y qué opciones tienes.",
      "priv.1.p2": "<strong>En pocas palabras:</strong> La App no tiene cuentas de usuario y nunca te pide tu nombre, correo electrónico ni ninguna otra información que te identifique directamente. Solo recopila analíticas de juego anónimas y la información necesaria para procesar una compra dentro de la app. No vendo tus datos.",
      "priv.1.p3": "Si no estás de acuerdo con este aviso, por favor no uses la App.",
      "priv.2.h2": "2. Información que recopila la App",
      "priv.2.1.h3": "2.1 Información que NO recopilo",
      "priv.2.1.list": "<li><strong>No</strong> requiero ni ofrezco cuenta, inicio de sesión ni registro.</li><li><strong>No</strong> recopilo tu nombre, correo electrónico, teléfono ni dirección postal.</li><li><strong>No</strong> recopilo tu ubicación precisa ni aproximada.</li><li><strong>No</strong> accedo a tus contactos, fotos, micrófono ni cámara.</li><li><strong>No</strong> recopilo datos de tarjetas de pago ni bancarios (ver §2.3).</li>",
      "priv.2.2.h3": "2.2 Datos de analítica (mediante Mixpanel)",
      "priv.2.2.p1": "Para entender cómo se juega el Juego y mejorarlo, la App usa <strong>Mixpanel</strong>, un servicio de analítica de terceros. Mixpanel recopila:",
      "priv.2.2.list": "<li>Un <strong>identificador de dispositivo anónimo</strong> generado al azar por Mixpanel. No está vinculado a tu identidad real.</li><li><strong>Eventos de juego</strong> — por ejemplo: iniciar y terminar una partida, duelos contra jefes iniciados y ganados, cartas jugadas, swings, hits, outs y resultados de los juegos.</li><li><strong>Actividad de compras dentro de la app</strong> — si se mostró la pantalla de compra y desde dónde se abrió, si una compra se inició, se completó, falló o se canceló, si una restauración encontró una compra anterior y si el juego completo está desbloqueado. Esto no incluye datos de pago ni de transacciones, y no está vinculado a tus registros de compra en RevenueCat o Apple.</li><li><strong>Propiedades técnicas y de contexto</strong> asociadas a esos eventos, como el sistema operativo y el modelo del dispositivo, la versión de la App y las marcas de tiempo de los eventos.</li>",
      "priv.2.2.p2": "Los datos de analítica se procesan en los <strong>servidores de la Unión Europea</strong> de Mixpanel (<code>api-eu.mixpanel.com</code>).",
      "priv.2.3.h3": "2.3 Datos de compras dentro de la app (mediante RevenueCat y Apple)",
      "priv.2.3.p1": "Baseball at Cards es gratis. El juego completo se puede desbloquear con una sola compra dentro de la app, de pago único. Las compras se procesan a través del <strong>App Store de Apple</strong> y se gestionan con <strong>RevenueCat</strong>, un servicio de terceros para la gestión de compras.",
      "priv.2.3.list": "<li><strong>Apple</strong> procesa el pago. Yo nunca recibo ni almaceno el número de tu tarjeta ni tus datos de facturación.</li><li><strong>RevenueCat</strong> recibe y almacena la información necesaria para validar y restaurar tu compra, incluido un <strong>identificador anónimo de usuario de la app</strong>, los recibos de compra y transacción, los productos que compraste e información básica del dispositivo (como el tipo de dispositivo, el sistema operativo y el país/región que reporta la tienda). Nada de esto se vincula a tu nombre ni a tu correo.</li>",
      "priv.2.3.p2": "Esta información se usa únicamente para otorgarte el contenido que pagaste, permitirte restaurar una compra anterior y prevenir el fraude.",
      "priv.2.4.h3": "2.4 Datos de fallos y diagnóstico (mediante Sentry)",
      "priv.2.4.p1": "Para mantener el Juego estable y corregir problemas, la App usa <strong>Sentry</strong>, un servicio de terceros de reporte de fallos y diagnóstico. Cuando la App se cierra inesperadamente o encuentra un error, Sentry recopila:",
      "priv.2.4.list": "<li><strong>Reportes de fallos y errores</strong> — diagnósticos técnicos como el tipo de error y el stack trace, y registros de diagnóstico estructurados sobre lo que hacía la App en ese momento.</li><li><strong>Datos de estabilidad (release health)</strong> — señales anónimas de inicio y fin de sesión de la app, usadas para medir la tasa de sesiones sin fallos de cada versión.</li><li><strong>Propiedades técnicas y de contexto</strong> — como el modelo del dispositivo y su sistema operativo, la versión de la App y el canal de versión/actualización.</li>",
      "priv.2.4.p2": "Sentry usa un identificador generado al azar para agrupar los reportes; la App <strong>no</strong> adjunta tu nombre, correo ni ninguna identidad real a estos datos. Se usan solo para diagnosticar fallos y mejorar la estabilidad, nunca para publicidad.",
      "priv.2.5.h3": "2.5 Información almacenada solo en tu dispositivo",
      "priv.2.5.p1": "La App guarda un pequeño indicador en tu dispositivo (mediante almacenamiento local) para recordar si el juego completo se desbloqueó, y así no tener que verificarlo en cada inicio. Esta información permanece en tu dispositivo y no se me transmite.",
      "priv.2.6.h3": "2.6 Este sitio web (páginas promocionales, de soporte y legales)",
      "priv.2.6.p1": "Las páginas que estás leyendo — la página de inicio promocional, este Aviso de Privacidad, la página de Soporte y la de Créditos — forman parte del sitio web de la App y son independientes de la App misma. Para saber cuánta gente visita estas páginas y de dónde llega (por ejemplo, desde la ficha del App Store), el sitio usa <strong>Umami</strong>, un servicio de analítica centrado en la privacidad y <strong>sin cookies</strong>.",
      "priv.2.6.list": "<li>Umami <strong>no</strong> usa cookies y <strong>no</strong> guarda ningún identificador en tu dispositivo.</li><li>Solo recopila información <strong>agregada y anónima</strong>, como vistas de página, el sitio o la fuente de origen (por ejemplo, el App Store de Apple), el país aproximado y el tipo general de dispositivo/navegador. Esto no permite identificarte y no se crea ningún perfil personal.</li><li>Registra, como un conteo agregado anónimo, cuándo los visitantes tocan el botón <strong>\"Consíguelo en el App Store\"</strong>, para poder ver cuánta gente va a la tienda desde el sitio.</li>",
      "priv.2.6.p2": "Como esta analítica es anónima y sin cookies, no se requiere un banner de consentimiento de cookies. Aun así, puedes bloquearla con la protección antirrastreo o el bloqueo de contenido de tu navegador. Consulta la información de privacidad de Umami en <a href=\"https://umami.is/privacy\">umami.is/privacy</a>.",
      "priv.3.h2": "3. Cómo se usa la información",
      "priv.3.p1": "Uso la información descrita arriba para:",
      "priv.3.list": "<li>Operar el Juego y recordar tu estado de compra/desbloqueo.</li><li>Procesar y restaurar compras dentro de la app.</li><li>Entender de forma agregada cómo se juega el Juego y mejorar la jugabilidad, el balance y la estabilidad.</li><li>Diagnosticar problemas técnicos.</li>",
      "priv.3.p2": "<strong>No</strong> uso esta información para crear perfiles publicitarios, y la App no muestra publicidad de terceros.",
      "priv.4.h2": "4. Bases legales del tratamiento (usuarios del EEE/Reino Unido)",
      "priv.4.p1": "Si te encuentras en el Espacio Económico Europeo o en el Reino Unido, trato tu información con base en los siguientes fundamentos jurídicos del Reglamento General de Protección de Datos (RGPD):",
      "priv.4.list": "<li><strong>Interés legítimo</strong> (art. 6(1)(f)) — para las analíticas anónimas usadas para entender y mejorar el Juego, y para el reporte de fallos y el diagnóstico usados para mantenerlo estable.</li><li><strong>Ejecución de un contrato</strong> (art. 6(1)(b)) — para procesar y restaurar las compras dentro de la app que hayas solicitado.</li>",
      "priv.5.h2": "5. Proveedores de servicios de terceros",
      "priv.5.p1": "La App se apoya en los siguientes terceros, cada uno de los cuales trata los datos conforme a su propio aviso de privacidad:",
      "priv.5.th.provider": "Proveedor",
      "priv.5.th.purpose": "Finalidad",
      "priv.5.th.policy": "Aviso de privacidad",
      "priv.5.apple": "Distribución de la app y procesamiento de pagos",
      "priv.5.mixpanel": "Analítica de juego anónima",
      "priv.5.revenuecat": "Gestión de compras dentro de la app y validación de recibos",
      "priv.5.sentry": "Reporte anónimo de fallos y diagnóstico de estabilidad",
      "priv.5.umami": "Analítica anónima y sin cookies para este sitio web (no para la App)",
      "priv.5.p2": "No controlo cómo estos proveedores tratan los datos una vez que sus servicios los recopilan. Por favor, revisa sus avisos para más detalles.",
      "priv.6.h2": "6. Compartición y venta de datos",
      "priv.6.p1": "<strong>No</strong> vendo tu información personal y <strong>no</strong> la comparto con terceros, salvo con los proveedores de servicios enumerados en §5, que la tratan por mi cuenta para brindar la funcionalidad de la App. Podría divulgar información si la ley o un requerimiento legal válido me obliga a hacerlo.",
      "priv.7.h2": "7. Conservación de los datos",
      "priv.7.list": "<li>Los <strong>datos de analítica</strong> los conserva Mixpanel mientras sean útiles para entender y mejorar el Juego, conforme a sus propias prácticas de conservación.</li><li>Los <strong>registros de compra</strong> los conservan RevenueCat y Apple durante el tiempo necesario para gestionar tu derecho de acceso al contenido, permitir restauraciones, cumplir obligaciones fiscales y contables y prevenir el fraude.</li><li>Los <strong>datos de fallos y diagnóstico</strong> los conserva Sentry por un periodo limitado, conforme a sus propias prácticas de conservación, y se usan solo para investigar y corregir problemas de estabilidad.</li><li>Los <strong>datos en el dispositivo</strong> permanecen hasta que borres la App o limpies sus datos.</li>",
      "priv.8.h2": "8. Transferencias internacionales de datos",
      "priv.8.p1": "Los proveedores de servicios que usa la App pueden tratar y almacenar datos en servidores ubicados fuera de tu país, incluido Estados Unidos. Cuando los datos se transfieren internacionalmente, esos proveedores se apoyan en salvaguardas adecuadas (como las Cláusulas Contractuales Tipo de la Comisión Europea). Los datos de analítica se procesan en los servidores de Mixpanel ubicados en la UE.",
      "priv.9.h2": "9. Privacidad de los menores",
      "priv.9.p1": "Baseball at Cards no está dirigido a menores de 13 años (o la edad mínima que exija tu país), y no recopilo conscientemente información personal de menores. La App solo recopila analíticas anónimas y datos de compra, y no solicita datos personales a nadie. Si crees que un menor proporcionó información a través de la App de una forma que te preocupa, contáctame y lo atenderé.",
      "priv.10.h2": "10. Tus derechos",
      "priv.10.p1": "Según dónde vivas, podrías tener derechos sobre tu información personal, incluidos el derecho de acceder, corregir, eliminar o restringir su tratamiento, y el derecho a oponerte al tratamiento o solicitar la portabilidad (conforme al RGPD), o el derecho a saber, eliminar y oponerte a la \"venta\" de tu información (conforme a la Ley de Privacidad del Consumidor de California). No vendo información personal.",
      "priv.10.callout": "<strong>Ten en cuenta:</strong> Como la App no usa cuentas y los identificadores de analítica y de compra son anónimos, normalmente no tengo forma de vincular los datos recopilados contigo por tu nombre. Para atender una solicitud, es posible que necesite que me proporciones información específica (como un recibo de compra o un ID de transacción, o un identificador de dispositivo) para poder localizar los registros correspondientes. Cuando no pueda reidentificar los datos de forma razonable, algunas solicitudes podrían no ser viables.",
      "priv.10.p2": "Para ejercer cualquiera de estos derechos, escribe a <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>.",
      "priv.11.h2": "11. Seguridad",
      "priv.11.p1": "Me apoyo en proveedores de servicios reconocidos (Apple, Mixpanel, RevenueCat, Sentry) que mantienen prácticas de seguridad estándar de la industria para proteger los pocos datos que trata la App. Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro, y no puedo garantizar una seguridad absoluta.",
      "priv.12.h2": "12. Cambios a este aviso",
      "priv.12.p1": "Puedo actualizar este Aviso de Privacidad de vez en cuando. Cuando lo haga, cambiaré la fecha de \"Última actualización\" de arriba y publicaré la nueva versión en el sitio web de la App. Los cambios importantes se destacarán cuando sea posible. El uso continuado de la App después de que un cambio entre en vigor constituye la aceptación del aviso actualizado.",
      "priv.13.h2": "13. Contacto",
      "priv.13.p1": "Si tienes preguntas sobre este Aviso de Privacidad o sobre cómo la App maneja tu información, contacta a:",
      "priv.13.p2": "<strong>Arnau Tresserras</strong><br />Correo: <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>"
    },

    "ja": {
      "meta.title.home": "Baseball at Cards — 野球ローグライク・カードゲーム",
      "meta.desc.home": "Baseball at Cards は一人用の野球ローグライク・カードゲーム。ロースターを組み、すべてのボスを倒し、ランを生き延びよう。iPhone・iPad で無料プレイ。",
      "meta.title.privacy": "プライバシーポリシー — Baseball at Cards",
      "meta.desc.privacy": "iOS ゲーム Baseball at Cards のプライバシーポリシー。アカウント登録なし、氏名やメールアドレスも不要。匿名の分析データと購入処理に必要な情報のみを扱います。",
      "meta.title.support": "サポート — Baseball at Cards",
      "meta.desc.support": "Baseball at Cards のサポートとよくある質問。購入、アンロックの復元、トラブルシューティング、開発者への問い合わせについて。",
      "meta.title.credits": "クレジット — Baseball at Cards",
      "meta.desc.credits": "Baseball at Cards のクレジット。開発体制と、ゲームで使用している AI 生成のアート・オーディオについての説明。",
      "nav.home": "ホーム",
      "nav.support": "サポート",
      "nav.privacy": "プライバシー",
      "foot.privacy": "プライバシーポリシー",
      "foot.credits": "クレジット",
      "foot.contact": "お問い合わせ",
      "foot.copy": "© 2026 Arnau Tresserras. All rights reserved.",
      "hero.eyebrow": "◆ iOS で配信中 ◆",
      "hero.lead": "一枚ずつ配られる、野球ローグライク。",
      "hero.tagline": "ルートを選び、打線を組んで、フェンスの向こうへ振り抜こう。すべてのボスを倒し、選手を仲間にして、一度のランがどこまで続くかを確かめよう——同じランは二つとない。",
      "cta.store.pre": "今すぐ",
      "cta.learn": "詳しく見る",
      "tc.rookie": "ルーキーカード",
      "tc.sub": "一人用 · ローグライク",
      "tc.stat.runs": "ラン",
      "tc.stat.unlock": "買い切り",
      "tc.stat.subs": "定額課金",
      "tc.stat.ios": "iPhone・iPad",
      "play.kicker": "◆ プレイボール ◆",
      "play.title": "遊びかた",
      "play.sub": "一球一球がカード。ランのたびにマップは新しく。レギュラーシーズンを進み、プレーオフに備え、自分の打線がどこまで行けるかを見届けよう。",
      "f1.title": "タップかドラッグでプレイ",
      "f1.body": "投球、スイング、盗塁、守備——すべては手札のカード。カウントを読み、カードを選び、狙いどおりに決めよう。余計な操作はなし、あるのは野球だけ。",
      "f2.title": "自分のルートを選ぶ",
      "f2.body": "ランごとに、試合・ボス・ショップ・イベントが枝分かれするマップが広がる。安全に稼ぐか、強い仲間を狙ってボス連戦に挑むか——ルートはあなた次第。",
      "f3.title": "打線を編成する",
      "f3.body": "十数種類の選手アーキタイプから仲間を集めよう——長距離砲、スモールボールの職人、四球を選ぶ我慢強い打者、カウントを支配する打者。デッキのカードはすべて、選んだ九人の打者から生まれる。",
      "f4.title": "一癖あるボスたち",
      "f4.body": "エースはみなルールを曲げてくる——スタミナを隠す者、三振で回復する者、あなたのカードを伏せて配る者。相性を読み、対抗策を編成しよう。",
      "f5.title": "稼いで、使う",
      "f5.body": "勝負に勝ってピーナッツを貯め、ショップで本当に必要な選手と契約しよう。決勝前に不安なロースターを立て直せる唯一の場所だ。",
      "f6.title": "無料で始められる",
      "f6.body": "無料のサンプルゲームはいつでもプレイ可能。買い切りの一度きりの購入で、Survival Run が無制限にアンロックされます。定額課金はありません。",
      "new.kicker": "◆ 1.2 の新要素 ◆",
      "new.title": "毎日ひとつ、全員共通のラン",
      "new.sub": "バージョン 1.2 では、デイリーゲーム、オールスター入りのパック、新ボス 5 人が登場。決勝ボスには The Gold Glove が加わります。",
      "n1.title": "デイリーラン",
      "n1.body": "毎日ひとつ、全プレイヤー共通の新しいラン（Daily Run）。マップも、最初のパックも、ラン・ルールも全員同じです。挑戦は 1 回きり。無料版では 7 日ごとに、買い切りのフルゲームなら毎日プレイできます。Game Center が必要です。",
      "n2.title": "ラン・ルール",
      "n2.body": "各デイリーランでは、Deep Fences から Pitcher’s Ump まで、13 種類の過酷なルール（Run Rule）のうちひとつがゲームを変化させます。対戦相手それぞれの固有ルールに加えて適用されます。",
      "n3.title": "Game Center",
      "n3.body": "デイリーランの結果はデイリーリーダーボードに、すべてのランは歴代ベストスコア（Best Score）のリーダーボードに記録されます。フレンドに挑戦して、その日のスコアを競いましょう。全 21 個の実績が同期し、うち 2 個は新規です。",
      "n4.title": "パックとオールスター",
      "n4.body": "新戦力は、プロ（Pro）とオールスター（All-Star）のパックで登場します。配る前の投球が、パックの中身を教えてくれます。フェンスを越える打球はオールスターの証です。",
      "shots.kicker": "◆ インスタントリプレイ ◆",
      "shots.title": "スクリーンショット",
      "shots.sub": "ダグアウトからの眺め。",
      "shot1.alt": "Baseball at Cards でホームランを打つ場面",
      "shot2.alt": "基本のゲームプレイ——打席でカードを使う場面",
      "shot3.alt": "ルールを曲げるボスの特殊能力",
      "shot4.alt": "枝分かれするランのマップ",
      "shot5.alt": "ピーナッツを使うショップ画面",
      "shot6.alt": "新しい選手アーキタイプを仲間にする場面",
      "sup.h1": "サポート",
      "sup.intro": "Baseball at Cards でお困りですか。ここでほとんどの疑問にお答えしています。見つからない場合は、お気軽にご連絡ください。",
      "sup.contact.callout": "<strong>お問い合わせ:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br /><strong>2〜3 営業日</strong>以内の返信を心がけています。Baseball at Cards は個人開発のゲームです。ご理解に感謝します。",
      "sup.quick.h2": "よくある質問",
      "sup.unlock.h3": "フルゲームをアンロックするには？",
      "sup.unlock.p1": "Baseball at Cards は無料でダウンロードでき、いつでも遊べる無料の<strong>サンプルゲーム</strong>（固定のボス戦と既定のロースター）が含まれています。",
      "sup.unlock.p2": "フルゲーム——すべてのボスを倒し、新しい選手を仲間にし、ロースターを育てる無制限の <strong>Survival Run</strong>——は、<strong>一度きりのアプリ内課金</strong>でアンロックされます。定額課金や継続課金は一切ありません。一度購入すれば、ずっとあなたのものです。",
      "sup.unlock.p3": "アンロック方法: アプリを開き、<strong>Play Survival Run</strong>（サバイバルランをプレイ）をタップして、購入の案内に従ってください。",
      "sup.locked.h3": "購入したのにロックされたままです。どうすればいいですか？",
      "sup.locked.p1": "これは通常、購入の復元が必要なケースです。アプリの再インストール後、新しい端末への機種変更後、または一時的な通信の問題のあとに起こります。",
      "sup.locked.list": "<li>アプリを開きます。</li><li>メインメニューで <strong>Restore Purchase</strong>（購入の復元）をタップします。</li><li>購入時と<strong>同じ Apple ID</strong> でサインインしていることを確認してください。</li>",
      "sup.locked.p2": "追加料金なしで購入が復元されます。それでもアンロックされない場合は、<a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> までメールでご連絡ください。購入日が分かれば併せてお知らせください。",
      "sup.device.h3": "端末を買い替えた／アプリを入れ直しました。もう一度支払いが必要ですか？",
      "sup.device.p1": "いいえ。フルゲームのアンロックは Apple ID に紐づいています。アプリをインストールし、メインメニューで <strong>Restore Purchase</strong>（購入の復元）をタップして、購入時と同じ Apple ID でサインインしていることを確認してください。",
      "sup.refund.h3": "返金をリクエストするには？",
      "sup.refund.p1": "App Store での購入の返金は、私ではなく Apple が対応します。リクエストするには <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a> にアクセスし、Apple ID でサインインして、購入履歴から Baseball at Cards を選び、手順に従ってください。ご希望であれば私にもメールをいただければ、できる範囲でお手伝いします。",
      "sup.trouble.h2": "トラブルシューティング",
      "sup.crash.h3": "ゲームが落ちる・起動しない",
      "sup.crash.p1": "次の手順を順番にお試しください。",
      "sup.crash.list": "<li>アプリを完全に終了し、もう一度開く。</li><li>端末のソフトウェアが最新であることを確認する。</li><li>App Store で Baseball at Cards が最新バージョンかどうかを確認する。</li><li>端末を再起動する。</li>",
      "sup.crash.p2": "それでも解決しない場合は、下記の情報を添えて <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> までメールでご連絡ください。調査いたします。",
      "sup.bug.h3": "不具合の報告",
      "sup.bug.p1": "不具合をご報告いただく際は、次の情報があると大変助かります。",
      "sup.bug.list": "<li>端末のモデル（例: iPhone 14、iPad Air）。</li><li>iOS のバージョン（設定 → 一般 → 情報 → システムバージョン）。</li><li>ご利用中の Baseball at Cards のバージョン。</li><li>何が起きたか、どうなると想定していたかの説明。可能であれば再現手順も。</li><li>関係する場合はスクリーンショットや画面収録。</li>",
      "sup.req.h2": "動作環境",
      "sup.req.p1": "Baseball at Cards は iPhone と iPad で動作します。快適にお楽しみいただくため、端末を最近のバージョンの iOS/iPadOS に更新し、App Store から最新版のアプリをインストールしてください。",
      "sup.privacy.h2": "プライバシー",
      "sup.privacy.p1": "アプリが収集するデータとその取り扱いについては、<a href=\"privacy.html\">プライバシーポリシー</a>をご覧ください。要点は、アカウント登録なし、氏名やメールアドレス不要、匿名の分析データと購入処理に必要な情報のみ、ということです。",
      "sup.more.h2": "まだ解決しませんか？",
      "sup.more.p1": "<a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> までメールをお送りください。できるだけ早くお返事します。",
      "cred.h1": "クレジット",
      "cred.intro": "Baseball at Cards は個人開発者 Arnau Tresserras が制作しています。完成までに力を貸してくれたものをご紹介します。",
      "cred.dev.h2": "開発",
      "cred.dev.p1": "デザイン、プログラミング、ゲームディレクション: Arnau Tresserras。",
      "cred.art.h2": "アート・オーディオ",
      "cred.art.p1": "アプリアイコン、スプラッシュ画面、選手アーキタイプのスプライト、スタジアム・フィールドの背景は、<strong>AI 画像生成ツール</strong>の助けを借りて制作しました。一部の効果音と環境音は、<strong>AI 音声生成ツール</strong>の助けを借りて制作しました。いずれもその後、ゲームの雰囲気に合うよう手作業で選定・編集・組み込みを行っています。",
      "cred.q.h2": "ご質問",
      "cred.q.p1": "ゲーム内のアセットについてご質問がある場合は、<a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> までメールでお問い合わせください。",
      "priv.h1": "プライバシーポリシー",
      "priv.meta": "<strong>アプリ:</strong> Baseball at Cards &nbsp;·&nbsp; <strong>開発者:</strong> Arnau Tresserras &nbsp;·&nbsp; <strong>連絡先:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br /><strong>発効日:</strong> 2026年6月28日 &nbsp;·&nbsp; <strong>最終更新日:</strong> 2026年10月7日",
      "priv.langnote": "本ポリシーは英語・スペイン語・日本語・韓国語で公開しています。<strong>正文は英語版</strong>です。翻訳版との間に相違がある場合は、英語の本文が優先します。",
      "priv.1.h2": "1. 概要",
      "priv.1.p1": "Baseball at Cards（以下「本アプリ」「本ゲーム」）は、個人開発者である Arnau Tresserras（以下「私」）が開発・提供する一人用の野球カードゲームです。本プライバシーポリシーでは、本アプリが収集する情報、その利用方法、およびお客様が選択できる事項について説明します。",
      "priv.1.p2": "<strong>要点:</strong> 本アプリにはユーザーアカウントがなく、氏名、メールアドレス、その他お客様を直接特定する情報を求めることは一切ありません。収集するのは匿名のゲームプレイ分析データと、アプリ内課金の処理に必要な情報のみです。私はお客様のデータを販売しません。",
      "priv.1.p3": "本ポリシーに同意いただけない場合は、本アプリのご利用をお控えください。",
      "priv.2.h2": "2. 本アプリが収集する情報",
      "priv.2.1.h3": "2.1 収集しない情報",
      "priv.2.1.list": "<li>アカウント、ログイン、会員登録を求めることも提供することも<strong>ありません</strong>。</li><li>氏名、メールアドレス、電話番号、住所を収集<strong>しません</strong>。</li><li>正確な位置情報も、おおよその位置情報も収集<strong>しません</strong>。</li><li>連絡先、写真、マイク、カメラにアクセス<strong>しません</strong>。</li><li>クレジットカード情報や銀行口座情報を収集<strong>しません</strong>（§2.3 参照）。</li>",
      "priv.2.2.h3": "2.2 分析データ（Mixpanel 経由）",
      "priv.2.2.p1": "本ゲームがどのようにプレイされているかを把握し改善するため、本アプリは第三者の分析サービスである <strong>Mixpanel</strong> を利用しています。Mixpanel は次の情報を収集します。",
      "priv.2.2.list": "<li>Mixpanel がランダムに生成する<strong>匿名の端末識別子</strong>。現実のお客様の身元とは結び付いていません。</li><li><strong>ゲームプレイのイベント</strong>——たとえば、ランの開始と終了、ボス戦の開始と勝利、使用したカード、スイング、ヒット、アウト、試合結果など。</li><li><strong>アプリ内課金に関するアクティビティ</strong>——購入画面が表示されたかどうかとその表示元、購入が開始・完了・失敗・キャンセルされたかどうか、復元によって以前の購入が見つかったかどうか、フルゲームがアンロックされているかどうか。支払いや取引の詳細は含まれず、RevenueCat や Apple が保持する購入記録とも結び付いていません。</li><li>それらのイベントに付随する<strong>技術的・文脈的な属性</strong>。端末の OS とモデル、アプリのバージョン、イベントのタイムスタンプなど。</li>",
      "priv.2.2.p2": "分析データは Mixpanel の<strong>欧州連合（EU）のサーバー</strong>（<code>api-eu.mixpanel.com</code>）で処理されます。",
      "priv.2.3.h3": "2.3 アプリ内課金のデータ（RevenueCat および Apple 経由）",
      "priv.2.3.p1": "Baseball at Cards は無料でダウンロードできます。フルゲームは一度きりのアプリ内課金でアンロックできます。購入は <strong>Apple の App Store</strong> を通じて処理され、第三者の購入管理サービスである <strong>RevenueCat</strong> を用いて管理されます。",
      "priv.2.3.list": "<li>決済そのものは <strong>Apple</strong> が処理します。私がお客様のカード番号や請求情報を受け取ったり保存したりすることは一切ありません。</li><li><strong>RevenueCat</strong> は、購入の検証と復元に必要な情報——<strong>匿名のアプリユーザー識別子</strong>、購入・取引のレシート、購入済み製品、および基本的な端末情報（端末の種類、OS、ストアが報告する国・地域など）——を受け取り保存します。これらはお客様の氏名やメールアドレスとは結び付いていません。</li>",
      "priv.2.3.p2": "これらの情報は、購入いただいたコンテンツを提供すること、過去の購入を復元できるようにすること、および不正利用を防止することのみに使用されます。",
      "priv.2.4.h3": "2.4 クラッシュ・診断データ（Sentry 経由）",
      "priv.2.4.p1": "本ゲームを安定して動作させ、問題を修正するため、本アプリは第三者のクラッシュレポート・診断サービスである <strong>Sentry</strong> を利用しています。本アプリがクラッシュしたりエラーが発生したりした際、Sentry は次の情報を収集します。",
      "priv.2.4.list": "<li><strong>クラッシュ・エラーレポート</strong>——エラーの種類やスタックトレースなどの技術的な診断情報、およびその時点でアプリが何をしていたかを示す構造化された診断ログ。</li><li><strong>安定性（リリースヘルス）データ</strong>——各リリースのクラッシュ発生率を測定するために用いる、匿名のアプリセッションの開始・終了シグナル。</li><li><strong>技術的・文脈的な属性</strong>——端末のモデルと OS、アプリのバージョン、リリース／アップデートのチャンネルなど。</li>",
      "priv.2.4.p2": "Sentry はレポートをグループ化するためにランダム生成の識別子を使用します。本アプリがこのデータにお客様の氏名、メールアドレス、その他現実の身元を付加することは<strong>ありません</strong>。このデータはクラッシュの診断と安定性の改善のみに使用され、広告目的で使用されることはありません。",
      "priv.2.5.h3": "2.5 端末内にのみ保存される情報",
      "priv.2.5.p1": "本アプリは、フルゲームがアンロック済みかどうかを記憶するため、端末内（ローカルストレージ）に小さなフラグを保存します。起動のたびに確認し直さずに済むようにするためのものです。この情報は端末内にとどまり、私に送信されることはありません。",
      "priv.2.6.h3": "2.6 本ウェブサイト（プロモーション・サポート・法的ページ）",
      "priv.2.6.p1": "お客様が今ご覧になっているページ——プロモーション用のホームページ、本プライバシーポリシー、サポートページ、クレジットページ——は本アプリのウェブサイトの一部であり、本アプリ自体とは別のものです。これらのページの訪問者数と流入元（たとえば App Store の掲載ページから来たかどうか）を把握するため、本サイトはプライバシー重視で<strong>クッキーを使用しない</strong>分析サービス <strong>Umami</strong> を利用しています。",
      "priv.2.6.list": "<li>Umami はクッキーを使用<strong>せず</strong>、お客様の端末に識別子を保存<strong>しません</strong>。</li><li>収集するのは<strong>集計された匿名の情報</strong>のみです。ページビュー、参照元のサイトやソース（たとえば Apple の App Store）、おおよその国、端末・ブラウザの一般的な種別などです。これらでお客様を特定することはできず、個人プロファイルも作成されません。</li><li>訪問者が<strong>「App Store でダウンロード」</strong>ボタンをタップした回数を、匿名の集計値として記録します。サイトからストアへどれだけの方が進んだかを把握するためです。</li>",
      "priv.2.6.p2": "この分析は匿名かつクッキー不使用であるため、クッキー同意バナーは必要ありません。それでもブラウザのトラッキング防止機能やコンテンツブロック設定でブロックすることは可能です。Umami のプライバシーに関する情報は <a href=\"https://umami.is/privacy\">umami.is/privacy</a> をご覧ください。",
      "priv.3.h2": "3. 情報の利用方法",
      "priv.3.p1": "上記の情報は次の目的で利用します。",
      "priv.3.list": "<li>本ゲームを運営し、購入・アンロックの状態を記憶するため。</li><li>アプリ内課金の処理および復元のため。</li><li>本ゲームがどのようにプレイされているかを全体として把握し、ゲーム性、バランス、安定性を改善するため。</li><li>技術的な問題を診断するため。</li>",
      "priv.3.p2": "これらの情報を広告プロファイルの作成に利用することは<strong>ありません</strong>。また、本アプリは第三者の広告を表示しません。",
      "priv.4.h2": "4. 処理の法的根拠（EEA／英国のユーザー）",
      "priv.4.p1": "欧州経済領域（EEA）または英国にお住まいの場合、私は EU 一般データ保護規則（GDPR）の以下の法的根拠に基づいてお客様の情報を処理します。",
      "priv.4.list": "<li><strong>正当な利益</strong>（第6条1項(f)）——本ゲームの把握と改善のために用いる匿名の分析、および安定性維持のために用いるクラッシュレポートと診断について。</li><li><strong>契約の履行</strong>（第6条1項(b)）——お客様が求めたアプリ内課金の処理および復元について。</li>",
      "priv.5.h2": "5. 第三者サービス提供者",
      "priv.5.p1": "本アプリは以下の第三者を利用しており、各社はそれぞれのプライバシーポリシーに基づいてデータを処理します。",
      "priv.5.th.provider": "提供者",
      "priv.5.th.purpose": "目的",
      "priv.5.th.policy": "プライバシーポリシー",
      "priv.5.apple": "アプリの配信および決済処理",
      "priv.5.mixpanel": "匿名のゲームプレイ分析",
      "priv.5.revenuecat": "アプリ内課金の管理およびレシート検証",
      "priv.5.sentry": "匿名のクラッシュレポートおよび安定性の診断",
      "priv.5.umami": "本ウェブサイト（本アプリではありません）向けの、クッキー不使用・匿名の分析",
      "priv.5.p2": "これらの提供者が各自のサービスでデータを収集したのちに、それをどのように処理するかを私が管理することはできません。詳細は各社のポリシーをご確認ください。",
      "priv.6.h2": "6. データの共有と販売",
      "priv.6.p1": "私はお客様の個人情報を販売<strong>しません</strong>。また、本アプリの機能を提供するために私に代わってデータを処理する §5 記載のサービス提供者を除き、第三者と共有<strong>しません</strong>。法令または有効な法的要請により義務付けられる場合には、情報を開示することがあります。",
      "priv.7.h2": "7. データの保持",
      "priv.7.list": "<li><strong>分析データ</strong>は、本ゲームの把握と改善に有用である限り、Mixpanel 自身の保持方針に従って Mixpanel が保持します。</li><li><strong>購入記録</strong>は、権利の管理、復元への対応、税務・会計上の義務の履行、不正防止に必要な期間、RevenueCat および Apple が保持します。</li><li><strong>クラッシュ・診断データ</strong>は、Sentry 自身の保持方針に従い限られた期間 Sentry が保持し、安定性の問題の調査と修正のみに使用されます。</li><li><strong>端末内のデータ</strong>は、本アプリを削除するか、そのデータを消去するまで残ります。</li>",
      "priv.8.h2": "8. データの国際移転",
      "priv.8.p1": "本アプリが利用するサービス提供者は、米国を含むお客様の国外に所在するサーバーでデータを処理・保存する場合があります。データが国際的に移転される場合、これらの提供者は適切な保護措置（欧州委員会の標準契約条項など）に依拠します。分析データは Mixpanel の EU 所在のサーバーで処理されます。",
      "priv.9.h2": "9. 子どものプライバシー",
      "priv.9.p1": "Baseball at Cards は 13 歳未満（またはお住まいの国で定められた最低年齢未満）の子どもを対象としておらず、私が子どもの個人情報を意図的に収集することはありません。本アプリが収集するのは匿名の分析データと購入データのみで、誰に対しても個人情報を求めることはありません。お子様が本アプリを通じて情報を提供したことについてご懸念がある場合は、ご連絡いただければ対応いたします。",
      "priv.10.h2": "10. お客様の権利",
      "priv.10.p1": "お住まいの地域によっては、個人情報に関する権利——アクセス、訂正、削除、処理の制限を求める権利、処理に異議を申し立てる権利やデータポータビリティを求める権利（GDPR に基づく）、あるいは情報の「販売」について知り、削除し、オプトアウトする権利（カリフォルニア州消費者プライバシー法に基づく）——を有する場合があります。私は個人情報を販売していません。",
      "priv.10.callout": "<strong>ご注意:</strong> 本アプリはアカウントを使用せず、分析および購入の識別子は匿名であるため、収集したデータをお客様の氏名と結び付ける手段は通常ありません。ご要望に対応するため、該当する記録を特定できるよう、具体的な情報（購入レシートや取引 ID、端末識別子など）のご提供をお願いする場合があります。合理的な範囲でデータを再特定できない場合、ご要望にお応えできないことがあります。",
      "priv.10.p2": "これらの権利を行使されたい場合は、<a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a> までメールでご連絡ください。",
      "priv.11.h2": "11. セキュリティ",
      "priv.11.p1": "本アプリが扱う限られたデータを保護するため、業界標準のセキュリティ対策を維持している信頼できるサービス提供者（Apple、Mixpanel、RevenueCat、Sentry）を利用しています。ただし、通信や保存の方法に完全に安全なものは存在せず、絶対的な安全性を保証することはできません。",
      "priv.12.h2": "12. 本ポリシーの変更",
      "priv.12.p1": "本プライバシーポリシーは随時更新することがあります。更新の際は上記の「最終更新日」を改め、新しいバージョンを本アプリのウェブサイトに掲載します。重要な変更については、可能な範囲で明示します。変更の発効後も本アプリを継続してご利用いただく場合、更新後のポリシーに同意したものとみなされます。",
      "priv.13.h2": "13. お問い合わせ",
      "priv.13.p1": "本プライバシーポリシーや、本アプリによる情報の取り扱いについてご質問がある場合は、こちらまでご連絡ください。",
      "priv.13.p2": "<strong>Arnau Tresserras</strong><br />メール: <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>"
    },

    "ko": {
      "meta.title.home": "Baseball at Cards — 야구 로그라이크 카드 게임",
      "meta.desc.home": "Baseball at Cards는 싱글 플레이 야구 로그라이크 카드 게임입니다. 로스터를 짜고, 모든 보스를 쓰러뜨리고, 런에서 살아남으세요. iPhone과 iPad에서 무료로 즐기세요.",
      "meta.title.privacy": "개인정보 처리방침 — Baseball at Cards",
      "meta.desc.privacy": "iOS 게임 Baseball at Cards의 개인정보 처리방침. 계정도, 이름이나 이메일도 필요 없습니다. 익명 분석 데이터와 구매 처리에 필요한 정보만 사용합니다.",
      "meta.title.support": "지원 — Baseball at Cards",
      "meta.desc.support": "Baseball at Cards 지원 및 FAQ. 구매, 잠금 해제 복원, 문제 해결, 개발자 문의에 대한 도움말입니다.",
      "meta.title.credits": "크레딧 — Baseball at Cards",
      "meta.desc.credits": "Baseball at Cards 크레딧: 개발자 정보와 게임에 사용된 AI 생성 아트·오디오에 대한 안내입니다.",
      "nav.home": "홈",
      "nav.support": "지원",
      "nav.privacy": "개인정보",
      "foot.privacy": "개인정보 처리방침",
      "foot.credits": "크레딧",
      "foot.contact": "문의하기",
      "foot.copy": "© 2026 Arnau Tresserras. All rights reserved.",
      "hero.eyebrow": "◆ iOS에서 출시 ◆",
      "hero.lead": "한 장씩 뽑아 나가는 야구 로그라이크.",
      "hero.tagline": "경로를 짜고, 타순을 구성하고, 담장 너머로 힘껏 휘두르세요. 모든 보스를 쓰러뜨리고 선수를 영입해, 한 번의 런이 어디까지 갈 수 있는지 확인해 보세요. 같은 런은 두 번 나오지 않습니다.",
      "cta.store.pre": "지금 바로",
      "cta.learn": "자세히 보기",
      "tc.rookie": "루키 카드",
      "tc.sub": "싱글 플레이 · 로그라이크",
      "tc.stat.runs": "런",
      "tc.stat.unlock": "단건 결제",
      "tc.stat.subs": "구독",
      "tc.stat.ios": "iPhone·iPad",
      "play.kicker": "◆ 플레이 볼 ◆",
      "play.title": "플레이 방식",
      "play.sub": "모든 투구가 카드입니다. 런마다 맵이 새로 만들어집니다. 정규 시즌을 헤쳐 나가고, 플레이오프를 준비하고, 당신의 타선이 어디까지 갈 수 있는지 확인하세요.",
      "f1.title": "탭하거나 드래그해서 플레이",
      "f1.body": "투구, 스윙, 도루, 수비 플레이가 모두 손에 든 카드입니다. 볼카운트를 읽고, 카드를 고르고, 그대로 실행하세요. 군더더기 없이, 오직 야구뿐입니다.",
      "f2.title": "경로는 당신의 선택",
      "f2.body": "런마다 경기, 보스, 상점, 이벤트가 갈래로 뻗은 맵이 펼쳐집니다. 안전하게 자금을 모을지, 더 좋은 영입을 노리고 보스 연전에 뛰어들지는 당신에게 달렸습니다.",
      "f3.title": "타선을 구성하세요",
      "f3.body": "열두 종류가 넘는 선수 아키타입 중에서 영입하세요. 거포, 스몰볼의 장인, 볼넷을 골라내는 참을성 있는 타자, 카운트를 지배하는 타자까지. 덱의 모든 카드는 당신이 고른 아홉 명의 타자에게서 나옵니다.",
      "f4.title": "한 수씩 숨긴 보스들",
      "f4.body": "에이스들은 저마다 규칙을 비틉니다. 체력을 숨기는 투수, 삼진으로 회복하는 투수, 당신의 카드를 뒤집어 나눠주는 투수까지. 상성을 읽고 맞설 카드를 구성하세요.",
      "f5.title": "벌고, 쓰고",
      "f5.body": "승부에서 이겨 땅콩을 모으고, 상점에서 정말 필요한 선수와 계약하세요. 결승 전에 불안한 로스터를 손볼 수 있는 유일한 곳입니다.",
      "f6.title": "무료로 시작",
      "f6.body": "무료 샘플 게임은 언제든 즐길 수 있습니다. 한 번의 단건 구매로 무제한 Survival Run을 잠금 해제하세요. 구독은 없습니다.",
      "new.kicker": "◆ 1.2 신규 ◆",
      "new.title": "매일 하나, 모두에게 똑같은 런",
      "new.sub": "버전 1.2에서는 데일리 게임, 올스타가 든 팩, 새 보스 5명이 추가되고, 결승 보스에는 The Gold Glove가 합류합니다.",
      "n1.title": "데일리 런",
      "n1.body": "매일 새로운 런(Daily Run)이 하나씩, 모든 플레이어에게 똑같이 주어집니다. 같은 맵, 같은 시작 팩, 같은 런 룰. 기회는 단 한 번입니다. 무료 플레이어는 7일마다, 정식 버전을 한 번 구매하면 매일 플레이할 수 있습니다. Game Center가 필요합니다.",
      "n2.title": "런 룰",
      "n2.body": "각 데일리 런에는 Deep Fences부터 Pitcher’s Ump까지, 13가지 가혹한 룰(Run Rule) 중 하나가 적용되어 게임을 뒤흔듭니다. 상대 투수마다 가진 고유 규칙에 더해 적용됩니다.",
      "n3.title": "Game Center",
      "n3.body": "데일리 런 기록은 일일 리더보드에, 모든 런은 역대 최고 점수(Best Score) 리더보드에 올라갑니다. 친구에게 도전해 오늘의 점수를 겨뤄 보세요. 21개의 업적이 모두 동기화되며, 그중 2개는 신규입니다.",
      "n4.title": "팩과 올스타",
      "n4.body": "이제 영입 선수는 프로(Pro)와 올스타(All-Star) 팩으로 등장하며, 카드를 나누기 전의 투구가 팩의 내용을 알려 줍니다. 담장을 넘기는 타구는 올스타라는 뜻입니다.",
      "shots.kicker": "◆ 인스턴트 리플레이 ◆",
      "shots.title": "스크린샷",
      "shots.sub": "더그아웃에서 본 풍경.",
      "shot1.alt": "Baseball at Cards에서 홈런을 치는 장면",
      "shot2.alt": "핵심 플레이 — 타석에서 카드를 사용하는 장면",
      "shot3.alt": "규칙을 비트는 보스의 특수 능력",
      "shot4.alt": "갈래로 뻗은 런 맵",
      "shot5.alt": "땅콩을 사용하는 상점 화면",
      "shot6.alt": "새로운 선수 아키타입을 영입하는 장면",
      "sup.h1": "지원",
      "sup.intro": "Baseball at Cards에 대해 도움이 필요하신가요? 제대로 찾아오셨습니다. 대부분의 질문은 아래에서 답을 찾으실 수 있습니다. 원하는 내용이 없다면 언제든 연락 주세요.",
      "sup.contact.callout": "<strong>문의:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br /><strong>영업일 기준 2~3일</strong> 이내에 답변드리려 하고 있습니다. Baseball at Cards는 1인 개발 게임이니 조금만 기다려 주시면 감사하겠습니다.",
      "sup.quick.h2": "빠른 도움말",
      "sup.unlock.h3": "정식 버전은 어떻게 잠금 해제하나요?",
      "sup.unlock.p1": "Baseball at Cards는 무료로 내려받을 수 있으며, 언제든 즐길 수 있는 무료 <strong>샘플 게임</strong>(고정된 보스전과 지정된 로스터)이 포함되어 있습니다.",
      "sup.unlock.p2": "정식 버전 — 모든 보스를 쓰러뜨리고 새 선수를 영입하며 로스터를 키워 나가는 무제한 <strong>Survival Run</strong> — 은 <strong>단 한 번의 인앱 구매</strong>로 잠금 해제됩니다. 구독이나 정기 결제는 없습니다. 한 번 구매하면 계속 사용하실 수 있습니다.",
      "sup.unlock.p3": "잠금 해제 방법: 앱을 열고 <strong>Play Survival Run</strong>(서바이벌 런 플레이)을 누른 뒤 구매 안내를 따르세요.",
      "sup.locked.h3": "구매했는데 아직 잠겨 있습니다. 어떻게 해야 하나요?",
      "sup.locked.p1": "보통은 구매 내역을 복원해야 하는 경우입니다. 앱을 다시 설치했거나, 새 기기로 바꿨거나, 일시적인 네트워크 문제가 있었을 때 발생합니다.",
      "sup.locked.list": "<li>앱을 엽니다.</li><li>메인 메뉴에서 <strong>Restore Purchase</strong>(구매 복원)를 누릅니다.</li><li>게임을 구매할 때 사용한 <strong>동일한 Apple ID</strong>로 로그인되어 있는지 확인하세요.</li>",
      "sup.locked.p2": "추가 요금 없이 구매가 복원됩니다. 그래도 잠금이 풀리지 않으면 <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>으로 메일을 보내 주세요. 구매 날짜를 알고 계시다면 함께 알려 주시면 좋습니다.",
      "sup.device.h3": "기기를 바꾸거나 앱을 다시 설치했습니다. 다시 결제해야 하나요?",
      "sup.device.p1": "아닙니다. 정식 버전 잠금 해제는 Apple ID에 연결되어 있습니다. 앱을 설치한 뒤 메인 메뉴에서 <strong>Restore Purchase</strong>(구매 복원)를 누르고, 처음 구매할 때 사용한 것과 같은 Apple ID로 로그인되어 있는지 확인하세요.",
      "sup.refund.h3": "환불은 어떻게 요청하나요?",
      "sup.refund.p1": "App Store 구매에 대한 환불은 제가 아니라 Apple이 처리합니다. 요청하시려면 <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>에 접속해 Apple ID로 로그인한 뒤, 구매 내역에서 Baseball at Cards를 찾아 안내에 따라 진행하세요. 원하신다면 제게도 메일을 보내 주시면 가능한 선에서 도와드리겠습니다.",
      "sup.trouble.h2": "문제 해결",
      "sup.crash.h3": "게임이 종료되거나 실행되지 않습니다",
      "sup.crash.p1": "다음 순서대로 시도해 보세요.",
      "sup.crash.list": "<li>앱을 완전히 종료한 뒤 다시 실행합니다.</li><li>기기 소프트웨어가 최신 상태인지 확인합니다.</li><li>App Store에서 Baseball at Cards의 최신 버전을 사용 중인지 확인합니다.</li><li>기기를 재시동합니다.</li>",
      "sup.crash.p2": "그래도 문제가 계속되면 아래 정보를 담아 <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>으로 메일을 보내 주세요. 확인해 보겠습니다.",
      "sup.bug.h3": "버그 신고",
      "sup.bug.p1": "문제를 알려 주실 때 다음 정보를 함께 보내 주시면 큰 도움이 됩니다.",
      "sup.bug.list": "<li>기기 모델(예: iPhone 14, iPad Air).</li><li>iOS 버전(설정 → 일반 → 정보 → 소프트웨어 버전).</li><li>사용 중인 Baseball at Cards 버전.</li><li>무슨 일이 일어났고 무엇을 기대하셨는지에 대한 설명, 가능하다면 재현 방법.</li><li>관련이 있다면 스크린샷이나 화면 녹화.</li>",
      "sup.req.h2": "기기 요구 사항",
      "sup.req.p1": "Baseball at Cards는 iPhone과 iPad에서 실행됩니다. 가장 쾌적하게 즐기시려면 기기를 최신 iOS/iPadOS로 업데이트하고 App Store에서 최신 버전의 앱을 설치하세요.",
      "sup.privacy.h2": "개인정보",
      "sup.privacy.p1": "앱이 어떤 데이터를 수집하고 어떻게 다루는지는 <a href=\"privacy.html\">개인정보 처리방침</a>을 참고하세요. 요약하면, 계정도 없고 이름이나 이메일도 필요 없으며, 익명 분석 데이터와 구매 처리에 필요한 정보만 사용합니다.",
      "sup.more.h2": "아직 도움이 필요하신가요?",
      "sup.more.p1": "<a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>으로 메일을 보내 주시면 가능한 한 빨리 답변드리겠습니다.",
      "cred.h1": "크레딧",
      "cred.intro": "Baseball at Cards는 1인 개발자 Arnau Tresserras가 만들었습니다. 이 게임이 나오기까지 도움이 된 것들을 소개합니다.",
      "cred.dev.h2": "개발",
      "cred.dev.p1": "디자인, 프로그래밍, 게임 디렉션: Arnau Tresserras.",
      "cred.art.h2": "아트 및 오디오",
      "cred.art.p1": "앱 아이콘, 스플래시 화면, 선수 아키타입 스프라이트, 경기장·필드 배경은 <strong>AI 이미지 생성 도구</strong>의 도움을 받아 제작했습니다. 일부 효과음과 배경 사운드는 <strong>AI 오디오 생성 도구</strong>의 도움을 받아 제작했습니다. 이후 게임의 분위기에 맞도록 직접 선별하고 편집해 통합했습니다.",
      "cred.q.h2": "궁금한 점이 있나요?",
      "cred.q.p1": "게임 내 에셋에 대해 궁금한 점이 있으시면 <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>으로 메일을 보내 주세요.",
      "priv.h1": "개인정보 처리방침",
      "priv.meta": "<strong>앱:</strong> Baseball at Cards &nbsp;·&nbsp; <strong>개발자:</strong> Arnau Tresserras &nbsp;·&nbsp; <strong>문의:</strong> <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a><br /><strong>시행일:</strong> 2026년 6월 28일 &nbsp;·&nbsp; <strong>최종 수정일:</strong> 2026년 10월 7일",
      "priv.langnote": "본 방침은 영어, 스페인어, 일본어, 한국어로 제공됩니다. <strong>영문판이 정본</strong>이며, 번역본이 영문과 다른 부분이 있는 경우 영문 원문이 우선합니다.",
      "priv.1.h2": "1. 개요",
      "priv.1.p1": "Baseball at Cards(이하 \"본 앱\", \"본 게임\")는 개인 개발자 Arnau Tresserras(이하 \"개발자\")가 개발·배포하는 싱글 플레이 야구 카드 게임입니다. 본 개인정보 처리방침은 본 앱이 어떤 정보를 수집하고 이를 어떻게 사용하는지, 그리고 이용자에게 어떤 선택권이 있는지를 설명합니다.",
      "priv.1.p2": "<strong>요약하자면:</strong> 본 앱에는 사용자 계정이 없으며, 이름, 이메일 주소를 비롯해 이용자를 직접 식별할 수 있는 어떤 정보도 요구하지 않습니다. 수집하는 것은 익명의 게임 플레이 분석 데이터와 인앱 구매 처리에 필요한 정보뿐입니다. 개발자는 이용자의 데이터를 판매하지 않습니다.",
      "priv.1.p3": "본 방침에 동의하지 않으신다면 본 앱을 사용하지 말아 주세요.",
      "priv.2.h2": "2. 본 앱이 수집하는 정보",
      "priv.2.1.h3": "2.1 수집하지 않는 정보",
      "priv.2.1.list": "<li>계정, 로그인, 회원가입을 요구하거나 제공하지 <strong>않습니다</strong>.</li><li>이름, 이메일 주소, 전화번호, 주소를 수집하지 <strong>않습니다</strong>.</li><li>정확한 위치나 대략적인 위치를 수집하지 <strong>않습니다</strong>.</li><li>연락처, 사진, 마이크, 카메라에 접근하지 <strong>않습니다</strong>.</li><li>결제 카드나 금융 정보를 수집하지 <strong>않습니다</strong>(§2.3 참조).</li>",
      "priv.2.2.h3": "2.2 분석 데이터(Mixpanel 이용)",
      "priv.2.2.p1": "본 게임이 어떻게 플레이되는지 파악하고 개선하기 위해, 본 앱은 제3자 분석 서비스인 <strong>Mixpanel</strong>을 사용합니다. Mixpanel이 수집하는 항목은 다음과 같습니다.",
      "priv.2.2.list": "<li>Mixpanel이 무작위로 생성한 <strong>익명 기기 식별자</strong>. 실제 신원과 연결되지 않습니다.</li><li><strong>게임 플레이 이벤트</strong> — 예를 들어 런의 시작과 종료, 보스전 시작과 승리, 사용한 카드, 스윙, 안타, 아웃, 경기 결과 등.</li><li><strong>인앱 구매 활동</strong> — 구매 화면이 표시되었는지와 어디에서 열렸는지, 구매가 시작·완료·실패·취소되었는지, 복원 시 이전 구매가 확인되었는지, 전체 게임이 잠금 해제되었는지 여부. 결제나 거래 세부 정보는 포함되지 않으며, RevenueCat 또는 Apple이 보관하는 구매 기록과 연결되지 않습니다.</li><li>해당 이벤트에 함께 기록되는 <strong>기술적·맥락적 속성</strong> — 기기의 운영체제와 모델, 앱 버전, 이벤트 발생 시각 등.</li>",
      "priv.2.2.p2": "분석 데이터는 Mixpanel의 <strong>유럽연합(EU) 서버</strong>(<code>api-eu.mixpanel.com</code>)에서 처리됩니다.",
      "priv.2.3.h3": "2.3 인앱 구매 데이터(RevenueCat 및 Apple 이용)",
      "priv.2.3.p1": "Baseball at Cards는 무료로 내려받을 수 있습니다. 정식 버전은 단 한 번의 인앱 구매로 잠금 해제할 수 있습니다. 구매는 <strong>Apple의 App Store</strong>를 통해 처리되며, 제3자 구매 관리 서비스인 <strong>RevenueCat</strong>으로 관리됩니다.",
      "priv.2.3.list": "<li>결제 자체는 <strong>Apple</strong>이 처리합니다. 개발자는 이용자의 결제 카드 번호나 청구 정보를 받거나 저장하지 않습니다.</li><li><strong>RevenueCat</strong>은 구매를 검증하고 복원하는 데 필요한 정보를 수신·저장합니다. 여기에는 <strong>익명 앱 사용자 식별자</strong>, 구매 및 거래 영수증, 구매한 제품, 기본적인 기기 정보(기기 종류, 운영체제, 스토어가 보고하는 국가/지역 등)가 포함됩니다. 이는 이용자의 이름이나 이메일과 연결되지 않습니다.</li>",
      "priv.2.3.p2": "이 정보는 이용자가 결제한 콘텐츠를 제공하고, 이전 구매를 복원할 수 있게 하며, 부정 사용을 방지하는 목적으로만 사용됩니다.",
      "priv.2.4.h3": "2.4 오류 및 진단 데이터(Sentry 이용)",
      "priv.2.4.p1": "본 게임을 안정적으로 유지하고 문제를 수정하기 위해, 본 앱은 제3자 오류 보고·진단 서비스인 <strong>Sentry</strong>를 사용합니다. 본 앱이 비정상 종료되거나 오류가 발생하면 Sentry는 다음을 수집합니다.",
      "priv.2.4.list": "<li><strong>오류 및 예외 보고</strong> — 오류 유형과 스택 트레이스 같은 기술적 진단 정보, 그리고 그 시점에 앱이 무엇을 하고 있었는지에 대한 구조화된 진단 로그.</li><li><strong>안정성(릴리스 헬스) 데이터</strong> — 각 릴리스의 무오류 세션 비율을 측정하는 데 쓰이는 익명의 앱 세션 시작·종료 신호.</li><li><strong>기술적·맥락적 속성</strong> — 기기 모델과 운영체제, 앱 버전, 릴리스/업데이트 채널 등.</li>",
      "priv.2.4.p2": "Sentry는 보고를 묶기 위해 무작위로 생성된 식별자를 사용합니다. 본 앱은 이 데이터에 이용자의 이름, 이메일, 그 밖의 실제 신원을 덧붙이지 <strong>않습니다</strong>. 이 데이터는 오류를 진단하고 안정성을 개선하는 데에만 사용되며, 광고 목적으로는 결코 사용되지 않습니다.",
      "priv.2.5.h3": "2.5 기기에만 저장되는 정보",
      "priv.2.5.p1": "본 앱은 정식 버전이 잠금 해제되었는지 기억하기 위해 기기에 작은 표시 값을 로컬 저장소에 보관합니다. 실행할 때마다 다시 확인하지 않아도 되도록 하기 위한 것입니다. 이 정보는 기기에만 머무르며 개발자에게 전송되지 않습니다.",
      "priv.2.6.h3": "2.6 본 웹사이트(홍보·지원·법적 고지 페이지)",
      "priv.2.6.p1": "지금 보고 계신 페이지들 — 홍보용 홈페이지, 본 개인정보 처리방침, 지원 페이지, 크레딧 페이지 — 은 본 앱의 웹사이트에 속하며 본 앱 자체와는 별개입니다. 이 페이지들을 얼마나 많은 분이 방문하고 어디에서 유입되는지(예: App Store 등록 페이지) 파악하기 위해, 본 웹사이트는 개인정보 보호를 우선하는 <strong>쿠키 없는</strong> 분석 서비스 <strong>Umami</strong>를 사용합니다.",
      "priv.2.6.list": "<li>Umami는 쿠키를 사용하지 <strong>않으며</strong>, 이용자의 기기에 어떤 식별자도 저장하지 <strong>않습니다</strong>.</li><li>페이지 조회수, 유입된 사이트나 경로(예: Apple App Store), 대략적인 국가, 일반적인 기기·브라우저 종류 같은 <strong>집계된 익명</strong> 정보만 수집합니다. 이를 통해 이용자를 식별할 수 없으며 개인 프로필도 만들어지지 않습니다.</li><li>방문자가 <strong>\"App Store에서 다운로드\"</strong> 버튼을 누른 횟수를 익명의 집계 수치로 기록합니다. 사이트에서 스토어로 이동한 분이 얼마나 되는지 확인하기 위한 것입니다.</li>",
      "priv.2.6.p2": "이 분석은 익명이며 쿠키를 사용하지 않으므로 쿠키 동의 배너가 필요하지 않습니다. 그래도 원하신다면 브라우저의 추적 방지 기능이나 콘텐츠 차단 설정으로 차단하실 수 있습니다. Umami의 개인정보 관련 안내는 <a href=\"https://umami.is/privacy\">umami.is/privacy</a>에서 확인하세요.",
      "priv.3.h2": "3. 정보의 이용 방식",
      "priv.3.p1": "위에서 설명한 정보는 다음 목적으로 사용합니다.",
      "priv.3.list": "<li>본 게임을 운영하고 구매·잠금 해제 상태를 기억하기 위해.</li><li>인앱 구매를 처리하고 복원하기 위해.</li><li>본 게임이 전반적으로 어떻게 플레이되는지 파악하고 게임성, 밸런스, 안정성을 개선하기 위해.</li><li>기술적 문제를 진단하기 위해.</li>",
      "priv.3.p2": "이 정보를 광고 프로필 구축에 사용하지 <strong>않으며</strong>, 본 앱은 제3자 광고를 표시하지 않습니다.",
      "priv.4.h2": "4. 처리의 법적 근거(EEA/영국 이용자)",
      "priv.4.p1": "유럽경제지역(EEA) 또는 영국에 계신 경우, 개발자는 일반 개인정보 보호법(GDPR)의 다음 법적 근거에 따라 정보를 처리합니다.",
      "priv.4.list": "<li><strong>정당한 이익</strong>(제6조 제1항 (f)) — 본 게임을 파악하고 개선하기 위한 익명 분석, 그리고 안정성을 유지하기 위한 오류 보고와 진단.</li><li><strong>계약의 이행</strong>(제6조 제1항 (b)) — 이용자가 요청한 인앱 구매의 처리 및 복원.</li>",
      "priv.5.h2": "5. 제3자 서비스 제공업체",
      "priv.5.p1": "본 앱은 다음 제3자를 이용하며, 각 업체는 자체 개인정보 처리방침에 따라 데이터를 처리합니다.",
      "priv.5.th.provider": "제공업체",
      "priv.5.th.purpose": "목적",
      "priv.5.th.policy": "개인정보 처리방침",
      "priv.5.apple": "앱 배포 및 결제 처리",
      "priv.5.mixpanel": "익명 게임 플레이 분석",
      "priv.5.revenuecat": "인앱 구매 관리 및 영수증 검증",
      "priv.5.sentry": "익명 오류 보고 및 안정성 진단",
      "priv.5.umami": "본 웹사이트(앱이 아님)를 위한 쿠키 없는 익명 분석",
      "priv.5.p2": "이들 업체가 자사 서비스로 데이터를 수집한 이후 이를 어떻게 처리하는지는 개발자가 통제할 수 없습니다. 자세한 내용은 각 업체의 방침을 확인해 주세요.",
      "priv.6.h2": "6. 데이터 공유 및 판매",
      "priv.6.p1": "개발자는 이용자의 개인정보를 판매하지 <strong>않으며</strong>, 본 앱의 기능 제공을 위해 개발자를 대신해 데이터를 처리하는 §5의 서비스 제공업체를 제외하고는 제3자와 공유하지 <strong>않습니다</strong>. 법령이나 유효한 법적 요청에 따라 요구되는 경우에는 정보를 공개할 수 있습니다.",
      "priv.7.h2": "7. 데이터 보관",
      "priv.7.list": "<li><strong>분석 데이터</strong>는 본 게임을 파악하고 개선하는 데 유용한 기간 동안, Mixpanel 자체 보관 정책에 따라 Mixpanel이 보관합니다.</li><li><strong>구매 기록</strong>은 이용 권한을 관리하고, 복원을 지원하며, 세무·회계상 의무를 이행하고, 부정 사용을 방지하는 데 필요한 기간 동안 RevenueCat과 Apple이 보관합니다.</li><li><strong>오류 및 진단 데이터</strong>는 Sentry 자체 보관 정책에 따라 제한된 기간 동안 Sentry가 보관하며, 안정성 문제를 조사하고 수정하는 데에만 사용됩니다.</li><li><strong>기기 내 데이터</strong>는 본 앱을 삭제하거나 앱 데이터를 지울 때까지 남아 있습니다.</li>",
      "priv.8.h2": "8. 국가 간 데이터 이전",
      "priv.8.p1": "본 앱이 이용하는 서비스 제공업체는 미국을 포함해 이용자의 국가 밖에 위치한 서버에서 데이터를 처리·보관할 수 있습니다. 데이터가 국가 간에 이전되는 경우, 해당 업체는 적절한 보호 장치(예: 유럽연합 집행위원회의 표준계약조항)에 따릅니다. 분석 데이터는 Mixpanel의 EU 소재 서버에서 처리됩니다.",
      "priv.9.h2": "9. 아동의 개인정보",
      "priv.9.p1": "Baseball at Cards는 만 13세 미만(또는 해당 국가에서 정한 최소 연령 미만)의 아동을 대상으로 하지 않으며, 개발자는 아동의 개인정보를 고의로 수집하지 않습니다. 본 앱은 익명 분석 데이터와 구매 데이터만 수집하며 누구에게도 개인 정보를 요구하지 않습니다. 아동이 본 앱을 통해 정보를 제공한 것으로 우려되는 상황이 있다면 연락해 주시면 조치하겠습니다.",
      "priv.10.h2": "10. 이용자의 권리",
      "priv.10.p1": "거주 지역에 따라 개인정보에 관한 권리를 가질 수 있습니다. 여기에는 열람, 정정, 삭제, 처리 제한을 요구할 권리와 처리에 반대하거나 이동을 요청할 권리(GDPR에 따름), 또는 정보의 \"판매\"에 대해 알고, 삭제하고, 거부할 권리(캘리포니아 소비자 개인정보 보호법에 따름)가 포함됩니다. 개발자는 개인정보를 판매하지 않습니다.",
      "priv.10.callout": "<strong>참고:</strong> 본 앱은 계정을 사용하지 않고 분석 및 구매 식별자가 익명이기 때문에, 수집된 데이터를 이용자의 이름과 연결할 방법이 대개 없습니다. 요청을 처리하려면 관련 기록을 찾을 수 있도록 구체적인 정보(구매 영수증이나 거래 ID, 기기 식별자 등)를 제공해 주셔야 할 수 있습니다. 합리적인 범위에서 데이터를 재식별할 수 없는 경우 일부 요청은 처리하지 못할 수 있습니다.",
      "priv.10.p2": "이러한 권리를 행사하시려면 <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>으로 메일을 보내 주세요.",
      "priv.11.h2": "11. 보안",
      "priv.11.p1": "본 앱이 처리하는 제한된 데이터를 보호하기 위해, 업계 표준 보안 관행을 유지하는 신뢰할 수 있는 서비스 제공업체(Apple, Mixpanel, RevenueCat, Sentry)를 이용하고 있습니다. 다만 어떤 전송·저장 방식도 완벽하게 안전하지는 않으므로 절대적인 보안을 보장할 수는 없습니다.",
      "priv.12.h2": "12. 본 방침의 변경",
      "priv.12.p1": "본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 업데이트 시에는 위의 \"최종 수정일\"을 갱신하고 새 버전을 본 앱의 웹사이트에 게시합니다. 중요한 변경 사항은 가능한 범위에서 눈에 띄게 알려 드립니다. 변경이 시행된 후에도 본 앱을 계속 사용하시는 경우, 업데이트된 방침에 동의하신 것으로 봅니다.",
      "priv.13.h2": "13. 문의",
      "priv.13.p1": "본 개인정보 처리방침이나 본 앱의 정보 처리 방식에 대해 궁금한 점이 있으시면 아래로 문의해 주세요.",
      "priv.13.p2": "<strong>Arnau Tresserras</strong><br />이메일: <a href=\"mailto:arnautresserras@gmail.com\">arnautresserras@gmail.com</a>"
    }

  };

  var DEFAULT = "en";
  var LOCALES = [
    { code: "en",    label: "EN", name: "English" },
    { code: "es-MX", label: "ES", name: "Espanol (MX)" },
    { code: "ja",    label: "JA", name: "\u65e5\u672c\u8a9e" },
    { code: "ko",    label: "KO", name: "\ud55c\uad6d\uc5b4" }
  ];
  var STORAGE_KEY = "bac-lang";
  var CJK_FONTS = {
    ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap",
    ko: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap"
  };
  var ATTR_KEYS = [
    { attr: "content", data: "data-i18n-content" },
    { attr: "alt",     data: "data-i18n-alt" }
  ];

  var english = null;

  function codes() {
    return LOCALES.map(function (l) { return l.code; });
  }

  /* Map any BCP-47 tag onto a locale we actually ship. */
  function resolve(tag) {
    if (!tag) return null;
    var want = String(tag).toLowerCase();
    var exact = codes().filter(function (c) { return c.toLowerCase() === want; })[0];
    if (exact) return exact;
    var base = want.split("-")[0];
    // Any Spanish variant gets the Latin-American Spanish copy.
    if (base === "es") return "es-MX";
    return codes().filter(function (c) { return c.split("-")[0] === base; })[0] || null;
  }

  function stored() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function store(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* private mode */ }
  }

  function queryLang() {
    try {
      return new URLSearchParams(window.location.search).get("lang");
    } catch (e) {
      return null;
    }
  }

  function detect() {
    var fromQuery = resolve(queryLang());
    if (fromQuery) return fromQuery;

    var fromStorage = resolve(stored());
    if (fromStorage) return fromStorage;

    var prefs = navigator.languages || [navigator.language];
    for (var i = 0; i < prefs.length; i++) {
      var hit = resolve(prefs[i]);
      if (hit) return hit;
    }
    return DEFAULT;
  }

  function loadFont(lang) {
    var href = CJK_FONTS[lang];
    if (!href || document.querySelector("link[data-i18n-font='" + lang + "']")) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-i18n-font", lang);
    document.head.appendChild(link);
  }

  /* Snapshot the authored English so switching back is lossless. */
  function snapshot() {
    var en = {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      en[el.getAttribute("data-i18n")] = el.innerHTML;
    });
    ATTR_KEYS.forEach(function (spec) {
      document.querySelectorAll("[" + spec.data + "]").forEach(function (el) {
        en[el.getAttribute(spec.data)] = el.getAttribute(spec.attr);
      });
    });
    return en;
  }

  function apply(lang) {
    var dict = TRANSLATIONS[lang] || null;
    var source = dict || english;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = source[key];
      if (value === undefined) value = english[key];  // partial dict -> English
      if (value !== undefined) el.innerHTML = value;
    });

    ATTR_KEYS.forEach(function (spec) {
      document.querySelectorAll("[" + spec.data + "]").forEach(function (el) {
        var key = el.getAttribute(spec.data);
        var value = source[key];
        if (value === undefined) value = english[key];
        if (value !== undefined) el.setAttribute(spec.attr, value);
      });
    });

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    if (lang !== DEFAULT) loadFont(lang.split("-")[0]);
  }

  function renderSwitcher(active, onPick) {
    document.querySelectorAll("[data-lang-switcher]").forEach(function (host) {
      host.innerHTML = "";
      host.setAttribute("role", "group");
      host.setAttribute("aria-label", "Language");
      LOCALES.forEach(function (loc) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn" + (loc.code === active ? " active" : "");
        btn.textContent = loc.label;
        btn.title = loc.name;
        btn.lang = loc.code;
        btn.setAttribute("data-lang", loc.code);
        btn.setAttribute("aria-label", loc.name);
        btn.setAttribute("aria-pressed", loc.code === active ? "true" : "false");
        btn.addEventListener("click", function () { onPick(loc.code); });
        host.appendChild(btn);
      });
    });
  }

  /* Keep ?lang= in the address bar so a chosen language is shareable. */
  function syncUrl(lang) {
    if (!window.history || !window.history.replaceState) return;
    try {
      var url = new URL(window.location.href);
      if (lang === DEFAULT) url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.toString());
    } catch (e) { /* file:// and old browsers */ }
  }

  /* Carry the active language across the site's own relative links.
   * The authored href is stashed on first pass, because after one rewrite the
   * href carries a ?lang= of its own and would no longer match on the next
   * switch - leaving stale languages behind in the nav. */
  function decorateLinks(lang) {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var original = a.getAttribute("data-i18n-href");
      if (original === null) {
        var href = a.getAttribute("href");
        if (/^(https?:)?\/\//.test(href) || href.indexOf("mailto:") === 0) return;
        if (!/\.html([?#]|$)/.test(href)) return;
        original = href;
        a.setAttribute("data-i18n-href", original);
      }
      var base = original.split("#")[0];
      var hash = original.indexOf("#") > -1 ? original.slice(original.indexOf("#")) : "";
      a.setAttribute("href", lang === DEFAULT ? base + hash : base + "?lang=" + lang + hash);
    });
  }

  function switchTo(lang, persist) {
    if (persist) store(lang);
    apply(lang);
    renderSwitcher(lang, function (next) { switchTo(next, true); });
    decorateLinks(lang);
    syncUrl(lang);
  }

  function start() {
    english = snapshot();
    var lang = detect();
    // Remember an explicit ?lang= so it survives navigation between pages.
    if (queryLang()) store(lang);
    switchTo(lang, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
