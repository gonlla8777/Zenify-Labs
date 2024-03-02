# ![Logo de mi empresa](https://res.cloudinary.com/di5mf85h3/image/upload/v1708093477/Logo_lz2bpd.svg) **Zenify Labs**

1. **Home Panel** (`/panel`):

   - _Descripción_: La página de inicio del panel ofrece una visión general de todas las funciones y herramientas disponibles en tu sitio web. Desde aquí, los usuarios pueden acceder fácilmente a diferentes secciones y funcionalidades del panel de control.

<span style="text-decoration: underline; color: #469C4A">Métodos GET</span>

```
Selección de Idioma
{
  "spanish": {
    "home": {
      "title": "Bienvenido",
      "controlPanel": "Panel de Control",
      "activeFunnels": "Embudos Activos",
      "dataList": "Lista de Datos",
      "sendEmails": "Enviar Correos",
      "automations": "Automatizaciones",
      "outbox": "Bandeja de Salida",
      "emailTemplates": "Plantillas de correo"
    }
  },
  "english": {
    "home": {
      "title": "Welcome",
      "controlPanel": "Control Panel",
      "activeFunnels": "Active Funnels",
      "dataList": "Data List",
      "sendEmails": "Send e-mails",
      "automations": "Automations",
      "outbox": "Outbox",
      "emailTemplates": "Email templates"
    }
  }
}

```

---

2. **Embudo** (`/embudo`):

   - _Descripción_: Aquí, los usuarios pueden visualizar y analizar el embudo de ventas o cualquier otro tipo de embudo definido para tu negocio, lo que les ayuda a comprender mejor el flujo de clientes a través del sitio.

<span style="text-decoration: underline; color: #469C4A">Métodos GET</span>

```
Selección de Idioma

{
  "spanish": {
    "funnel": {
      "title": "Embudos Activos",
      "requestFunnels": "Solicitar Embudos",
      "periods": "Periodos",
      "to": "al",
      "audienceReached": "Público Alcanzado",
      "growth": "Crecimiento",
      "listEntries": "Entradas a las listas",
      "ofTraffic": "del tráfico",
      "salesMade": "Ventas Realizadas",
      "accept": "Aceptar",
      "funnelMail": "zenifylabs@gmail.com"
    }
  },
  "english": {
    "funnel": {
      "title": "Active Funnels",
      "requestFunnels": "Funnel Request",
      "periods": "Periods",
      "to": "to",
      "audienceReached": "Audience Reached",
      "growth": "Growth",
      "listEntries": "List Entries",
      "ofTraffic": "of Traffic",
      "salesMade": "Sales Made",
      "accept": "Accept",
      "funnelMail": "zenifylabs@gmail.com"
    }
  }
}
```

```
Data Funnels
"embudoData": [
    {
      "title": "Bootcamp: Convertí tu agencia en Growth Partner 1",
      "description": "www.dcgacademy.co de la imagen 1",
      "src": "https://res.cloudinary.com/di5mf85h3/image/upload/v1709277718/bootcam_j9wq6w.png",
      "firstPeriod": "01/01/2023",
      "secodPeriod": "01/02/2023",
      "audienceReached": "122.352",
      "growth": "5",
      "listEntriesData": "3.500",
      "trafficPercentage": "2.86",
      "salesMade": "400",
      "salesPercentage": "0.32"
    },....
  ]
```

---

3. **Data List** (`/datalist`):

   - _Descripción_: En la página de lista de datos, los usuarios pueden ver y gestionar los datos recopilados por tu sitio web. Esto puede incluir información de clientes, registros de transacciones, o cualquier otro tipo de datos relevantes para tu negocio. Los usuarios pueden ordenar, filtrar y buscar datos específicos para su análisis.

<span style="text-decoration: underline; color: #469C4A">Métodos GET</span>

