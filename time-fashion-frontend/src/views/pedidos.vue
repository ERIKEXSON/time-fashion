<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Carrito de compras</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Revisar pedido</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Pedido Procesado</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="black"
          height="200px"
        >
          <v-toolbar color="white">
            <v-toolbar-title>Productos</v-toolbar-title>
            <v-toolbar-title style="margin-left:520px; margin-right:10px">Precio</v-toolbar-title>
            <v-toolbar-title style="margin-left:50px;margin-right:40px">Cantidad</v-toolbar-title>
            <v-toolbar-title style="margin-right:10px">Total</v-toolbar-title>
          </v-toolbar>
          <v-card-actions class="black">
            <v-card-text>
            <v-img :src="frases" class="img-responsive3" @click="clickPush('/tanks-hombre')">
            </v-img>
            </v-card-text>
            <v-layout
              align-end
              fill-height
              pa-3
              white--text
            >
              <div class="titlefont-weight-thin">
                <v-title style="margin-right:130px">$30.000</v-title>
                <v-title style="margin-left:-20px; margin-right:90px">1</v-title>
                <v-title style="margin-right:200px">$30.000</v-title>
              </div>
            </v-layout>
          </v-card-actions>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Hacer Compra
        </v-btn>
        <v-btn
          color="primary"
          to="/"
        >
          Continuar Comprando
        </v-btn>

        <v-btn to="/carrito" >Borrar Pedido</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
           <div>
            <div class="headline">1. Regístrate</div>
            <span class="grey--text">
              Para poder hacer el pedido debes estar registrado, esto con el fin de permitirte hacer:
              <v-spacer></v-spacer>
              1.Seguimiento a tu pedido <v-spacer></v-spacer>
              2.Mantener un historial de pedido <v-spacer></v-spacer>
              3.Almacenar direcciones y datos de contacto para próximas compras <v-spacer></v-spacer>
              4.Una navegación más fácil en el sitio <v-spacer></v-spacer>
            </span>
            <v-card-actions class="tilte">
              Si ya tienes una cuenta (estás registrado) ingresa aquí:
            </v-card-actions>
            <v-card-actions>
              <v-form>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        type="password"
                        v-model="contrasena"
                        label="Contraseña"
                        outline
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-actions>
          </div>
          <v-btn color="#546E7A" to="/registrarse">registrate</v-btn>
          <v-btn color="#546E7A" :disabled="!formIsValid" @click="step++" >Entrar</v-btn>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <div class="headline">1. Datos de Envío</div>
          <v-card-actions>
              <v-form>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                        label="Nombre"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Apellido"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Correo electronico"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Cédula"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Teléfono/Celular"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Departamento"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Ciudad"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Barrio"
                        outline
                      ></v-text-field>
                    </v-flex>
                    <span>
                      Enviaremos la factura a tu correo electrónico, te llegará desde <span style="color: blue">siesafe@siesa.com</span><v-spacer></v-spacer>
                      Si no lo ves en tu bandeja de entrada busca en spam
                    </span>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-actions>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <div class="headline">2. Método de Envío</div>
          <v-card-actions></v-card-actions>
          <v-card-actions>Tu envío es gratis si compras más de $40.000 en ropa sin descuento.</v-card-actions>
          <span>
            TCC<v-spacer></v-spacer>
            4 días hábiles. * $10.000 Tu pedido se procesará en 24 horas y desde ese momento empiezan a contar los días hábiles (Sábados, domingos y festivos no son días hábiles)
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <v-card-text>
          <div class="headline">3. Información de pago</div>
          <v-container fluid>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Tarjeta de crédito" value="radio-1"></v-radio>
              <v-radio label="Pago con débito - PSE" value="radio-2"></v-radio>
              <v-radio label="Pago en efectivo - Efecty" value="radio-3"></v-radio>
            </v-radio-group>
          </v-container>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="5">
        <v-card-text>
          <div class="headline">4. Términos y Condiciones</div>
          <div>
            <v-layout column justify-center align-center>
            </v-layout>
            <v-container
              id="scroll-target"
              style="max-height: 400px"
              class="scroll-y"
            >
              <v-layout
                v-scroll:#scroll-target="onScroll"
                column
                align-center
                justify-center
                style="height: 1000px"
              >
                TÉRMINOS Y CONDICIONES

