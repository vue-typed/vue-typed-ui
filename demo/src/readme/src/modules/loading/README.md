## focus

Add/remove `loading` class to target element

Usage:

```
$ui.loading(<target-element>)
```

Start loading manually:

```
var target = $ui.loading(<target-element>, false)
target.start()
```

To stop:

```
$ui.loading(<target-element>).stop()
```
or
```
target.stop()
```

