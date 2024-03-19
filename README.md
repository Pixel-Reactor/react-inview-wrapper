
# React Inview wrapper

This is a wrapper for React JS that detects whenever the content inside the wrapper is inside the viewport of the window.

It will start a fade off animation when more than half height of the content is outside the viewport.

It allows to change the animation with a custom one, it accepts a sting with the custom animation css class or Tailwind - Bootstrap as it will reset the default one and set the className string with the provided one.




https://pixel-reactor.github.io/drag-light/
## Installation

Install my-project with npm

```bash
 npm i react-inview-wrapper
```
## Import

Install react-inview-wrapper with npm

```bash
import { InView } from "react-inview-wrapper";

```
## Use example

if any customStyles, customStyleIn or customStyleOut the component will have a custom animation to fade out or in.

If you want to customize the element css , animation in or out you can use one or more like this.

```bash
<InView customStyles="transition-all duration-500" customStyleIn="customopacityin" customStyleOut="customopacityout ">

      <p className="p-3">Hello World!</p>
    
</InView>

```
Or not pass any props to use the custom animation

```bash
<InView>

      <p className="p-3">Hello World!</p>
    
</InView>

```


All custom props only allow string values
## Compatibilty

This component either works with CSS classes or CSS frameworks like TailWind or BootStrap as it will set it as React className  
    
## Authors

- [@pixel-reactor](https://github.com/Pixel-Reactor)