Las siguientes Condiciones Generales, Condiciones de venta y Política de tratamiento de la información regulan el uso del sitio www.mattelsa.net (en adelante "sitio web"), del que MATTELSA S.A.S (de ahora en adelante “MATTELSA”) con NIT 830513441-8 y domicilio en la Calle 35 # 46-63 en Medellín - Antioquia, es titular. A través de www.mattelsa.net, MATTELSA entrega información acerca de sus productos y ofrece la posibilidad de comprarlos. Las personas que quieran realizar compras deben registrarse para de esta forma adquirir la condición de “Cliente”. Algunas secciones del sitio web son accesibles a personas que no están registradas (en adelante, "Usuarios"). En este sentido, los Clientes y Usuarios aceptan los términos y condiciones recogidos en este documento, en la medida que ello les pueda ser de aplicación. Si un usuario estuviera interesado en recibir algún artículo fuera de Colombia debe ingresar a www.en.mattelsa.net

CONTACTO: Para cualquier tipo de duda, consulta o sugerencia, los Usuarios pueden comunicarse con MATTELSA a través de Instagram, Facebook y llamar o escribir al +57 3005071000

CONDICIONES DE VENTA

Disponibilidad de la ropa

MATTELSA informa al Cliente que las unidades disponibles en el sitio web corresponden a las existencias en la bodega. En ningún caso MATTELSA pondrá a la venta de forma intencionada más unidades de las que disponga. MATTELSA, en casos difícilmente controlables cómo errores humanos o incidencias en los sistemas informáticos, en donde la cantidad en inventario disponible difiera del pedido realizado, MATTELSA informará al Cliente vía email de la anulación total o parcial de su pedido, de manera que pueda seleccionar nuevos ítems para su pedido o si el Cliente solicita devolución de dinero, esta se realizará de acuerdo con lo estipulado en “DEVOLUCIONES”.

Precios

Todos los precios de los productos son en pesos colombianos e incluyen el IVA y los demás impuestos que pudieran corresponder. Pero no incluyen los gastos correspondientes al envío de los productos, que se detallan en “MÉTODO DE ENVÍO” y deben ser aceptados por el Cliente.

Pagos

El Cliente se compromete a pagar en el momento que realiza el pedido, la ropa más los gastos de envío. Estos valores serán mostrados previamente al Cliente antes de finalizar la compra. Los pagos se realizan a través de Mercado Pago y Zona Virtual S.A. y están sujetos a sus condiciones y protocolos de seguridad. Los clientes pueden utilizar tarjetas de crédito de las franquicias Visa, MasterCard, American Express y Diners, su tarjeta débito a través de PSE o pagar con Efecty.

Si la transacción es rechazada, el Cliente podrá comunicarse directamente con su entidad bancaria para verificar la causa del rechazo. Si el pago es exitoso, el Cliente recibirá un correo electrónico, al e-mail registrado en el formulario de compra. Todas las transacciones estarán sujetas a la verificación del ingreso efectivo en la cuenta bancaria de MATTELSA y a verificaciones adicionales. En caso de los pagos a través de Efecty, el código para pagar tiene una caducidad de 48 horas, si en este plazo el usuario no realiza el pago, este será cancelado automáticamente.

MATTELSA se reserva el derecho hacer las validaciones de datos pertinentes a través de Mercado Pago, que demuestren la correcta identidad del tarjetahabiente con el fin de prevenir suplantaciones o fraudes. El pedido no será enviado hasta no ser verificada la información.

Aunque MATTELSA dispone de un sistema de conexión segura para la realización de pagos de todas las compras, en ningún caso será responsable por los fallos en las comunicaciones de las entidades bancarias, así como tampoco de los daños causados a los Clientes por dichas entidades. En caso de sospecha o comprobación del uso indebido de la pasarela de pagos incluyendo intento de fraude, actividades de “hacking” o intento de violación de los sistemas de seguridad, MATTELSA podrá iniciar las acciones legales correspondientes. MATTELSA no asume ninguna responsabilidad cuando el usuario no haya procedido a notificar a las correspondientes entidades financieras de la pérdida, el uso indebido, sustracción o hurto de los instrumentos o información personal conferidos por éstas para realizar transacciones.

