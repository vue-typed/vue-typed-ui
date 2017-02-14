# [VueTypedUI](https://vue-typed.github.io/vue-typed-ui)

> Is sets of UI components made with [Semantic UI](http://semantic-ui.com/), [VueTyped](https://vue-typed.github.io/vue-typed) and friends

### Install

```bash
npm install vue-typed-ui --save-dev
```

### Usage
```typescript
import * as Vue from 'vue'
import * as VueTypedUI from 'VueTypedUI'
Vue.use(VueTypedUI /* optional */ ,{
  prefix: 'ui',
  settings: { /* see options/settings section bellow */ }
})
```

### Options

#### prefix

Components tag prefix. Default is 'ui'

#### settings

Some components may have some individual settings

<table>
    <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td colspan="3"><strong>Date / Time</strong></td>
        </tr>
        <tr>
          <td>dateFormat</td>
          <td>'MM/DD/YYYY'</td>
          <td>Date / DateTime format. You can change this format by follow <a href="https://momentjs.com/">momentjs</a> formats.</td>
        </tr>
        <tr>
          <td>timeFormat</td>
          <td>'HH:mm'</td>
          <td>Time format. You can change this format by follow <a href="https://momentjs.com/">momentjs</a> formats.</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Numeric</strong></td>
        </tr>
        <tr>
          <td>decimalPlaces</td>
          <td>2</td>
          <td>Decimal places</td>
        </tr>
        <tr>
          <td>decimalSeparator</td>
          <td>'.'</td>
          <td>Decimal separator</td>
        </tr>
        <tr>
          <td>groupSeparator</td>
          <td>','</td>
          <td>Group separator</td>
        </tr>
        <tr>
          <td>max</td>
          <td>9999999999999.99</td>
          <td>Maximum number that component can handle</td>
        </tr>
        <tr>
          <td>min</td>
          <td>-9999999999999.99</td>
          <td>Minimum number that component can handle</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Currency</strong></td>
        </tr>
        <tr>
          <td>sign</td>
          <td>'USD'</td>
          <td>Currency sign</td>
        </tr>
        <tr>
          <td>signPos</td>
          <td>'right'</td>
          <td>Currency symbol position</td>
        </tr>
        <tr>
          <td colspan="3"><strong>Toastr</strong></td>
        </tr>
        <tr>
          <td>toastr</td>
          <td>Official toastr default settings</td>
          <td>Settings for toastr component to get more detail see: <a href="http://codeseven.github.io/toastr/">http://codeseven.github.io/toastr/</a></td>
        </tr>
    </tbody>
</table>


### Requirements

*   [JQuery](https://github.com/jquery/jquery)
*   [Semantic UI](https://github.com/Semantic-Org/Semantic-UI)
*   [Semantic UI Calendar](https://github.com/mdehoog/Semantic-UI-Calendar)

These requirements must be referenced in your main HTML file. For example:

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Awesome App</title>
    <!-- requirement css-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" rel="stylesheet" type="text/css">
    <link href="https://cdn.rawgit.com/mdehoog/Semantic-UI-Calendar/master/dist/calendar.min.css" rel="stylesheet" type="text/css">
  </head>

  <body>
    <!-- main app here-->
    <div id="app"></div>
    <!-- requirement scripts-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js"></script>
    <script src="https://cdn.rawgit.com/mdehoog/Semantic-UI-Calendar/master/dist/calendar.min.js"></script>
  </body>

</html>
```

### Credits

*   [autoNumeric](https://github.com/BobKnothe/autoNumeric)
*   [JQuery](https://github.com/jquery/jquery)
*   [Lodash](https://lodash.com/)
*   [Moment.js](http://momentjs.com/)
*   [Semantic UI](https://github.com/Semantic-Org/Semantic-UI)
*   [Semantic UI Calendar](https://github.com/mdehoog/Semantic-UI-Calendar)
*   [SweetAlert2](https://limonte.github.io/sweetalert2/)
*   [Toastr](http://codeseven.github.io/toastr/)

### <a id="License_44"></a>License

MIT