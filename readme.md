# Simple HTML In-Page Router.

Simple Stack based HTML in-page router.

## Usage/Examples

Create a class named .hide in youre main css file and use it in every element in the the routing cofiguration except the default route.

```css
.hide {
  display: none;
}
```

Now use this class with hidden elements at first load.

```html
<div>
  <div id="element-1">
    One <button type="button" onclick="goBack()">Go Back</button
    ><button type="button" onclick="gotoTwo()">Goto 2</button>
  </div>
  <div id="element-2" class="hide">
    Two <button type="button" onclick="goBack()">Go Back</button
    ><button type="button" onclick="gotoThree()">Goto 3</button>
  </div>
  <div id="element-3" class="hide">
    Three <button type="button" onclick="goBack()">Go Back</button
    ><button type="button" onclick="gotoFour()">Goto 4</button>
  </div>
  <div id="element-4" class="hide">
    Four <button type="button" onclick="goBack()">Go Back</button>
  </div>
</div>
```

The first route should be set to default.
If no default is provided, the first route in the list will be used as default.

```javascript
import Router from 'simple-html-inpage-router'
let router =  Router(
    {
        routes: [
            {
                path: "main",
                element: document.getElementById("element-1"),
                default: true
            },
            {
                path: "2",
                element: document.getElementById("element-2"),
            },
            {
                path: "3",
                element: document.getElementById("element-3"),
            },
            {
                path: "4",
                element: document.getElementById("element-4"),
            }
        ],
        onPopOff: (curr, next) => {
                    //here you can hide the previous element.
                    curr.classList.add("hide");
                    //here you can show the next element to push to the stack.
                    next.classList.remove("hide");
                },
        onNextRoute: (curr, next) {
                    //here you can hide the element to pop.
                    curr.classList.add("hide");
                    //here you can show the element to diplay as current route.
                    next.classList.remove("hide");
                },
    }
    function gotoTwo(){
        router.pushRoute("2");
    }

    function gotoThree(){
        router.pushRoute("3");
    }

    function gotoFour(){
        router.pushRoute("4");
    }

    function goBack(){
        router.popRoute();
    }
);
```

## Contributing

Contributions are always welcome!
Please use linter before creating a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