El Cliente deberá notificar a MATTELSA cualquier cargo indebido en la tarjeta utilizada para las compras en el menor tiempo posible para que MATTELSA pueda realizar las gestiones oportunas.

Envíos

I. Entrega del producto

MATTELSA se compromete a entregar el producto en perfecto estado en la dirección que el Cliente señale en el formulario de datos de envío. Con el fin de optimizar la entrega, MATTELSA sugiere al Cliente que indique una dirección en la cual el pedido pueda ser entregado dentro del horario laboral habitual. MATTELSA no será responsable por los errores causados en la entrega cuando la dirección de entrega introducida por el Cliente en el formulario de datos de envío no se ajuste a la realidad, o hayan sido omitidos algunos datos. El envío del pedido será gratuito en caso de que la ropa SIN descuento sume $40.000 o más.

II. Plazo de Entrega

MATTELSA realiza los envíos utilizando los servicios de Coordinadora Mercantil o de TCC. El pedido realizado será entregado en un plazo máximo de 10 días laborables desde la fecha de facturación, según la ubicación del Cliente.

El Cliente debe tener en cuenta que días no laborales como sábados, domingos o días festivos pueden demorar un poco su pedido. Estos plazos son una estimación. Por ello, es posible que varíen por razones logísticas o de fuerza mayor. En caso de retrasos en las entregas, MATTELSA informará al Cliente tan pronto como sepa de ello.

II. Datos de Entrega, entregas no realizadas y extravío

Si la empresa transportadora va a entregar un pedido y el Cliente no está; ellos volverán a intentarlo hasta dos veces más. (Generalmente en días consecutivos). Si se reporta una novedad con la entrega, MATTELSA se comunica con el Cliente para darle solución a la misma. En caso de que MATTELSA no pueda comunicarse, el pedido será devuelto a nuestro Centro de Distribución y el Cliente deberá hacerse cargo de los gastos de envío. Cada entrega se considera efectuada a partir del momento en el cual la empresa de transportes pone el producto a disposición del Cliente, esto se evidencia a través del sistema de seguimiento de paquetes utilizado por la empresa de transportes. Si el motivo por el que no se ha podido realizar la entrega es el extravío del paquete, la empresa de transporte iniciará una investigación. En este caso MATTELSA estará en contacto con el Cliente para hacer un nuevo despacho o devolución.

IV. Problemas en el momento de la entrega

El Cliente deberá comprobar el buen estado del paquete en el momento de recibirlo. Si una vez revisado el producto, el Cliente ve indicios de haber sido abierto o identifica algún imperfecto causado en el transporte, éste se compromete a comunicarlo a MATTELSA en el menor tiempo posible dentro de las siguientes 48 horas desde la entrega. A partir de ese momento no se atenderán incidencias de este tipo.

Cambios, DEVOLUCIONES y garantías

Para solicitar un cambio o devolución, el Cliente puede acercarse a cualquier tienda física en Colombia con la ropa nueva y en perfecto estado, todas sus etiquetas y marquillas pegadas y la factura de compra correspondiente. Los cambios o devoluciones pueden hacerse dentro de los 30 días calendario posterior a la fecha de la compra. Los cambios no aplican para tops tipo body pero si aplica la garantía por calidad.

I. Cambios de ropa

Para realizar un cambio a través del sitio web, el Cliente debe comunicarse con MATTELSA para aprobarlo.

Para la ropa correspondiente a la categoría SALE:

-El Cliente asume en todos los casos, todos los gastos de envío. MATTELSA informará al cliente la dirección a la que debe enviar el producto. El Cliente puede enviarlo mediante la empresa de mensajería de su elección.

