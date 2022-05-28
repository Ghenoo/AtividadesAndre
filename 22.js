<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var custo_fabrica = parseFloat(prompt('Valor do custo de fábrica: '))
      var distribuidor = parseFloat(prompt('Distribuidor: '))
      var impostos = parseFloat(prompt('Impostos: '))

      var custo_consumidor =
        custo_fabrica + (distribuidor * 28) / 100 + (impostos * 45) / 100

      console.log('O custo do consumidor é ', custo_consumidor)
    </script>
  </body>
</html>