```
Selección de Idioma

{
"spanish": {
 "dataList": {
   "title": "Lista de Datos",
   "list": "Listas",
   "source": "Fuente",
   "extension": "Extensión",
   "data": "Datos",
   "actions": "Acciones"
 }
},
"english": {
 "dataList": {
   "title": "Data List",
   "list": "Lists",
   "source": "Source",
   "extension": "Extension",
   "data": "Data",
   "actions": "Actions"
   }
  }
}
```

```
Listas de Datos

"dataList": [
 {
   "lista": "Ninja Expert Leads cualificados",
   "fuente": "Emergente Inicio Form, www.juangutierez.com",
   "extension": "11.825",
   "datos": {
     "email": true,
     "name": false,
     "phone": true,
     "instagram": false,
     "sex": true,
     "age": false,
     "country": true,
     "income": false
   },
   "acciones": {
     "download": false,
     "senMail": true
   }
 },
 {
   "lista": "Ninjalab | Content ExpertB",
   "fuente": "Landing Form, ninjalab.net",
   "extension": "252.485",
   "datos": {
     "email": false,
     "name": true,
     "phone": false,
     "instagram": true,
     "sex": false,
     "age": true,
     "country": false,
     "income": true
   },
   "acciones": {
     "download": true,
     "senMail": true
   }
 }
]
```

_Observaciones : existe un error al cambiar el idioma de las listas dado que el la tabla no se actualiza con el cambio de estado._

---

4. **Send Mails** (`/sendMails`):

   - _Descripción_: La página de enviar correos electrónicos permite a los usuarios crear y enviar correos electrónicos a una lista de destinatarios. Pueden diseñar el contenido del correo electrónico, seleccionar destinatarios específicos, programar el envío y realizar un seguimiento del rendimiento de la campaña de correo electrónico.

<span style="text-decoration: underline; color: #469C4A">Métodos GET</span>

```
Selección de Idiomas

{
  "spanish": {
    "sendMails": {
      "title": "Enviar Correos",
      "emitters": "Emisores",
      "public": "Público",
      "close": "Cerrar",
      "affair": "Asunto",
      "saveTemplate": "Guardar Plantilla",
      "send": "Enviar"
    }
  },
  "english": {
    "sendMails": {
      "title": "Send Emails",
      "emitters": "Emitters",
      "public": "Public",
      "close": "Close",
      "affair": "Affair",
      "saveTemplate": "Save Template",
      "send": "Send"
    }
  }
}
```

```
Datos Emisores

"dataEmisor": [
    {
      "avatar": "https://res.cloudinary.com/di5mf85h3/image/upload/v1706962555/jpgsalta-1-2_1_a1quvn.png",
      "name": "Juan Gutierrez"
    },
    {
      "avatar": "https://res.cloudinary.com/di5mf85h3/image/upload/v1698287212/b1494cc6-9d0c-44cf-aa3a-8ba9d42aea3c_kfionj.jpg",
      "name": "Gonzalo Llanos"
    }
  ],


Datos Público

  "dataReceptor": [
    "Ninja experts Leads Cualificados",
    "Ninja experts Leads Cualificados 2",
    "Ninja experts Leads Cualificados 3 "
  ]
```

<span style="text-decoration: underline; color: #FF6347">Métodos POST</span>

```
Objeto "Send Mail"
{
    "sender": "Juan Gutierrez",
    "recipients": [
        "Ninja experts Leads Cualificados"
    ],
    "subject": "Asunto del Mail",
    "content": "<p>Contenido del mail</p>"
}
```

---

5. **Automation** (`/automation`):

   - _Descripción_: La página de automatización ofrece herramientas para configurar y gestionar procesos automatizados en tu sitio web. Esto puede incluir flujos de trabajo de marketing automatizados, respuestas automáticas a eventos específicos o cualquier otra tarea que desees automatizar para mejorar la eficiencia y la experiencia del usuario.

---

6. **Login** (`/`):
   - _Descripción_: La página de inicio de sesión es la puerta de entrada para los usuarios autorizados a tu sitio web. Aquí, los usuarios pueden iniciar sesión utilizando sus credenciales para acceder a las funciones y herramientas disponibles para ellos en el panel de control.