Para la ropa sin descuento: -En su primer cambio: MATTELSA recoge la ropa en la dirección del Cliente y asume todos los gastos de envío. A partir del segundo cambio en el mismo pedido, el Cliente asume todos los costos de envío. MATTELSA informará al cliente la dirección a la que debe enviar el producto. El Cliente puede enviarlo mediante la empresa de mensajería de su elección.

II. Devolución de dinero

La devolución de los productos dará lugar a un reembolso igual al valor de los productos devueltos. Únicamente en el caso donde el producto entregado sea defectuoso o incorrecto, MATTELSA reembolsará también al Cliente los gastos de envío correspondientes, de lo contrario no habrá devoluciones del gasto de envío. La devolución de dinero se hará al medio de pago inicial del Cliente. El plazo es de 30 días hábiles. Si es tarjeta de crédito, dependerá de las fechas de corte de la tarjeta y los tiempos de la entidad financiera; esto puede tomar hasta 2 meses.

III. Garantías

Para hacer efectiva una garantía el Cliente tiene dos opciones: Acercarse a cualquier tienda en Colombia, con la ropa y la factura de compra correspondiente. Envía las fotos de la prenda con problemas a mattelsavirtual@mattelsa.net para evaluar el caso y poder programar la recogida de la ropa defectuosa y enviar la nueva. MATTELSA asume tanto el valor del envío de la devolución como el envío de la nueva ropa a la ubicación del cliente. La garantía perderá su vigencia pasados 60 días desde la fecha de la compra, o en caso de defectos o deterioros causados por factores externos como, accidentes, desgaste por uso y lavado, o por cuidado no conforme con las instrucciones dadas en las etiquetas internas de la ropa. Quedan excluidos de la garantía los productos modificados o reparados por el Cliente y no cubrirá los productos dañados por un uso inadecuado.

Seguridad en el E-commerce

Realizar pagos a través del sitio web de MATTELSA es seguro porque: MATTELSA cuenta con máximas medidas de seguridad. El proceso funciona sobre un servidor seguro utilizando el protocolo SSL (Secure Socket Layer). El servidor seguro establece una conexión que asegura que sólo sea inteligible para el ordenador del Cliente y el del E-Commerce. De esta forma, al utilizar el protocolo SSL se garantiza: Que el Cliente está comunicando sus datos únicamente al centro servidor de MATTELSA. Que entre el Cliente y el centro servidor de MATTELSA los datos se transmiten cifrados, evitando su posible lectura o manipulación por terceros. Desde www.mattelsa.net, MATTELSA no captura, almacena ni transmite datos transaccionales, ya que cuenta con las pasarelas de pago: Mercado pago (Tarjeta de crédito) y Zona pagos (Tarjeta Débito) certificadas con PCI; certificado en altos estándares de seguridad que incluyen entre otros; software de encriptación, procedimientos de validación y medidas robustas de protección de datos.

ACCESO A CONTENIDOS DE MATTELSA

Los Clientes y Usuarios son totalmente responsables de su conducta al acceder a la información del sitio web mientras naveguen en el mismo, así como después de haber accedido. Como consecuencia de lo anterior, los Clientes y Usuarios son los únicos responsables ante MATTELSA y terceros de las consecuencias que se puedan derivar de una utilización: Con fines o efectos ilícitos o contrarios al presente documento, de cualquier contenido del sitio web, elaborado o no por MATTELSA, publicado o no bajo su nombre de forma oficial. contraria al contenido del presente documento y lesiva de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar o deteriorar el sitio web o sus servicios o impedir el normal disfrute por otros Usuarios. MATTELSA se reserva el derecho a actualizar los contenidos cuando lo vea conveniente, así como a eliminarlos, limitarlos o impedir el acceso a ellos, de manera temporal o definitiva, así como denegar el acceso al sitio web por parte de Clientes y Usuarios que hagan un mal uso de los contenidos y/o incumplan cualquiera de las condiciones que aparecen en el presente documento.

PROPIEDAD INTELECTUAL

MATTELSA tiene todos los derechos sobre el contenido, diseño, diagramación y código fuente de esta página Web y, en especial, sobre las fotografías, imágenes, logos, diseños de la ropa, marcas y nombres comerciales que se incluyen en el sitio web. Estos derechos están protegidos por la legislación vigente relativa a la propiedad intelectual. Queda expresamente prohibida la reproducción total o parcial de este sitio web sin el permiso expreso y por escrito de MATTELSA.

Asimismo, queda totalmente prohibida la copia, reproducción, adaptación, modificación, distribución, comercialización, comunicación pública y/o cualquier otra acción que comporte una infracción de la normativa vigente en Colombia o en el resto del mundo en materia de propiedad intelectual y/o industrial si no es con la previa autorización expresa y por escrito de MATTELSA.

MATTELSA informa que no concede licencia o autorización implícita alguna sobre los derechos de propiedad intelectual y/o industrial o sobre cualquier otro derecho o propiedad relacionado, directa o indirectamente, con los contenidos incluidos en su sitio web.

RESPONSABILIDAD

MATTELSA no asume responsabilidad derivada del acceso de menores de edad a los contenidos incluidos en el sitio web, siendo responsabilidad de sus padres ejercer un control adecuado sobre la actividad de los hijos o menores a su cargo o bien instalar alguna de las herramientas de control del uso de Internet con el objeto de evitar el acceso a materiales o contenidos no aptos para menores, así como el envío de datos personales sin la previa autorización de sus padres o tutores.

MATTELSA no será responsable en ningún caso cuando se produzcan: Errores o retrasos en el acceso al sitio web por parte del Cliente a la hora de introducir sus datos en el formulario de pedido, la lentitud o imposibilidad de recepción por parte de los Clientes de la confirmación del pedido o cualquier anomalía que pueda surgir cuando estas incidencias sean debidas a problemas en la red Internet, causas de fuerza mayor y cualquier otra contingencia imprevisible ajena a la buena fe de MATTELSA. Fallos o incidencias que pudieran producirse en las comunicaciones, borrado o transmisiones incompletas, de manera que no se garantiza que los servicios del sitio web estén constantemente operativos. De errores o daños producidos al sitio web por un uso del servicio ineficiente y de mala fe por parte del Cliente.

POLITICA DE TRATAMIENTO DE LA INFORMACIÓN

MATTELSA S.A.S., sociedad identificada con NIT 830513441-8, domiciliada en la calle 35 No. 46 63 de la ciudad de Medellín y teléfono 2320913, es responsable del manejo de datos personales y lo hará obrando con criterios de confidencialidad, seguridad y circulación restringida. Para la principal actividad de la empresa, la cual se basa en la producción y comercialización de ropa; MATTELSA requiere acceso a los datos de clientes, proveedores, empleados y demás terceros para el normal funcionamiento de sus actividades comerciales y laborales.

Manera de obtener los datos

Uno de los métodos mediante el cual MATTELSA recopila datos de sus clientes es a través de su página oficial www.mattelsa.net al momento del cliente hacer sus compras virtuales. En su página y tienda virtual MATTELSA le solicita a los clientes, por medio de un formulario, la información básica personal para poder realizar envíos, también se puede presentar que los clientes proporcionen sus datos personales de manera espontánea queriendo recibir información especial por parte de la empresa. El manejo de los datos con personas naturales o jurídicas susceptibles de una relación con MATTELSA, se realiza a través de correos electrónicos corporativos u otros medios utilizados para el conocimiento de los datos pertinentes.

Tratamiento, seguridad y exclusividad de datos

MATTELSA garantiza que al obtener los datos personales son de acceso y uso exclusivo de la compañía y el tratamiento que se les da es confiable y seguro. Los datos autorizados serán utilizados únicamente por personas autorizadas por la empresa. De igual manera, MATTELSA cuenta con un equipo de trabajo calificado para el manejo de la información, desde el manejo de la base de datos hasta recursos tecnológicos destinados a este fin.

Finalidad de la información

MATTELSA garantiza que la finalidad del manejo de datos personales es asegurar el ejercicio normal de las relaciones comerciales y laborales; así como de sus actividades inherentes.

Derechos como titular y procedimientos específicos

Los derechos que asisten al cliente como titular de los datos suministrados, son: el derecho a conocer, actualizar, rectificar y suprimir su información personal, a revocar el consentimiento otorgado, solicitar prueba de la autorización, a solicitar y recibir información acerca de la finalidad del uso de sus datos, presentar quejas ante la SIC por mal uso de sus datos, y a informarse gratuitamente de los datos objeto de tratamiento. Se aclara que en caso de que se requiera hacer uso de datos que versen sobre datos sensibles o sobre datos de niñas, niños y adolescentes el Cliente podrá abstenerse de suministrar dicha información, entendiendo por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación. Conforme a lo anterior, la atención de peticiones, consultas y reclamos, está a cargo de: * Julian Quiceno, Director de eCommerce, con quien se puede comunicar enviando un correo a julianquiceno@mattelsa.net, para datos relacionados con clientes.

Datos sensibles y de menores de edad

MATTELSA se compromete a dar el uso adecuado y seguro a los datos de niñas, niños y adolescentes menores de 18 años, respondiendo y respetando el interés superior de los niños; así como respetará y dará un manejo adecuado a los datos sensibles, siendo consciente de que ameritan un cuidado especial y sin perjuicio de ninguno de sus derechos fundamentales y entendiendo que los datos sensibles son aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico. La política de tratamiento de información tiene duración indefinida en el tiempo y es publicada a los interesados a partir del día 30 de septiembre de 2013. El tiempo durante el cual MATTELSA hace uso de los datos es por tiempo indefinido o hasta que las personas involucradas lo determinen y depende de las necesidades de la empresa para realizar su actividad. Cuando los datos versen sobre datos sensibles o sobre datos de niñas, niños y adolescentes podrá abstenerse de responder, entendiendo por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación. Si el Cliente ya hacía parte de la base de datos de MATTELSA, es necesario contar con su autorización para continuar teniendo registro y haciendo uso de sus datos. Si después de 30 días hábiles de recibir este aviso no realiza la acción correspondiente a revocar la autorización, se entiende de manera inequívoca y expresa que usted da autorización de mantener su información, lo anterior, conforme a la ley 1581 de 2012 y su decreto reglamentario 1377 de 2013.

Si usted está de acuerdo con lo que dispone esta política y autoriza a MATTELSA a hacer uso de sus datos personales, tenga presente esta información para acciones futuras. Si por el contrario, desea que sus datos no sean utilizados por la empresa en ningún contexto, puede comunicarse con la persona anteriormente designada como responsable a través de su correos electrónico.

Actualizado el 11/12/2017
              </v-layout>
            </v-container>
          </div>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Acepto términos y condiciones" value="radio-1"></v-radio>
            </v-radio-group>
        </v-card-text>
      </v-window-item>
    </v-window>
    <v-divider></v-divider>

      <v-card-actions
    >
      <v-btn
        :disabled="step === 2"
        flat
        @click="step--"
      >
        Atras
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step <5"
        color="primary"
        depressed
        @click="e1 = 3"
      >
        Finalizar Compra
      </v-btn>
      <v-btn
        :disabled="step ===1"
        color="primary"
        depressed
        @click="step++"
      >
        Continuar
      </v-btn>
    </v-card-actions>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Volver al carrito
        </v-btn>

        <v-btn flat to="/">Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3" class="text-xs-center">
        <img src="@/assets/favicon.png"  width="100px" alt="">
        <div class="headline">Tu pedido esta en proceso</div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import FRASES from '@/assets/hombre/tanks/azuloscuro.jpg'
export default {
  data () {
    return {
      step: 1,
      e1: 0,
      frases: FRASES,
      email: '',
      contrasena: ''
    }
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-up'
        case 2: return 'Create a password'
        default: return 'Account created'
      }
    }
  },
  computed: {
    formIsValid () {
      return (
        this.email &&
        this.contrasena
      )
    }
  },
}

</script>
<style>
.img-responsive3{
  padding: 40px 30px 0px 50px;
  display: inline-block;
  height: 100px;
  width: 100px;
}
</style>
